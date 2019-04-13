---
layout: post
title: "I need help!!"
description: Testing and Troubleshooting in Clojure
date: 2016-4-28
categories: clojure testing
related: ["Lost in Translation", "Refactoring with Helper Functions", "Polymorphism in Clojure"]
twitter_text: "Clojure: A Story of Too Many Parentheses"
---

### When working on any Clojure project, one of the first problems you run into is troubleshooting.

Something has gone wrong, you don't have enough parentheses somewhere, the return value is not Clojure was expecting, and the stack trace is half a mile long. It happens.

I'm going to present two scenarios. First, let's assume we live in perfect TDD world. In perfect TDD world, we write tests, and we write code that passes those tests. If you have a good testing framework (like [Speclj](https://github.com/slagyr/speclj)), testing is the best way to see exactly what your functions are returning. Some would argue that if your troubleshooting can't be done using tests, you aren't writing enough tests.

### In the real world, though, sometimes we need other ways of troubleshooting.

In the past few days, I've run into a few problems where I want to quickly call a function with a few different inputs just to see what I'm returning. This is where the Lein REPL comes in handy. The Lein REPL allows you to load a namespace and access any functions or variables within that namespace. For a long time, I didn't know you could do this, and spent a lot of time copying and pasting code into my terminal.

If you google the Lein REPL, it's actually a bit overwhelming. You can integrate it into your text editor using [Cider](https://github.com/clojure-emacs/cider) with Emacs or [fireplace.vim](https://github.com/tpope/vim-fireplace). You can use a text editor like [Light Table](http://lighttable.com/) that comes with built-in inline REPL evaluation. The Lein REPL is a bit like green eggs and ham—you can have it in a house or with a mouse, in a box or with a fox, on a boat or with a goat, and you never know what you like until you try it.

Over the past couple of weeks, I've tried all of these things, but I keep coming back to the basics. I went looking for other tools mostly because I didn't understand what the REPL was capable of by itself.

When you navigate to the root of your project and type `lein repl`, you should see something like this.

![lein repl](images/Screen Shot 2016-04-28 at 12.15.47 PM.png)

**If you don't see the namespace of your current project (for example, if you see `user` instead), you might need to configure your main namespace in your project.clj file**. For example, mine says `main: tic-tac-toe.game-loop`. (Sounds simple, but it took me at least three days to figure this out.)

From here, you can call your variables and functions just like you can in your code.

![tic-tac-toe repl](images/Screen Shot 2016-04-28 at 12.25.59 PM.png)

*By the way, I'm using the [Solarized theme](http://ethanschoonover.com/solarized) for iTerm2, and a cool syntax highlighting plugin called [Ultra](https://github.com/venantius/ultra).*

From here, you can access any namespace you have required in your file, or you can switch namespaces with `(ns namespace)`.

![tic-tac-toe ui repl](images/Screen Shot 2016-04-28 at 12.36.39 PM.png)

Using Speclj, you can even write tests and run them from the command line. (Not very practical, but still worth demonstrating!)

![speclj repl](images/Screen Shot 2016-04-28 at 12.46.04 PM.png)

There is a lot more to be said about the benefits of the REPL. Just ask Google, who will show an endless list of Clojure debugging tools, comparison charts of REPL alternatives, plugins for every text editor, and an extensive debate about Vim vs Emacs vs Light Table vs Atom vs whatever else is out there. Etcetera. At the end of the day, though, I believe that understanding the very basics of code evaluation will get you much further than internet rabbit holes. The REPL is your friend.

### For more information:

[Colin Jones - Clojure Libs and Namespaces: require, use, import, and ns](http://blog.8thlight.com/colin-jones/2010/12/05/clojure-libs-and-namespaces-require-use-import-and-ns.html)
