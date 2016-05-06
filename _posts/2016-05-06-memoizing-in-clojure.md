---
layout: post
title: Memoizing in Clojure
description: Or, how to call a function 57,657,600 times in .00011 seconds.
date: 2016-5-6
categories: clojure testing algorithms
related: ["Multi-Arity Functions in Clojure", "Polymorphism in Clojure", "How do I _____ in Clojure?"]
---

This week, I am working on optimizing my Clojure minimax algorithm for my terminal tic-tac-toe game.

At first, my goal was just to implement the algorithm and make it unbeatable. But once I did that, I discovered a problem. It was unbeatable, but it wasn't fast. Just to get an idea, on a blank three-by-three tic tac board, there are 9! (362,800) possible game states. If you want to upgrade to a four-by-four board, it has has 16! (20,922,789,888,000) possible game states, which requires 57,657,600 times more calculating power than the three-by-three board. That's CRAZY.

With the original algorithm, it took about 19 seconds for minimax to return the first move given a blank board, and about 2 seconds to return the second move.

![minimax-time](images/Screen Shot 2016-05-06 at 3.44.58 PM.png)

Now, I haven't tested this, but according to my calculations, it would take 34.72 years to return the best move on a blank four-by-four board, and about 3.98 years to return the second move. So, clearly we have a problem!

I did some digging, and the first thing I came across was the idea of memoizing. Basically memoizing is a way to speed up recursive functions that get called over and over again. In layman's terms, memoizing involves saving the result of each function call in a data structure of a cache. Before calling the function again, now the computer will check the stored information to see if it has called the function before with the same arguments. If it has, it will return the stored result, or if not, it will call the function.

Luckily for us, Clojure has a built-in [memoize function](https://clojuredocs.org/clojure.core/memoize). In its source code, Clojure uses an [atom](http://clojure.org/reference/atoms) to store each function call in local memory.

{% highlight clojure linenos %}

(defn minimax [spot player current-game-state depth]
  (let [possible-game-state (game/progress-game-state spot current-game-state)]
    (if (game/game-over? possible-game-state)
      (score player possible-game-state depth)
      (return-min-or-max (score-for-each-possible-move player possible-game-state depth) player possible-game-state))))

(def memoize-minimax (memoize minimax))

(defn score-for-each-possible-move [player game-state depth]
  (let [possible-moves (board/available-spots (:board game-state))]
    (zipmap possible-moves (map #(memoize-minimax % player game-state (inc depth)) possible-moves))))

{% endhighlight %}

Here, I added one line of code that calls `memoize` on `minimax`, and then I called `memoize-minimax` in my function that maps each possible move to its score. Now, let's see the results.

![minimax time memoize](images/Screen Shot 2016-05-06 at 4.21.25 PM.png)

BAM! The difference is astounding. The first time I called the function on a blank board, it took .62 seconds, which is about 30 times faster than calling the function without memoization. And notice how I called the same function a second time, and it took only .00011 seconds, because it stored the result of calling it the first time. Returning the second move took .19 seconds the first time, and .00012 seconds the second time.

Note that it still takes 6.15 minutes to return the second move on a 4x4 board, but it's still 340,144 times faster than my original estimation of 3.98 years. It still needs some improvement, but mostly I'm just proud that I did math today.
