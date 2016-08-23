---
layout: post
title: To Framework or Not To Framework
description: The eternal Javascript question
date: 2016-8-23
---

As the final piece of my pairing project, we were asked to build a JavaScript client for our tic-tac-toe application in addition to the iOS application in Swift we had already built.

In JavaScript land, though, it's pretty rare to just build something in JavaScript. If you don't know what I'm talking about, I challenge you to go to a tech meetup and start a conversation about your Javascript project. There will be questions about React and Ember and Backbone, there will be a heated debate about whether **real**  JavaScript developers can use jQuery. Design patterns and templating libraries will be discussed, as well as the benefits and drawbacks of ES6 vs. previous versions that are better for testing and browser compatibility. By the end, you will either be best friends or mortal enemies. I can say this authoritatively, because my brother is a developer who works primarily with JavaScript, and I have just summarized every single conversation we've had over the past year.

But anyway, when we stared this final piece of our project, my pair and I made the (perhaps controversial) decision to stick with vanilla JavaScript and jQuery rather than venturing into the land of frameworks and templating libraries and ES6. (We tried out some ES6, but backtracked after it broke all of our tests.)

Frameworks *do* have many advantages, such as management of dependencies and a more straightforward way to implement MVC and other design patterns, there are a few reasons why I think choosing not to use one for this project was a good idea.

### Scope

The scope of this project was pretty small. The goal was to build an application that plays tic-tac-toe, and allows the user to choose between a human, an easy computer, or a hard computer for each player. Sticking with what we knew, it was possible for us to build this application in a couple of days. If we had used a framework, we would have needed to build the learning curve into the scope of the project and estimate more time to complete the project.

### Learning experience

I've done a couple of different projects this way now, and I do think that it's important to learn how to implement good design patterns without a framework that is forcing you to do so. Using vanilla JavaScript does open your eyes to some of its drawbacks, and I do feel like I have a better understanding now about why people choose to use frameworks.

Overall, I feel like we were able to use very simple objects and design patterns to create something that provided value to our (imaginary) clients. In the end, we didn't feel like it was over-engineered or poorly designed. As I venture into a framework this week, I feel like I have a better understanding of its benefits and drawbacks than I would have if I hadn't spent time not using one.
