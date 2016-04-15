---
layout: post
title:  "Multi-Arity Functions in Clojure"
date:   2016-4-6
categories: 8th-light apprenticeship clojure
---

### The first thing I've done during my apprenticeship at 8th Light is dive into some Clojure.
I started with the [Clojure koans](http://clojurekoans.com/), which were a great (if somewhat intimidating) crash course into the basic functions in Clojure. I've also been referencing [Clojure for the brave and true](http://www.braveclojure.com/clojure-for-the-brave-and-true/) to get a more in-depth understanding of what is going on.

In my exploration this week, I've discovered some pretty cool features that just make sense in Clojure, two of them being Multi-Arity and Variable-Arity Functions.

#### What is a Multi-Arity function anyway?

First of all, an *arity* is just another name for a function argument. Writing a multi-arity function is essentially a form of flow-control that allows the programmer to allow for different outcomes based on the input. For example, let's say I want to input a list of my favorite foods and output them as a sentence. The rules of grammar (and the Oxford comma) specify that I would need to change the output based on the number of foods in my list.

| Input | Output |
| ----- | ------ |
| `"mangoes"` | "I like to eat mangoes." |
| `"mangoes" "rice-a-roni"` | "I like to eat mangoes and rice-a-roni." |
| `"mangoes" "rice-a-roni" "rocky road ice cream"` | "I like to eat mangoes, rice-a-roni, and rocky road ice cream." |

<br>
Notice how a function would need to handle a few different conditions.  First of all, we need to add an *and* before the last item, only if there are more than one. Also, thanks to the Oxford comma (which I can't possibly do without), there is a comma before the *and* only if there are more than two items in the list.

While a language like Ruby could handle this with optional arguments and flow control, it might be a longer and more complicated function than I could write with Clojure, which excels at handing lists of data. This is also called *arity overloading*

We are creating a function called `favorite-foods-list`.

{% highlight clojure linenos %}
(defn favorite-foods-list
  ([first-item]
    (println (str "I like to eat " first-item ".")))
  ([first-item second-item]
    (println (str "I like to eat " first-item " and " second-item ".")))
  ([first-item second-item third-item]
    (println (str "I like to eat " first-item ", " second-item ", and " third-item "."))))
{% endhighlight %}

This example is fairly straightforward. We are just concatenating strings, adding an *and*  if there are two arguments, and commas if there are three.

{% highlight clojure linenos %}
(favorite-foods-list "mangoes")
; => "I like to eat mangoes."

(favorite-foods-list "mangoes" "rice-a-roni")
; => "I like to eat mangoes and rice-a-roni."

(favorite-foods-list "mangoes" "rice-a-roni" "rocky road ice cream")
; => "I like to eat mangoes, rice-a-roni, and rocky road ice cream."
 {% endhighlight %}

What if I wanted to add more than three arguments, though? For that, we would need a *variable-arity* function.

{% highlight clojure %}
(defn favorite-foods-list [& items]
{% endhighlight %}

#### A *variable-arity* function uses the & symbol preceding an argument to specify that there could be any number of arguments.

This creates a collection of items, which we can interact with like a list.

{% highlight clojure linenos %}
  (cond
    (= 1 (count items))
      (println
        (str "I like to eat " (first items) "."))
    (= 2 (count items))
      (println
        (str "I like to eat " (first items) " and " (last items) "."))
    :else
      (println
        (apply str "I like to eat "
          (clojure.string/join ", "(butlast items)) ", and " (last items) "."))))
{% endhighlight %}

Now, we've added some more flexibility to this function. While the conditional statements for 1 or 2 arguments work essentially the same way as the first function we wrote, the *else* condition allows for any number of arguments. Joining `butlast items` allows us to add a comma after any number of items in our list (except the last item) before adding an *and* before the last item. Now, we could input a much longer list, and still get a grammatically correct sentence.

{% highlight clojure %}
(favorite-foods-list "mangoes" "rice-a-roni" "ice cream" "pizza" "broccoli" "grilled cheese")
; => "I like to eat mangoes, rice-a-roni, ice cream, pizza, broccoli, and grilled cheese."
 {% endhighlight %}

<br>

### For more information:

[The Burning Monk - Clojure: Multi-Arity and Variadic Functions](http://theburningmonk.com/2013/09/clojure-multi-arity-and-variadic-functions/)
<br>[Brave Clojure - Do Things: A Clojure Crash Course](http://www.braveclojure.com/do-things/)
