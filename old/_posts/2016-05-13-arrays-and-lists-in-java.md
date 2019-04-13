---
layout: post
title: Arrays and Lists in Java
date: 2016-5-13
categories: java apprenticeship testing
related: ["Code Fluency", "Testing and Troubleshooting in Clojure", "Flexible Testing with Speclj"]
---

### Yesterday morning, I had never written a line of Java.

(Well, I had worked through the first half of the Java tutorial on [Codecademy](http://codecademy.com), but that doesn't *really* count, right?)

Anyway, 29 hours later, I have completely mastered it.

*Just kidding!*

Actually, though, it is much less scary than I thought it would be. As often as we say that Java and JavaScript are *not* the same thing, you really can see their similarities. *For* and *while* loops, conditionals, and method calls are nearly identical in both languages. Even with its quirks, Java makes a lot of sense to me.

As I have been working through the Coin Changer kata, one major difference that became clear to me was the way that Java handles Lists and Arrays. In most programming languages, you can create a collection of items of any type using a literal constructor.

{% highlight javascript %}
var list = ["one", 2, three, [4]];
{% endhighlight %}

Java, however is a little bit pickier about the way you use a List. First of all, you always need to initialize a list with a constructor, and explicitly declare the class of its items. (I am using an example here from the coin changer kata.)

{% highlight java %}
ArrayList<Integer> coins = new ArrayList<Integer>();
{% endhighlight %}

This initializes a new `ArrayList`, and defines it as a list of integers. To add items to the list, we need to use the `add` method.

{% highlight java %}
coins.add(25);
coins.add(10);
coins.add(5);
coins.add(1);

System.out.println(coins);
//=> [25, 10, 5, 1]
{% endhighlight %}

Notice that if I try to add any item that's not an integer, I get an error.

{% highlight java %}
coins.add("25");

//=> method ArrayList.add(Integer) is not applicable
//      (argument mismatch; String cannot be converted to Integer)
{% endhighlight %}

This is great, but what if I want to initialize a data structure with existing values? This is where we might want to use a List instead. To put it simply, `List` is the parent of `ArrayList`, and Lists are a bit more flexible about the type of input you give them. There is a technical difference, and an ArrayList responds to a few more methods than a List, as it is a more specific data type. For the most part, though, (in my 29 hours of experience) they are interchangeable.

{% highlight java %}
List<Integer> coins = Arrays.asList(25, 10, 5, 1);

System.out.println(coins);
//=> [25, 10, 5, 1]
{% endhighlight %}

See? Not so scary. I think I'm getting the hang of this!
