---
layout: post
title: Swift Protocols and Extensions
date: 2016-8-15
---

One thing that I found particularly annoying about Java was the fact that there wasn't a good way to create a default implementation of a particular method in an interface without creating abstract classes. However, Swift allows you to create protocols with extensions to reduce code duplication between classes that have some methods in common, but not others.

## What is a protocol?

A protocol is basically Swift's version of an interface. A protocol is a class that contains a list of methods and variables that any class must contain if it implements this protocol. For example, here is the protocol for a Game class for our tic tac toe game.

{% highlight swift %}
public protocol Game: class{

    var isXTurn: Bool {get set}
    var board: Board {get set}
    var status: Status {get set}

    func changeCurrentPlayer()
    func getGameType() -> String
    func resetGame()
    func getTurnMessage() -> String

}
{% endhighlight %}

Variables are not given initial values, but must include their gettable and settable properties. The methods that need to be included in the protocol are only methods that might be different in every implementation.

If there are methods that are the same in every class that implements this protocol, this is where you would use an extension.

## What is an extension?

Basically, an extension is added on to a protocol to define any methods that are used by all classes that implement the protocol. For example, We have two classes that implement the `Game` protocol—`PlayerVsPlayer` and `PlayerVsComputer`. While much of the game play may be different in each class, the state is saved in the same way, and both game types are over if the status returned from the server is not "in progress". So, in the same protocol, we added an extension.

{% highlight swift %}
public protocol Game: class{

...

}

extension Game {
    public func updateBoard(index: Int) {
        board.setSpot(index, marker: getCurrentPlayerMarkerText())
    }

    public func getCurrentPlayerMarkerText() -> String {
        if (isXTurn) {
            return "X"
        } else {
            return "O"
        }
    }

    public func isOver() -> Bool {
        return status != Status.inProgress;
    }

    public func resetGame() {
        isXTurn = true
        board.clear()
    }
}
{% endhighlight %}

Notice how the methods in the extension are not included in the protocol. Now, there is no duplicated methods between game classes. Pretty neat, huh?
