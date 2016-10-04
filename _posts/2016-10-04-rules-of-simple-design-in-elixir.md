---
layout: post
title: Applying the 4 Rules of Simple Design in Elixir 
date: 2016-09-16
---

## So, I have a confession to make.
I am terrible at reading books about code. I mean, I try, but generally concepts don't really sink in until I have implemented them myself. 

This week, I've been reading [Understanding the 4 Rules of Simple Design](https://leanpub.com/4rulesofsimpledesign) by Corey Haines. While I did find it to be one of the most understandable coding books I've read in quite a while, it still helped me to work through the examples myself. Also, I have taken on the added challenge of following the rules while building an application in Elixir. 

The example given in the book is Conway's Game of Life, which if you are unfamiliar with, you can read more about [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). I won't re-write the book, but I will summarize some of the main points using my Elixir implementation.

Though these don't exactly line up with Kent Beck's original four rules, here were my main takeaways.

### Tests should express intent.

Though I've often heard that we should use descriptive variable names and clear method names, it's also true that we should favor expressive method names over the ones built into the language. 

For example, this is a perfectly valid way to write the first test.

{% highlight elixir %}
test "a new game has an empty world" do
  assert length(Game.new) == 0
end
{% endhighlight %}

However, this test has a couple of problems. First of all, the test assumes that the Game data is a List type, and the test would break if the the data was stored in another way. Also, the test doesn't explicitly say anything about the world being empty. Perhaps this is a better way to do it:

{% highlight elixir %}
test "a new game has an empty world" do
  assert Game.new |> Game.is_empty
end
{% endhighlight %}

*Note the awesome Elixir pipe operator, which evaluates the function on the left-hand side and pipes it in as the first argument to the function on the right. Pretty neat!*

While this test requires me to add an additional function to my code, it is clearer and allows my code to change. If I change my data type, I can change is_empty, but I don't need to change this test.

### Functions should know as little as possible about primitive types.

Along the same lines as using expressive function names, whenever possible, functions should know as little as possible about the actual types they are dealing with. This looks a little different in a functional language than it does in an object-oriented language, as logic will be extracted as a function rather than a class. Take this function for example:

{% highlight elixir %}
def alive_at?(world, {x, y}) do
  Enum.at(world, x - 1) |> Enum.at(y - 1) == :alive
end
{% endhighlight %}

Like the previous example, this function assumes that the data structure is a List. Also, it handles the conversion from a coordinate to an index, and assumes that an alive cell will contain the atom `:alive`. As a primary function in the public API of this application, it would be easier to extract this logic elsewhere. Though there's no one right way to do this, this is what I ended up with.

{% highlight elixir %}
def alive_at?(world, {x, y}) do
  get_at_coordinate(world, x) |> get_at_coordinate(y) |> alive? 
end

defp get_at_coordinate(coll, coordinate) do
  Enum.at(coll, index(coordinate))
end

defp alive?(cell) do
  cell == :alive
end

defp index(n) do
  n - 1
end
{% endhighlight %}

Though it could be argued that this level of extraction is a little bit excessive, I like hiding logic in private functions that are easier to change. Also, I think `alive_at?` expresses its intent much more clearly.

For more takeaways from Understanding the 4 Rules of Simple Design, stay tuned for part 2!
