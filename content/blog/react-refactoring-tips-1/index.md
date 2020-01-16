---
title: "React Refactoring Tips: Dysfunctional API Boundaries"
date: "2020-01-16"
published: true
tags: typescript, react, javascript, refactoring
description: It's no fun when you let your dysfunctional API design mess up your component props. Here's one of my most common refactoring strategies for establishing healthy boundaries.
cover_image: https://thepracticaldev.s3.amazonaws.com/i/9yg5vwnwp8bwpp9beudn.jpg
---

We all have _that_ friend. You know, the one who just can't get it together after years of trying. I know we love them anyway, but after getting involved in their problems enough times it's time to put up some boundaries to prevent their dysfunctional behavior from seeping into our own lives.

Sometimes I feel this way about an API. I don't want to slam the developers, the deadlines, or the technical requirements that got us into this situation, but it's bad. Maybe there is inconsistent data formatting between different endpoints, null or undefined values I'm not expecting, duplicated data, or flattened data that should be nested.

I have been reading Refactoring by Martin Fowler, and it has inspired me to share a few of my most common front-end refactoring strategies. Components that are a little too friendly with the API data is one of the most common problems I have seen (or created) in many codebases.

## The Problem

Let's say I have two API endpoints: one that returns a logged-in user and another that returns the profile information for that user.

```
// GET /logged-in-user

{
  data: {
    id: "123",
    firstName: "Leslie",
    lastName: "Knope",
    email: "leslie@nationalparks.org",
  }
}
```

```
// GET /profile/:id

{
  data: {
    userData: {
      userFirstName: "Leslie",
      userLastName: "Knope",
      userEmail: "leslie@nationalparks.org",
      userLastLoginDate: "1/15/2020",
      userBio: null,
      userAddress1: "123 Cherry Street",
      userCity: "Pawnee",
      userState: "Indiana",
      userZip: 46012
    }
  }
}
```

On the alignment chart of bad APIs, I would probably consider this one a chaotic neutral. We have some inconsistent nesting, a non-ISO date format, and data attributes with different names, e.g. `email` vs `userEmail`. Overall though, it's pretty clear which attributes represent which values.

If I were designing these components based on the API response, I might have prop types that look like this.

```typescript
type NavbarProps = {
  id: string
  firstName: string
  email: string
  title: string
  baseUrl: string
  links: Array<{ text: string; url: string }>
}

type UserProfileProps = {
  userData: {
    userFirstName: string
    userLastName: string
    userEmail: string
    userLastLoginDate: string
    userBio?: string
    userAddress1: string
    userAddress2?: string
    userCity: string
    userState: string
    userZip: number
  }
}
```

You can see that for both of these components, we're starting to have the "too many required props" problem. Martin Fowler calls this the "Long Parameter List" problem. Even though `UserProfileProps` only has one required prop, the `userData` object has lots of required fields.

The primary problem with long and inconsistent props is how hard they are to replicate quickly. Even with the help of Typescript or prop types to tell me when I'm getting it wrong, it's going to be a pain to recreate this API data every time I want to test this component or render it in Storybook.

Also, with this approach, there is a good chance you have several lines of code in each component for parsing dates, checking for null values, and cleaning up the data that gets passed in. Fortunately, there's a better way!

## The Solution

Let's start by creating a couple of basic types that are a little more descriptive of the data we have here.

```typescript
type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  bio?: string
  lastLoginDate?: Date
}

type Address = {
  line1: string
  line2?: string
  city: string
  state: string
  zipCode: string
}
```

This isn't required, but I like to create factory functions for these types to make them easier to quickly instantiate all required props. For example, this is what a `createUser` function might look like.

```typescript
function createUser(props: Partial<User> = {}): User {
  return {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    ...props,
  }
}
```

In order to create a boundary between my components and my API, I need to think about what my ideal component API would look like.

```typescript
type NavbarProps = {
  user: User
  title: string
  baseUrl: string
  links: Array<{ text: string; url: string }>
}

type UserProfileProps = {
  user: User
  address: Address
}
```

I still have all the same data here, but my props are structured in a way that is more consistent and easier to understand. If I am making this change to an existing component, I would need to update props as well as my tests and rendering logic.

This is all well and good, but how do we deal with the fact that our API data is still less than perfect? This is where we would write a function to map our API data to our component props. For example, the formatter for `GET /profile/:id` might look something like this.

```typescript
import { createUser, createAddress } from "./factories";
import { parse } from "date-fns";

type UserProfileData {
  // same as original UserProfileProps
}

export function getPropsFromData({ userData }: UserProfileData) {
  const {
    userFirstName,
    userLastName,
    userEmail,
    userLastLoginDate,
    userBio,
    userAddress1,
    userAddress2,
    userCity,
    userState,
    userZip
  } = userData;

  return {
    user: createUser({
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      bio: userBio,
      lastLoginDate: parse(userLastLoginDate, 'MM/DD/YYYY', new Date())
    }),
    address: createAddress({
      line1: userAddress1,
      line2: userAddress2,
      city: userCity,
      state: userState,
      zipCode: String(userZip)
    })
  }
}
```

If my API data changes, that's okay. I'll just come back here and update this formatter. If it doesn't, that's okay too. Putting up this boundary and formatting my own props means that I can design my components the way that I want whether or not my API data gets it together any time soon.

Live the way you want, and don't let dysfunctional APIs get in the way.

---

This post was originally published on [dev.to](https://dev.to/beccaliz/react-refactoring-tips-dysfunctional-api-boundaries-1gib).
