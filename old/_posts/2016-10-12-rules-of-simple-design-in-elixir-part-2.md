---
layout: post
title: "Applying the 4 Rules of Simple Design in Elixir: Part 2"
date: 2016-10-12
---

In [Part 1](/rules-of-simple-design-in-elixir), I summarized two main points of Corey Haines's [Understanding the Four Rules of Simple Design](https://leanpub.com/4rulesofsimpledesign). 

1. Tests should express intent.
2. Functions should know as little as possible about primitive types. 

In this point, I will continue to re-interpret some of the main points using examples in Elixir.

## Avoid God classes

In case you're not familiar with the term, a *God class* refers to a class that does everything. When I first start a project, I often find myself putting everything in one class (or module, in Elixir) to get things moving along, but soon find that the class is doing too many things. 

I really like the point that Corey made when he said, "If we are working on a new behavior, but are not sure where to place it — what object it belongs to — this might be an indication that we have a concept that isn’t expressed well in our system."

For example, when working on my version of Conway's Game of Life, I soon discovered that I had too many things in my Game class. For example, this is what I started with.

{% highlight elixir %}
test "a living cell with no neighbors dies in the next generation" do
  world = 
    Game.new
    |> Game.set_size(1)
    |> Game.set_living_at({1, 1})
    |> Game.tick

  refute Game.alive_at?(world, {1, 1})
end
{% endhighlight %}

In this example, there is no distinction between a Game and a World. Because Elixir is not an object-oriented language, it seems a little more unnatural (to me as a beginner) to divide things up.

After reading Corey's advice, though, it made sense to extract a World module, which contains the actual data structure that the values are stored in. The rules of the game, naturally, stay in the Game module.  

{% highlight elixir %}
test "a living cell with no neighbors dies in the next generation" do
  world = 
    World.new
    |> World.set_size(1)
    |> World.set_living_at({1, 1})
    |> Game.tick

  refute World.alive_at?(world, {1, 1})
end
{% endhighlight %}

## To summarize...

There is one more change I could make here that would help to accomplish all three of the points I have made so far. Do you see it?

Currently, I am setting and checking coordinates using a tuple, which, a: isn't very expressive, b: is a primitive type, and c: could be extracted into a separate module. The final change I made was to create a `Cell` module, which has a location function.

{% highlight elixir %}
test "a living cell with no neighbors dies in the next generation" do
  world = 
    World.new
    |> World.set_size(1)
    |> World.set_living_at(Cell.location(1, 1))
    |> Game.tick

  refute World.alive_at?(world, Cell.location(1, 1))
end
{% endhighlight %}

It's not perfect, but it's progress. To see more progress, you can check out the [current version of this code](https://github.com/beccanelson/game-of-life-elixir).
