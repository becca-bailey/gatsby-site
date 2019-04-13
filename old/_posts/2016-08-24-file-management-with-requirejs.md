---
layout: post
title: Required Reading
description: Importing files with Require.js
date: 2016-8-24
---

Are you ready to see something really gross? Okay, here goes.

{% highlight html %}
<script type="text/javascript" src="lib/jquery-git.min.js"></script>
<script type="text/javascript" src="src/main.js"></script>
<script type="text/javascript" src="src/GameState.js"></script>
<script type="text/javascript" src="src/games/ComputerVsComputerGame.js"></script>
<script type="text/javascript" src="src/games/ComputerVsPlayerGame.js"></script>
<script type="text/javascript" src="src/games/PlayerVsPlayerGame.js"></script>
<script type="text/javascript" src="src/games/PlayerVsComputerGame.js"></script>
<script type="text/javascript" src="src/GameFactory.js"></script>
<script type="text/javascript" src="src/HttpClient.js"></script>
<script type="text/javascript" src="src/ui.js"></script>
{% endhighlight %}

This was the head of the HTML document for our JavaScript tic-tac-toe application. Can you see the problem? Yes, that's a lot of script imports.

This method of importing script files may work in a pinch, but it creates some problems. First of all, you're in trouble if the files aren't imported in the right order. Also, it just looks terrible.

As I am re-constructing our tic-tac-toe client using Backbone.js, one of my goals was to find a better way to handle all these script imports. I did a little bit of research, and decided to try [Require.js](http://requirejs.org).

## What is Require.js?

Require.js is a dependency management script that helps you to simplify file importing.

## How do you use it?

Require.js is pretty easy to set up.

1. [Download Require.js](http://requirejs.org/docs/download.html).

    I put the file in `js/lib/require/require.js`.

2. Create a main JavaScript file.

    I created a file called 'js/main.js'.

3. Import `require.js` in `index.html`.

    Require.js uses a special import statement that specifies a data-main attribute. The data-main attribute is the main JavaScript file you just created, and the source is the Require.js source file. This is the line I added to the head of my `index.html`.

    ```
    <script data-main="js/main" src="js/lib/require/require.js"></script>
    ```

Now, I can use Require.js to import dependencies for my entire peoject.

Because I am building this project with Backbone and jQuery, the entire project depends on Backbone, jQuery, and Underscore.js. This is what my current file structure looks like.

{% highlight yaml %}
├── index.html
└── js
    ├── application
    │   ├── models
    │   │   └── Game.js
    │   └── views
    │       └── BoardView.js
    ├── lib
    │   ├── backbone
    │   │   └── backbone-min.js
    │   ├── jquery
    │   │   └── jquery-3.1.0.min.js
    │   ├── require
    │   │   └── require.js
    │   └── underscore
    │       └── underscore-min.js
    └── main.js
{% endhighlight %}

Inside of `main.js`, I included some configuration to import my dependencies for the entire project.

{% highlight javascript %}
require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery/jquery-3.1.0.min',
    underscore: 'lib/underscore/underscore-min',
    backbone: 'lib/backbone/backbone-min'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});
{% endhighlight %}

The `baseUrl` option just specifies where the JavaScript projects for the project are located, which in this case is the `js/` folder. After that, I can specify the path to each of the imports in the `lib/` folder.

One thing to note here is the shim configuration. Shims are optional, but sometimes help with browser compatibility.

In `main.js`, I also required any JavaScript files I needed to initialize my Backbone router, models, and views.

{% highlight javascript %}
require([
  'jquery',
  'backbone',
  'application/models/Game',
  'application/views/BoardView'
], function($, Backbone, Game, BoardView) {
  // initialize Backbone router, models, and views
});
{% endhighlight %}

After this, there is one more step.

Require.js will only require one file in another if it is specified in a `define` block. For example, in my Game model, I needed to specify that my model depended on both Backbone and jQuery. I needed to do the same in my test files in order to test a specific file.

{% highlight javascript %}
define(['jquery', 'backbone'], function($, Backbone) {
  var Game = Backbone.Model.extend({
    // Game methods
  });
  return Game;
});
{% endhighlight %}

Overall, Require.js is a bit of a learning curve, but I like it much better than the mess I started with.

## Helpful links:

[Todo MVC](http://todomvc.com/examples/backbone_require/)

[Understanding RequireJS for Effective JavaScript Module Loading](https://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/)
