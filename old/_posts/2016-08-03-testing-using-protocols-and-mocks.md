---
layout: post
title: Testing with Protocols and Mocks in Swift
date: 2016-8-3
---
## What is a protocol?

In Swift, we can use protocols to create related classes. A protocol is basically a blueprint for the variables and methods that a class should contain, similar to an Interface in other programming languages. For example, in our iOS tic tac toe application, we have a BoardView protocol.

{% highlight swift %}
@objc public protocol BoardView {
    func show(board board: [String])
    func spotsEnabled(enabled: Bool)
}
{% endhighlight %}

This basically says that we can create multiple board views, and they must contain the functions `show` and `spotsEnabled`. If you try to create a BoardView that doesn't implement these methods, however, Xcode doesn't like that too much, so make sure you're only including what you absolutely need. These methods can change depending on the specific implementation—for example, our current board view happens to also be a `UIStackView`, and the methods included in the view file are specific to showing a board and enabling spots in a UIStackView.

## Cool. But how do I test this?

One of the difficulties we have encountered in this project is testing methods that are tied to specific elements and specific actions that happen on the screen. This is necessary sometimes, but what if I just want to test that a certain method is called at a certain point in the program without inducing a bunch of unnecessary side effects? This is where I would use a mock.

One of the advantages of protocols is the fact that protocols make it easy to mocks. For example, this is the mock we created to test the BoardView.


{% highlight swift %}
class MockBoardView: NSObject, BoardView {
    var visibleBoard = [String]()
    var spotsEnabled = true

    func show(board board: [String]) {
        visibleBoard = board
    }

    func spotsEnabled(enabled: Bool) {
        spotsEnabled = enabled
    }
}
{% endhighlight %}

As you can see, the MockBoardView class implements BoardView, but doesn't contain the specific implementation details that the real class would contain. Now, we can use this mock to test whether these methods are being called from another class. In our program, we have a `GameInteractor` class that initializes with all of our view classes. It includes a `endGame` method which calls this function:

{% highlight swift %}
boardView.spotsEnabled(false)
{% endhighlight %}

To check if this function has been called, we can write a simple test.

{% highlight swift %}
it("disables the buttons at the end of the game") {
    gameInteractor.game.status = Status.player2Wins
    gameInteractor.endGame()

    expect(mockBoardView.spotsEnabled).to(beFalse())
}
{% endhighlight %}

This test passes with no ugly side effects. That was easy! While mocks don't tell us much about the actual objects they represent, they are useful for testing the overall functionality of the program.

Yay for protocols!
