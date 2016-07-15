---
layout: post
title: Arguments in Swift
date: 2016-7-15
---

One of the most interesting things I've noticed about Swift (so far) is the way Swift handles function arguments. Like Java, Swift is a **strongly typed** language, which means that all arguments must have a type declaration when they are defined.

For example, I need some help making life decisions. Since the invention of GrubHub, it has become much too easy to never actually cook my own food, and I need a function that tells me whether I should order food on GrubHub or make dinner at home.

{% highlight swift %}
func orderGrubhub(hunger1_10: Int, moneyInCheckingAccount: Int) -> String {
    if (moneyInCheckingAccount > 200) {
        return "Sure, go ahead."
    } else if (hunger > 8) {
        return "Just this one time, okay?"
    } else {
        return "Don't you have any food in the refrigerator?"
    }
}
{% endhighlight %}

In this function, I have two arguments, `hunger1_10` and `moneyInCheckingAccount`. When I call this function, I need to include both arguments, but I only need to name one of them.

{% highlight swift %}
orderGrubhub(10, moneyInCheckingAccount: 100)
//-> "Just this one time, okay?"

orderGrubhub(5, moneyInCheckingAccount: 27)
//-> "Don't you have any food in the refrigerator?"
{% endhighlight %}

Swift assumes that you know the name of the first argument, because usually it's the most important one. However, what if I want to name all of my arguments?

For this, Swift differentiates between *external* and *local* parameter names. External parameter names are left out by default, but can help make your code more readable. For example, I also need to know whether I should ride my bike to work based on the current temperature.

{% highlight swift %}
func bikeToWork(fahrenheit temp: Int, raining: Bool) -> Bool {
    return temp > 60 && temp < 90 && !raining
}
{% endhighlight %}

Even though the first argument doesn't require a name by default, I think that specifying a temperature is a little ambiguous, as it could be either celsius or fahrenheit. This way, I could write another function that specifies the temperature in celsius.

{% highlight swift %}
func bikeToWork(celsius temp: Int, raining: Bool) -> Bool {
    return temp > 15 && temp < 32 && !raining
}
{% endhighlight %}

Now, I can call this function with either celsius or fahrenheit.

{% highlight swift %}
bikeToWork(fahrenheit: 70, raining: false)
//-> true

bikeToWork(celsius: 12, raining: true)
//-> false
{% endhighlight %}

Though this is uncommon, if I wanted to exclude an argument name, I could use an underscore as the external parameter name. Notice how I don't have to include the underscore before the first argument, as it is there by default.

{% highlight swift %}
func bikeToWork(temp: Int, _ raining: Bool) -> Bool {
    return temp > 15 && temp < 32 && !raining
}

bikeToWork(20, false)
//-> true
{% endhighlight %}

Even though it might seem strange at first to include the variable name with arguments, it does a lot to make Swift cleaner and easier to understand. 
