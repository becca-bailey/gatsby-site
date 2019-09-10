---
title: ES6 Generators for State Management in React
description: We can use ES6 Generator functions to manage state with very little React code.
date: "10-10-2019"
---

When we talk about state management in JavaScript, we’re usually talking about using framework-specific libraries or tools, like redux or `setState` in React. But as we are looking for a state management strategy, I think there are powerful tools at our disposal in ES6. If we are implementing sequential state updates (multi-step forms, carousels, animations, etc), one such tool is a generator.

## What are generators?

Generators are special JavaScript functions that implement the [iterator protocol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators). If you have never used one before, bear with me because it is a bit of a learning curve to wrap your mind around them the first time!

If you’re already familiar with iterators, feel free to skip ahead, but if not, here’s my ten-second introduction.

### Intro to Iterators

For a function to implement the iterator protocol, it must return an object with a `next` function. This `next` function returns an object with the attributes `value` and `done`.

```javascript
const myIterator = createIterator()
const { value, done } = myIterator.next()
```

We can create our own iterator function like this.

```javascript
function createColorIterator() {
  let i = 0
  const colors = ["red", "yellow", "blue"]
  return {
    next: () => {
      if (i < colors.length) {
        let value = colors[i]
        i++
        return {
          value: value,
          done: false,
        }
      } else {
        return {
          value: undefined,
          done: true,
        }
      }
    },
  }
}

let iterator = createColorIterator()

console.log(iterator.next())
// { value: "red", done: false }
console.log(iterator.next())
// { value: "yellow", done: false }
console.log(iterator.next())
// { value: "blue", done: false }
console.log(iterator.next())
// { value: undefined, done: true }
```

This iterator keeps track of its own state using the `createColorIterator` function’s local scope. In this case, we can change the value of `i`, and it will persist inside the iterator. For more information, you can read about closures and lexical scoping [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

Also, I should note that any iterables in JS (Array, String, Map, Set, etc.) have a property called `Symbol.iterator` that returns an iterator.

```javascript
const colors = ["red", "yellow", "blue"]
const iterator = colors[Symbol.iterator]()

console.log(iterator.next())
// { value: "red", done: false }
// ...same as above
```

### Back to generators…

So, iterators are great! But building one from scratch can mean writing a lot of boilerplate. This is where generators come in! Generators are [special functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*) that do some ES6 magic for you to create an iterator. Generators can be super helpful for asynchronous programming, though I’m not really going to get into that here.

For example, I can now use `function*` syntax to re-write my iterator with a lot less code.

```javascript
function* createColorIterator() {
  let i = 0
  const colors = ["red", "yellow", "blue"]
  while (i < colors.length) {
    const color = colors[i]
    i++
    yield color
  }
}

console.log(iterator.next())
// { value: "red", done: false }
// ...same as above
```

Notice how this generator function uses the `yield` keyword. When a generator encounters this keyword, it immediately exits the function and returns the value after `yield`. The function execution can then be resumed when `next` is called again.

## How could I use a generator to store state in my React application?

Generators open up lots of possibilities for us! For now, let’s continue this simple example with colors.

In my React component, I need to create a single state variable to store the generator’s current state. This is mostly to trigger a re-render every time this state is updated, since I am rendering view components based on the current iterator state.

```jsx
let colors = createColorIterator()
let initialState = colors.next()

function App() {
  const [colorState, setColorState] = React.useState(initialState)

  function updateBackgroundColor() {
    setColorState(colors.next())
  }

  function reset() {
    colors = createColorIterator()
    setColorState(initialState)
  }

  const { value, done } = colorState

  return (
    <Container backgroundColor={value}>
      <h1>Hello!</h1>
      <Button disabled={done} onClick={updateBackgroundColor}>
        Change background color
      </Button>
      <Button onClick={reset}>Reset</Button>
    </Container>
  )
}
```

Notice how I am defining my iterator and the initial state value outside of the component’s scope, to avoid resetting this state with every re-render.

[Colors Generator Example - CodeSandbox](https://codesandbox.io/s/colors-generator-example-kpp9s)

## Why might I use generators for state management?

For most use cases, I actually wouldn’t recommend using generators over more traditional state management strategies. Because a generator is not a pure function (it’s value changes ever time it is called, even with the same arguments), we can’t use one in conjunction with more functional state management strategies like redux or `useReducer`.

However, I think there is lots of potential here for creating incremental state updates, testing state in isolation from component rendering (but also integration testing your components), and sharing code between frameworks. I didn’t do this for the purpose of this post, but it would be pretty trivial to implement the same logic in Angular or Vue without changing the core logic.

Thoughts? Questions? Concerns? Stay tuned for Part 2, where I implement a tic tac toe game using a generator.

---

This post was originally published on [dev.to](https://dev.to/beccaliz/es6-generators-for-state-management-in-react-h7b).
