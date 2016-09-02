---
layout: post
title: "Require.js vs. Browserify"
description: My guide to relatively simple JavaScript file management
date: 2016-8-24
---

[I wrote last week](./file-management-with-requirejs) about importing JavaScript files into your project using Require.js. While Require.js solved a lot of problems I had encountered in the past, it also created some. Require.js did not get along particularly well with my testing suite, and I found myself using a lot of workarounds to make it work. So, when I re-factored our tic-tac-toe game yesterday, I went looking for an alternative.

I did some research, and discovered that the two most popular alternatives are [webpack](https://webpack.github.io/) and [browserify](http://browserify.org/). For this project, I decided to try out Browserify.

### What is Browserify?

Browserify is an NPM package that allows you to use node syntax (`require(./my-file)`) to import files and packages. When you run the Browserify command, it will compile all of your required files into a single bundle file that your project depends on.

This isn't intended to be a full tutorial, but here are the steps I took to use Browserify.

First, I installed the browserify command on my system with `npm install -g browserify`. If you're unfamiliar with npm, the `-g` flag indicates that this package is being installed globally on your system (rather than in this specific project).

Then, I needed to export my classes to import them. This was a matter of adding one line of code to the bottom of each public code. For example:

{% highlight javascript %}
function UI() {

  // UI functions here

}

module.exports = UI;
{% endhighlight %}

Once I have done that, I can add my `require` statements at the top of each file.

{% highlight javascript %}
var $ = require('jquery');
var UI = require('./ui');
{% endhighlight %}

By default, Browserify will look for a npm package with that name (like jQuery), but you can specify that Browserify should look for a local file.

Once you have done this, it's really easy to bundle all of your files together and require the bundled file in `index.html`. I did this in the terminal with `browserify src/main.js -o bundle.js`. Now I just need one import statement in my html: `<script type="text/javascript" src="bundle.js"></script>`.

By default, you need to re-run the browserify command every time you make any changes to your project. However, you can also use a npm package called [watchify](https://github.com/substack/watchify) to watch for changes to your project and automatically re-load your bundled file.

### Will this mess up my tests?

We tested our tic-tac-toe client using Jasmine and Testem, and I was surprised by how easy it was to get our tests working again after adding Browserify. (This, I found, was the major drawback of Require.js).

There's probably multiple ways to approach this, but here's what worked for me.

I created a separate `test.js` file that was the main entry point to my test files. In this file, I required all of my test dependencies and spec files.

{% highlight javascript %}
require('jquery');
require('../jasmine/lib/jasmine-jquery');

require('./UISpec');
require('./GameStateSpec');
// etcetera
{% endhighlight %}

Then, I added `require` statements to the spec files the same way I did for the rest of my classes. Finally, I created a `test_bundle.js` file, and compiled all of my test code into this file with `browserify spec/test.js -o test_bundle.js`. Now, my test framework only needs to know about these two files.

In `testem.yml`:

{% highlight yaml %}
framework: jasmine2
serve_files:
    - test_bundle.js
src_files:
    - spec/test.js
launch_in_dev:
    - Chrome
    - Safari
{% endhighlight %}

### So, what's the verdict?

Though Browserify also took a little bit of time to master, I found it much simpler to work with than `Require.js`. While I get the impression that it's not quite as full-featured as Webpack, it provided the functionality I was looking for. In my book, Browserify is a clear winner.
