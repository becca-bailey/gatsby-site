---
title: Why I Write Tests
date: "2019-08-20"
---

![computer](/clement-h-95YRwf6CNw8-unsplash.jpg)

As an apprentice at 8th Light, I learned a lot about test-driven development. I learned about the red/green/refactor cycle where you write a failing test, make it pass, and then improve your solution. I practiced ping pong pairing, where my pair and I alternate writing failing tests and then making them pass. TDD was a really important part of my growth and development as an engineer.

While I learned a lot from this kind of disciplined practice, over time I became disenchanted with the TDD-only approach. Or maybe I became disenchanted with people who love TDD with a kind of dogmatic, religious enthusiasm.

These days, I spike out a lot of solutions before I test them. I sometimes write the test first, and sometimes I don’t. Especially in JavaScript land, I rely on a combination of automated and manual testing using tools like Storybook, because I have experienced the frustration of writing a component that passes all my tests, but doesn’t work for a user, or vice versa.

And maybe that’s how we’re supposed to learn. In elementary school, I learned to diagram all the parts of my sentences, and write with perfect grammar. And today, I just started two sentences in a row with the word “and”. We learn to follow the rules, and then we learn how to break them.

But testing is still an important part of my workflow. While there are lots of justifications for writing tests, there are two reasons that matter the most to me. Testing is my daily practice of admitting I don’t always get it right, and showing concern for others.

## Admitting I don’t always get it right

We all make mistakes. Sometimes we forget to return values from our functions, execute steps in the wrong order, or write React components with 27 required props. The purpose of tests isn’t just to show us when we have bugs, but also to point out the flaws in our design.

For example, if the API of your function or class is difficult to test, if your human brain can’t remember the order of your arguments, if you have to mock out a lot of side effects, or if you have to keep reminding yourself about the shape of a complicated data structure, it might be time to make some changes.

While I hesitate to make too many generalizations about “good engineers” (because we _all_ hate that 10x engineer thread), in my experience, engineers who engage in the daily practice of testing are more likely to ask for help. They are more likely to admit when they are wrong, perhaps because being wrong doesn’t have disastrous consequences when you have more failsafes to help you diagnose and fix the problem.

## Showing concern for others

Whenever I work on a new feature, I usually consult the wireframes, talk through behavior and edge cases with the designer and product owners, and do my due diligence to gather context on how this feature should behave. In theory, I could use this context I have gathered up in my head to test my feature manually, and we could all trust that it works.

But what about the next person who touches this code? Even if they also do their due diligence, there’s no guarantee that they will get all the same information I had. After all, this could be a month, a year, or two years down the road. How does the next person know they’re not breaking something?

Or maybe the next person isn’t even touching your feature. Maybe they are changing a variable name throughout the codebase, and they had no idea that your feature would be affected. How do they know that something is wrong without manually testing every major path through the application?

Speaking from personal experience, the dread of breaking something I don’t know about is the worst. When I write tests, I am not only helping myself by documenting the use cases for my feature, but I am helping the next person as well.

On our teams, no one likes to be in the situation where something is wrong, and we don’t know it. Some bit of tension is bubbling underneath the surface, and we don’t know about it until it is too late—until relationships are broken, or deadlines are missed, or someone gets hurt. In case you haven’t figured this out yet, to me, testing is about more than just code.

It can’t fix all of our problems, but sometimes just spending a few minutes every day aligning with our daily mission of admitting mistakes, caring for others, and getting honest with where we are at right now can help to push us in the right direction.
