---
layout: post
title: Testing DOM Events with Jasmine
date: 2016-09-09
---

This week, I've been continuing to work on building a Tic Tac Toe client with Backbone.js. Whenever you are working with any kind of JavaScript, one of the bigger challenges (in my opinion) is testing DOM events. In this case, I am using Jasmine and Jasmine-jQuery to test my application.

For example, this is one of the functions from my `GameView` class.

{% highlight javascript %}
function move(e) {
  var spotClicked = $(e.currentTarget);
  if (spotClicked.hasClass('enabled')) {
    this.disableAllSpots();
    this.model.makeMove(spotClicked.attr('id'));
    this.model.endTurn();
    this.enableEmptySpots();
  }
}
{% endhighlight %}

This is an event handler for a click event. It returns the id of the spot that was clicked and updates the model based on that id. There are a couple of tricky things going on here. First of all, how do you mock a click event? Second, how do you test that the other functions are getting called?

While my solution is in no way the definitive solution to a problem like this, this is how I tacked this problem.

### Fixtures

First of all, I am using fixtures through [Jasmine-jQuery](https://github.com/velesin/jasmine-jquery) to ensure that my test file knows about the HTML it is testing. In the past I have used [handlebars](http://handlebarsjs.com/) templates in order to extract my fixtures from the actual project HTML, but for the purpose of this project I just copied the HTML I needed into a separate directory.

{% highlight javascript %}
beforeEach(function() {
  game = new Game();
  gameView = new GameView({model: game});
  jasmine.getFixtures().fixturesPath = './spec/fixtures';
  jasmine.getFixtures().load('board.html');
});
{% endhighlight %}

### Mocking a click event

I spent some time researching Jasmine spyEvents before deciding on a much simpler solution. Looking at the code, all we really need is an object that returns a jQuery object when `.currentTarget` is called.

{% highlight javascript %}
click = {currentTarget: $("#0")};
gameView.move(click);
{% endhighlight %}

If we are using fixtures, then the tests will be able to find the id `#0` in the HTML.

### Testing function calls

Assuming that all of the functions inside the `move` function have been tested individually, all we really need to do is make sure they are being called when a spot is clicked.

For this, Jasmine provides us with a really cool function called `spyOn()`, which has become one of my favorite testing tricks. Before you call the function you are testing, you can tell Jasmine to spy on other functions that should be invoked.

{% highlight javascript %}
it("updates the model", function() {
  spyOn(gameView.model, "makeMove");
  gameView.move(click);
  expect(gameView.model.makeMove).toHaveBeenCalled();
});
{% endhighlight %}

Pretty simple, right? Testing DOM events can be complicated, but this is a good place to start.
