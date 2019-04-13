---
layout: post
title: Flexible Testing with Speclj
date: 2016-5-4
categories: clojure testing speclj
related: ["Lost in Translation", "Clojure and Text Editors", "How do I _____ in Clojure?"]
---

### One of our biggest challenges when writing tests is our inability to predict the future.

Actually, I would say that's one of my biggest challenges *all the time*, but I'm going to talk specifically about testing here, and even more specifically about using Clojure with the Speclj testing framework.

But first, let's talk generally. One of the best things about tests is that they allow us to change and re-factor our code, and ensure that we have the same basic functionality when we're finished that we had when we started. One of the things I struggle with as a beginner, though, is writing tests that aren't tightly coupled to specific code. In other words, I sometimes end up changing my tests every time I change my code. This is obviously not ideal, but I have learned a few things along the way to help.

Let's say I want to output a greeting to the console. At first, I'm not feeling particularly chatty, so my greeting looks like this.

{% highlight clojure %}
(defn greeting [])
  (println "Hello!")
{% endhighlight %}

I write a test that looks like this:

{% highlight clojure %}
(describe "#greeting")
  (it "prints a greeting")
    (should= "Hello!\n")
      (with-out-str (greeting))))
{% endhighlight %}

My test passes, and everything is good.

![passing-test](images/Screen Shot 2016-05-04 at 9.56.28 AM.png)

But let's say I'm re-factoring, and I feel a little more verbose today.

{% highlight clojure %}
(defn greeting [])
  (println "Hello! Isn't it such a great day to learn Clojure?")
{% endhighlight %}

Sounds like a great idea, but now we have a problem.

![failing-test](images/Screen Shot 2016-05-04 at 9.56.12 AM.png)

Oops! I changed my code, and now my test is failing. From here, we have a few options. First, we could change the test to match the new output of the function. I would have a passing test again, but I would have to change that test every time I change the specific output of the function. What if tomorrow isn't such a good day to learn Clojure?

When I think about functionality of my (very small) application, maybe it's really important to me that this greeting includes the word "Hello", but I don't really care about the rest of it. In this case, Speclj has a better matcher to help. The `should-contain` matcher uses regex to determine whether a given string is included anywhere in the output.

{% highlight clojure %}
(describe "#greeting")
  (it "prints a greeting")
    (should-contain "Hello")
      (with-out-str (greeting)))))
{% endhighlight %}

![passing-test-2](images/Screen Shot 2016-05-04 at 10.55.49 AM.png)

See,it works! Now, my test will pass for any string that includes "Hello". But let's say I want to change my greeting even more.

{% highlight clojure %}
(defn greeting [])
  (println "Hey there!")
{% endhighlight %}

I bet you know where this is going...my tests are failing again.

![failing-test-2](images/Screen Shot 2016-05-04 at 11.01.58 AM.png)

Now that I've already changed my tests twice, I think I should make this test as general as possible. Maybe for the sake of this test, I don't care what I am outputting as long as it is a string.

{% highlight clojure %}
(describe "#greeting")
  (it "prints a greeting")
    (should-be-a String)
      (with-out-str (greeting)))))
{% endhighlight %}

You get the idea. My test is passing again, and it would still pass no matter what the printed string contains.

This is a simple example, but there are lots of ways that becoming more familiar with different matchers in Speclj can help you to write better tests.
