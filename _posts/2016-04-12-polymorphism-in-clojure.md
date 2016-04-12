---
layout: post
title:  "Polymorphism in Clojure"
description: "How to do different things with the same function"
date:   2016-04-12
categories: clojure apprenticeship
---
## This week, I have been working on [the Gilded Rose kata in Clojure](https://github.com/mjansen401/gilded-rose-clojure).

Looking over the code, the first thing I noticed was the serious need for some polymorphism.  If you're new to this, let me explain.

### Polymorphism allows functions to behave in slightly different ways, depending on the object that it is called on or the parameters that are passed in.

In an object-oriented language like Ruby, this is fairly simple to accomplish. For example, let's say I wanted to write a simple program that prints a greeting.

{% highlight ruby %}
class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end
end

class English_speaker < Person
  def say_hello
    puts "Hello, my name is #{@name}!"
  end
end

class Spanish_speaker < Person
  def say_hello
    puts "¡Hola, me llamo #{@name}!"
  end
end

john = English_speaker.new("John")
pablo = Spanish_speaker.new("Pablo")

john.say_hello
  # => "Hello, my name is John!"

pablo.say_hello
  # => "¡Hola, me llamo Pablo!"
{% endhighlight %}

Simple, right? Using polymorphism, we don't have to write methods with awkward names like say_hello_in_spanish, nor do we have to remember what language a person speaks when we call the method.

In a functional language like Clojure that doesn't have a clear inheritance structure, this can be a little tricker. One way of accomplishing this is multimethods. For example, here I am able to mimic the same behavior using maps to store data.

Note: `defmulti` requires a *dispatch function* which in this case is a map location.

{% highlight clojure %}
(defmulti say-hello :Language)

(defn english-speaker [name] {:name name :Language :English})

(defn spanish-speaker [name] {:name name :Language :Spanish})

(defmethod say-hello :English [person]
  (println (str "Hello, my name is " (:name person) "!")))

(defmethod say-hello :Spanish [person]
  (println (str "!Hola, me llamo " (:name person) "!")))

(defmethod say-hello :default [person] :wave)

(def john (english-speaker "John"))
(def pablo (spanish-speaker "Pablo"))

(say-hello john)
  ; => "Hello, my name is John!"

(say-hello pablo)
  ; => "Hello, my name is Pablo!"

(say-hello {})
  ; => :wave
 {% endhighlight %}

These functions can mimic the behavior of objects which have attributes, and `defmethod` will create a method that can only be called on functions with certain attributes. For example, you can see that the person John has the language attribute `:English`, so when you call `say-hello`, he will greet you in English. Still pretty simple, right?

Stay tuned for more polymorphism in Clojure, and a deeper dive into the Gilded Rose.

## For more information:

[Myles Megyesi - Polymorphism in Clojure](https://blog.8thlight.com/myles-megyesi/2012/04/26/polymorphism-in-clojure.html)
[Mike Jansen - Welcome to the Gilded Rose](https://blog.8thlight.com/mike-jansen/2012/09/26/welcome-to-the-gilded-rose-in-clojure.html)
[Stefan Tilkov - Clojure for OOP folks](https://speakerdeck.com/stilkov/clojure-for-oop-folks-how-to-design-clojure-programs)
