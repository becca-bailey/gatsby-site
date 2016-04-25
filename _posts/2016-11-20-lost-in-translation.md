---
layout: post
title: Lost in Translation
description: How Learning Clojure is Like Learning Spanish
date: 2016-4-20
categories: clojure apprenticeship refactoring
related: ["Refactoring with Helper Functions", "Polymorphism in Clojure", "Multi-Arity Functions in Clojure"]
twitter_text: "Lost in Translation: How Learning Clojure is Like Learning Spanish"
---

### Last year, I tried to learn Spanish.

Figuring that I was living in Central America at the time, it was pretty important. Once a week, I went to Spanish school for 2 hours and had slow conversations with a woman named Isabel, who frequently stopped to correct my grammar and began every lesson by asking me if I had met any nice boys that week. To this day, I can't remember how to talk about the weather, but when in doubt I can always say *¿Encontró algunos buenos chicos esta semana?*

I learned that the tendency we have when learning a new language is to directly translate from our native language. When I was talking with Isabel, it always took quite a while for me go through the words one by one and translate them from Spanish to English, or vice versa. However, this doesn't always result in a correct translation. For example:

| **Spanish** | **Literal English** | **Correct English** |
| *Cuantos años tienes?*&nbsp;&nbsp;&nbsp; | How many years do you have?&nbsp;&nbsp;&nbsp; | How old are you? |
| *Tengo 27 años.*&nbsp;&nbsp;&nbsp; | I have 27 years.&nbsp;&nbsp;&nbsp; | I am 27 years old. |

<br>
It's the same whenever you're learning a new programming language. My tendency when approaching a problem in Clojure is to first think about how I would solve it in Ruby or JavaScript, and then translate it as closely as I can. Here is an example from my tic tac toe game, which I wrote first in Ruby, and am now writing in Clojure.

### Original Ruby:

{% highlight ruby linenos %}
def best_computer_move(game)
   scores = {}
   game.board.available_spots.each do |spot|
     scores[spot] = minimax(spot, game)
   end
   return scores.max_by { |spot, score| score }[0]
 end
{% endhighlight %}

### English translation:

+ Initialize scores as an empty collection
+ For each available spot on the board
  + Get the score for that spot by calling minimax\*
  + Add it to scores as a key/value pair (ex: {1 => 10})
+ Return the spot with the highest score

\*A function that calculates the probability of winning for any given spot

### Clojure translation:

{%highlight clojure linenos%}
(defn best-computer-move [current-game-state]
  (loop [scores         {}
         possible-moves (available-spots (:board current-game-state))]
    (if (= possible-moves [])
      (first (first (filter (fn [[spot score]] (= (apply max (vals scores)) score)) scores)))
      (recur
        (assoc scores (first possible-moves) (minimax (first possible-moves) current-game-scurrent-game-state 0))
        (rest possible-moves)))))
{%endhighlight%}

Eeeeeeeek that's scary! Granted, this might not be the best Ruby method either, but it's mostly readable. The Clojure function I ended up with, on the other hand...

 <center><div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/9NYQOutKOEXi4aopdzCr9A/142435074314" data-did="1b8db516dbc03e945c86e5fcf6637ad9d5a8016c"><a href="http://classicprogrammerpaintings.com/post/142435074314/consultant-shows-clojure-code-sample-to-vba">http://classicprogrammerpaintings.com/post/142435074314/consultant-shows-clojure-code-sample-to-vba</a></div>  <script async src="https://secure.assets.tumblr.com/post.js"></script></center>

Like translating from English to Spanish, direct translation from an object oriented language to a functional one can result in cumbersome functions that don't take advantage of functional syntax. In this case, we ended up with a big recursion loop and a lot of smaller functions for accessing values inside the game-state data structure.

First, let's pull out the function which returns a hash-map of the spots and their scores.  

{% highlight clojure linenos %}
(defn score-for-each-possible-move [original-game-state current-game-state depth]
  (loop [scores {}
         possible-moves (board/available-spots (:board game-state))]
    (if (empty? possible-moves)
      scores
      (recur
        (assoc scores (first possible-moves) (minimax (first possible-moves) original-game-state current-game-state 0))
        (rest possible-moves)))))

(defn best-computer-move [current-game-state]
  (let [scores (score-for-each-possible-move current-game-state)
    (key (apply max-key val scores))))
{% endhighlight %}

We're getting there, but there's still a lot more re-factoring that can be done to make use of clojure functions.  For example, we can use map to simplify the `score-for-each-possible-move` function.

{% highlight clojure linenos %}
(defn score-for-each-possible-move [original-game-state game-state depth]
  (let [possible-moves (board/available-spots (:board game-state))]
    (zipmap possible-moves (map #(minimax % original-game-state game-state (inc depth)) possible-moves))))
{% endhighlight %}

Perhaps there's still more that can be done, but I hope you can already see how gaining fluency in some of Clojure's best features makes for more readable code, and readable code beats a literal translation any day.

## For more information:
[Clojure for the Brave and True - Do Things in Clojure](http://www.braveclojure.com/do-things/)

[Jay Fields' Thoughts - Clojure: Destructuring](http://blog.jayfields.com/2010/07/clojure-destructuring.html)

\*I have also been reading [Living Clojure](http://www.amazon.com/Living-Clojure-Carin-Meier/dp/1491909048) by Carin Meier
