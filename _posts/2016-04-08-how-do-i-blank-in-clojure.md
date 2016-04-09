---
layout: post
title:  "How do I _____ in Clojure?"
date:   2016-4-8
categories: 8th-light apprenticeship clojure
---

After I finished the [Clojure Koans](http://clojurekoans.com/), my next goal was to set up a new project and choose a testing framework. I had a lot of questions, which I wouldn't call *stupid* questions exactly, but were definitely newbie questions.

## How do I start my project?

After installing and setting up [Leiningen](https://github.com/technomancy/leiningen), you can create a new project in a directory with the `lein new app project-name` command. This will create a file structure and some boilerplate code for your project.

## Where do I put my code?

After you create a new project, Leiningen gives you a default `-main` function, which you can run with the command `lein run`. For my purposes, I removed this function, as well as the `(:gen-class)` in the namespace above.

Now, you can write any functions in this file, and your test files should be able to find them based on the namespace. For example, my first project was a coin-changer kata.

<script src="https://gist.github.com/beccanelson/d3b57d26f2ea40a5f045631e1b5385df.js"></script>

## How do I test my code?

Actually, it may have been more appropriate to ask this question first, since we should probably be thinking about writing tests before writing any code. If you are asking this question first, I applaud you.

But anyway, back to testing. This question isn't quite so simple to answer, since there are multiple testing frameworks you can choose. In my explorations this week, I tried out both [clojure.test](https://clojure.github.io/clojure/clojure.test-api.html) and [Speclj](https://github.com/slagyr/speclj).

Clojure.test comes pre-packaged with Clojure. You can write tests in the *core_test.clj* file, and run them with `lein test`. If you would like to test only a specific namespace, you can use the command `lein test-run namespace`. Clojure.test is easy to use, but I found that it has a couple drawbacks. Most of the examples I looked up wrote one test for each function, with multiple testing statements testing the basic functionality. I tried it this way at first, but didn't like getting the feedback that only one test was passing or failing. In the end, I ended up with something like this:

<script src="https://gist.github.com/beccanelson/46c914d20887eba9d250a020c8a7860f.js"></script>

I got better feedback, but the test names were awkward.

Speclj (pronounced *speckle*) on the other hand is recommended for anyone familiar with Rspec, because they have very similar syntax. You can set up a new project which includes Speclj with `lein new speclj project-name`, and run your tests with `lein spec`. It may be my obsession with grammar, but I find statements like "it returns an empty collection" easier to understand than `returns-empty-collection`.

<script src="https://gist.github.com/beccanelson/9b3e61742ad150bedd685c6b2abf6358.js"></script>

If you're new to Clojure, I would recommend trying out multiple testing methods to see which one you like the best. Who knows—you might love Clojure.test!
