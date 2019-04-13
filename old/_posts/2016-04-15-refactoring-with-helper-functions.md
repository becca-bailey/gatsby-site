---
layout: post
title:  "Refactoring with Helper Functions"
description: "Adventures with the Gilded Rose"
date:   2016-4-15
categories: clojure apprenticeship refactoring
related: ["Polymorphism in Clojure", "How do I _____ in Clojure?", "Multi-Arity Functions in Clojure"]
---

### This week, I've been re-factoring [The Gilded Rose in Clojure]("https://github.com/mjansen401/gilded-rose-clojure")

The Gilded Rose is an exercise in testing and re-factoring, and let me tell you, it's a mess!  [Check this out](https://github.com/mjansen401/gilded-rose-clojure/blob/master/src/gilded_rose/core.clj) if you don't know what I'm talking about.

In addition to implementing [polymorphism]({{ site.baseurl }}/polymorphism-in-clojure), one of my other strategies was the use of helper functions in my code and my spec file. In any language, helper functions are tools you can use to add functionality to your code.  

For example, in The Gilded Rose, there are many cases when I would need to call the same function multiple times and return the changed state. Since clojure doesn't have a great built-in way to handle this, I wrote a helper method to be used in multiple contexts.

{% highlight clojure %}
(defn call-function-times [function-to-apply item times]
  (loop [times times current-item item]
    (if (= times 0)
      current-item
      (recur (dec times) (function-to-apply current-item)))))
{% endhighlight %}

Maybe it's not the most beautifully written function ever, but allows me to specify a function to apply to an item a given number of times. I was able to use this function in multiple places, whether I was updating the sell-in value, the quality, or both.

{% highlight clojure %}
(defmethod update-quality :default [item]		 
  (if (< (:sell-in item) 0)		    
    (call-function-times decrease-quality item 2)
    (decrease-quality item)))
{% endhighlight %}

As a special added bonus, this function was really helpful when testing. When I wanted to test edge cases by running my function a given number of times, I already had a function for that!

{% highlight clojure %}
(it "does not allow quality to be negative"
    (let [min-quality (call-function-times update-quality default-item 100)]
      (should= 0 (:quality min-quality))))
{% endhighlight %}

Here, I was able to say that even if I decrease the quality 100 times, it will never go below zero. It's easier than writing another loop, or copying and pasting the same function 100 times. (I'm sure it's been done before...)

Speaking of testing, it rarely occurs to me to write helper functions in my spec file that are only for the purpose of testing. While it might seem silly at first to write functions to test your functions, I've become a fan.

{% highlight clojure %}
(defn find-by-item [item coll]
  (first (filter #(= (% :item) item) coll)))
{% endhighlight %}

This function made it possible to update an entire collection and test an individual item. Pretty awesome!

If you're curious, you can find the rest of my solution [here](http://github.com/beccanelson/gilded-rose-clojure).
