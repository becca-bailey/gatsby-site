---
layout: post
title: Upside-Down Dependencies
description: Using dependency injection to write more flexible code
date: 2016-8-10
---

As we have been re-factoring our iOS tic tac toe application, we have been thinking pretty carefully about design patterns. For example, I have written before about using an [interactor class](/iOS-view-interactions) and [testing with protocols and mocks](/testing-using-protocols-and-mocks). Similarly, another principle we have been careful to follow is **dependency injection**, or dependency inversion.

Basically, here's what that means. If a class depends on another class, it the first class should be initialized with an instance of the second class, rather than initializing it within the class itself. If that sounds like total craziness, here's an example in Swift.

To borrow an example for Sandi Metz, let's say I am building a bicycle, and my bicycle depends on two wheels.

{% highlight swift %}
class Bicycle {
    var wheels: [Wheel];

    init() {
        wheels = [Wheel(), Wheel()]
    }
}

class Wheel {
    let diameter = 622
}

let racingBike = Bicycle()
{% endhighlight %}

Now, my bicycle has two wheels, and each wheel has a diameter of 622mm. However, what if I wanted a different wheel diameter? That might lead me to do something like this.

{% highlight swift %}
class Bicycle {
    var wheels: [Wheel];

    init(wheelDiameter: Int) {
        wheels = [Wheel(diameter: wheelDiameter), Wheel(diameter: wheelDiameter)]
    }
}

class Wheel {
    var diameter: Int

    init(diameter: Int) {
        self.diameter = diameter
    }
}

let racingBike = Bicycle(wheelDiameter: 622)
{% endhighlight %}

This works, but something isn't right. By initializing a Bicycle with it's wheel diameter, this is creating some overlap of responsibilities between wheel and bicycle. So, here's the correct way.

{% highlight swift %}
class Bicycle {
    var wheels: [Wheel];

    init(wheels: [Wheel]) {
        self.wheels = wheels
    }
}

class Wheel {
    var diameter: Int

    init(diameter: Int) {
        self.diameter = diameter
    }
}

let racingBike = Bicycle(wheels: [Wheel(diameter: 622), Wheel(diameter: 622)])
{% endhighlight %}

Now, I am initializing my bicycle with it's wheels, which makes it easier to work with.

## Why should I do this?

In practice, dependency injection can be used to make code more flexible and testable. In our tic tac toe project, we have a `GameInteractor` class which is basically an extension of the controller, and interacts with views and the HTTP Client. Originally, we had something like this.

{% highlight swift %}
required public init() {
    self.boardView = BoardView()
    self.statusView = StatusView()
    self.indicatorView = IndicatorView()
    self.httpClient = HTTPClient()
}
{% endhighlight %}

At the time, it made sense. Since the interactor is only initialized at the very beginning of the game, initializing each class that it depended on made more sense than including a long string of arguments. However, now this class is tied to a very specific implementation. In fact, it's almost impossible to test amy method that interacts with the HTTP Client, as it is tied to the ability to make a network call, which may fail for a number of reasons.

In the end, we ended up with something like this.

{% highlight swift %}
required public init(boardView: BoardView, statusView: StatusView, indicatorView: IndicatorView, httpClient: HTTPClient) {
    self.boardView = boardView
    self.statusView = statusView
    self.indicatorView = indicatorView
    self.httpClient = httpClient
}
{% endhighlight %}

It looks a little bit messier with a list of arguments (which can be fixed in a variety of ways), but it works better than initializing all of the classes inside the initializer.

First of all, it is a more flexible implementation. Now, I could change the implementation of the boardView from a UISTackView to a Table view, and it would work in essentially the same way, as long as whatever class I pass in inherits from the same protocol and contains the same methods.

Also, now I can create mock classes and use them to test the interactor. This helps me to avoid making network calls or doing unnecessary work in my test files. SOLID principles really do make sense!

## For more information:
[Sandi Metz - SOLID Design Principles - Dependency Injection](http://www.sandimetz.com/blog/2009/03/21/solid-design-principles)

[Uncle Bob - The Dependency Inversion Principle](http://web.archive.org/web/20110714224327/http://www.objectmentor.com/resources/articles/dip.pdf)
