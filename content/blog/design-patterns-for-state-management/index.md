---
title: Design Patterns for State Management in React and Typescript
date: "2019-07-15"
tags: react, typescript, design
---

In any interactive web application, we have state. Menus open and close, forms keep track of values, modals appear and disappear. But as our application grows, how do we keep track of this state in a way that doesn't cause us to lose our minds?

## Definitions

Let's start by defining some terms. When we talk about state management, we are actually talking about two things. Local state management, and global state management.

### Local

Local state is the state of one individual component. For example, a menu, a modal, a form. Each of the strategies outlined here can be used to manage local state.

### Global

Global state is available throughout an entire application. We often use tools like Flux or Redux for this, though I will be covering some other strategies here as well. Global state might be used for the current logged-in user, alerts, cached API response data, or more complex component interactions.

### When should I use local or global state?

My rule of thumb is typically to use local state until you need global state. Components that keep track of their own state are easier to test and interact with in isolation. For example, if I am writing an automated test for a component or using a tool like [Storybook](https://storybook.js.org), I don't want to mock out my global state management in order for the component to be functional.

We can use strategies like compound components (a set of components that are used together and share state) to share state between multiple components without making their state globally available.

## State management strategies

### React State

React provides built-in state in class components. This is the most basic way to get and set state, and will be used multiple examples here.

For example, we can create a simple card component with an `expanded` state property. This property can be updated with `setState` in a React component class.

```jsx
class Home extends React.Component {
  state = {
    visible: false
  };

  render() {
    return (
      <Container>
        <Button onClick={() => this.showModal()}>Click me!</Button>
        <Modal visible={this.state.visible} onClose={() => this.hideModal()}>
          <h1>Surprise!</h1>
          <Button onClick={() => this.hideModal()}>Close</Button>
        </Modal>
      </Container>
    );
  }

  private showModal() {
    this.setState({
      visible: true
    });
  }

  private hideModal() {
    this.setState({
      visible: false
    });
  }
}
```

<iframe src="https://codesandbox.io/embed/modal-with-react-state-goude?fontsize=14&module=%2Fsrc%2FHome.tsx" title="Modal with React State" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This might be the first strategy we reach for becuase it is the simplest to use and understand. However, this basic method can only be used in React component classes. For functional components, we can use a `useState` hook to accomplish the same thing.

```jsx
const Home: React.SFC = () => {
  const [visible, setIsVisible] = React.useState(false)

  function showModal() {
    setIsVisible(true)
  }

  function hideModal() {
    setIsVisible(false)
  }

  return (
    <Container>
      <Button onClick={showModal}>Click me!</Button>
      <Modal visible={visible} onClose={hideModal}>
        <h1>Surprise!</h1>
        <Button onClick={hideModal}>Close</Button>
      </Modal>
    </Container>
  )
}
```

<iframe src="https://codesandbox.io/embed/modal-with-state-hook-bmjb9?fontsize=14&module=%2Fsrc%2FHome.tsx" title="Modal with State Hook" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

The common pitfall of this approach is repetition. What if I wanted to have multiple kinds of modals in my application? I could take this basic component, and just reproduce the state logic, or I could create an abstraction that just handles state. This is where we might use render props or context.

### Render Props

This pattern has gained a lot of popularity over the past few years as a way to pass state from a parent to a child component in a way that is slightly more explicit than a higher-order component. [It can be implemented in a couple of different ways](https://reactjs.org/docs/render-props.html), but this example involves rendering children as a function to pass down state props.

In this example, we are going to create a `ModalManager` that passes down an `expanded` and `toggle` prop to its children, which can be used to open and close the modal.

```jsx
const Home: React.SFC = () => {
  return (
    <Container>
      <ModalManager>
        {({ showModal, hideModal, visible }) => {
          return (
            <React.Fragment>
              <Button onClick={() => showModal()}>Click me!</Button>
              <Modal visible={visible}>
                <h1>Surprise!</h1>
                <Button onClick={() => hideModal()}>Close</Button>
              </Modal>
            </React.Fragment>
          )
        }}
      </ModalManager>
    </Container>
  )
}
```

<iframe src="https://codesandbox.io/embed/dank-cache-50nymw58rk?fontsize=14&module=%2Fsrc%2FHome.tsx" title="Modal with Render Props" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

This pattern creates an inversion of dependency between a component and its state, reducing state-related repetition. However, when over-used this strategy can lead to what is known as "render prop hell". This is what happens when a component is wrapped with so many levels of nesting that becomes nearly unreadable.

For this reason, in 2019 render props are largely being replaced with hooks.

### Hooks

Hooks are React's coolest new toy, but I promise I didn't include them here just to sound hip and trendy. the [hooks API](https://reactjs.org/docs/hooks-reference.html) is React's answer to some of the downsides of class-based component state (as seen above) and render prop hell.

We can create a custom hook to replace the render props in the example above. This custom hook provides the same functionality, but with slightly different syntax.

```jsx
function useModal(initialVisible = false) {
  const [visible, updateVisible] = React.useState(initialVisible)

  function showModal() {
    updateVisible(true)
  }

  function hideModal() {
    updateVisible(false)
  }

  return { visible, showModal, hideModal }
}

const Surprise: React.SFC = () => {
  const { showModal, hideModal, visible } = useModal()
  return (
    <React.Fragment>
      <Button onClick={() => showModal()}>Click me!</Button>
      <Modal visible={visible}>
        <h1>Surprise!</h1>
        <Button onClick={() => hideModal()}>Close</Button>
      </Modal>
    </React.Fragment>
  )
}
```

<iframe src="https://codesandbox.io/embed/dank-cache-50nymw58rk?fontsize=14&module=%2Fsrc%2FHome.tsx" title="Modal with Render Props" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

Hooks can be used with functional components, reducing the need to convert a component to a class component if a change in specification requires it to keep track of state. Hooks still come with their limitations--they can only be used at the top level of a functional component. Also, a React upgrade might be required in order to use hooks in an established project.

Custom hooks and render props are a great solution to the problem of repetiton. But what if I wanted to ensure that I was only displaying one modal at a time? Or maybe I want to separate my component that is responsible for displaying a modal from the component that is responsible for opening or closing it? This is a use case for context.

### Context

The [Context API](https://reactjs.org/docs/context.html) provides a way for individual components to access shared state. Context is also a great solution to the problem of prop drilling, or passing a prop down through multiple layers of nesting to access it in a child component. Context allows us to create a provider component (the parent component that controls the state) and consumer components (child components that can access the state).

We can use context globally to share the state with the entire application, or we can use it in a single view to create compound components, as we see in this example. In this example, we are creating a `ModalProvider` that keeps track of the visible modal ID and passes down a function to open and close any modal. Any component with a context consumer now has access to these variables and functions from the provider without explicitly receiving props.

Note: In this example, we are using the `useContext` hook, though we can also use context with a `Context.Consumer` component and render props.

```jsx
const Home: React.SFC = () => {
  const { showModal } = React.useContext(ModalContext)
  return (
    <Container>
      <Button onClick={() => showModal("kittens")}>Click me!</Button>
      <Modal id="kittens">
        <h1>Kittens!</h1>
        <Image src="/assets/kittens.gif" />
        <Button onClick={() => showModal("error")}>Close</Button>
      </Modal>
    </Container>
  )
}
```

<iframe src="https://codesandbox.io/embed/cool-noether-xo4x32o74z?fontsize=14&module=%2Fsrc%2FHome.tsx" title="Modal with Context" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

When using this strategy, keep in mind that while every component can use a context consumer, not every component in your application should. Using context in a component couples it to a context provider, and will require you to use a provider or mock it out when using or testing this component. For example, low-level components like buttons, form fields, etc. should probably accept callback props instead of using context to keep them as flexible and reusable as possible.

## Which design pattern should I use?

None of these patterns is a one-size-fits-all solution to every state management problem. Most applications should probably be using a combination of strategies, ideally differentiating between state that is only used in one place, and state that can be shared. Maybe a library like Redux is a good solution for your more complex global state interactions, while basic React state or render props are better for individual component state.

As much as possible, keep your patterns consistent, and be willing to revisit your choices as tools and requirements change.
