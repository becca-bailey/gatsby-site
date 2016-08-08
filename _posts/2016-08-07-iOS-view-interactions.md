---
layout: post
title: iOS View Interactions
description: Using custom view classes and interactors in Swift
date: 2016-8-3
---

As we have been re-factoring our iOS tic tac toe application, my pair and I have been learning a lot about class architecture in Swift. While there are many opinions about this, here are some general principles we have taken away.

+ View controllers should know as little as possible about the actual Swift classes they contain. For example, instead of calling methods on a UIStackView, the controller should call methods on a BoardView. This class might contain logic specific to the stack view, but it can be switched out easily if you decide to make it a table view or something else instead.

+ Interfaces should be used as much as possible, making classes easier to extend or test. [See this post for more information](/testing-using-protocols-and-mocks)

+ As much logic as possible should be removed from the View Controller, and delegated to either the models it controls or separate Interactor class.

## So, what is an interactor class?

The technical term for this class is debateable, and I've heard multiple opinions this week alone. This view can also be referred to as the Presenter in the Model View Presenter pattern. (Coincidentally, MVP is the most over-used acronym ever, and is impossible to google.)

In our project, this is a class instantiated by the ViewController which interacts with multiple views.

In our `GameViewController` class, it looks something like this:

{% highlight swift %}
override public func viewDidLoad() {
    super.viewDidLoad()
    interactor = DefaultGameInteractor(
        boardView: boardView,
        statusView: statusView,
        indicatorView: indicatorView)

    interactor.startGame(GameConfig.game)

}

@IBAction public func makeMove(sender: UIButton) {
    interactor.makeMove(sender.tag)
    interactor.completeTurn()
}
{% endhighlight %}

Basically, we are instantiating the `DefaultGameInteractor` class with all of our custom view classes. Now, most of the game logic is delegated to the interactor and the views, rather than the controller.

Note that `GameInteractor` is a protocol, and `DefaultGameInteractor` extends the protocol.

{% highlight swift %}
public protocol GameInteractor {
    var game: Game! {get set}
    init(boardView: BoardView, statusView: StatusView, indicatorView: IndicatorView)
    func startGame(game: Game)
    func makeMove(spotIndex: Int?)
    func completeTurn()
    func resetGame(game: Game)
    func warnReset()
}

public class DefaultGameInteractor: GameInteractor {
  required public init(boardView: BoardView, statusView: StatusView, indicatorView: IndicatorView) {
      self.boardView = boardView
      self.statusView = statusView
      self.indicatorView = indicatorView
  }

  //more methods here

}
{% endhighlight %}

While this is certainly not the only way to design classes, this was a strategy that worked.

[View the full code on Github](https://github.com/beccanelson/tttaas-iOS)
