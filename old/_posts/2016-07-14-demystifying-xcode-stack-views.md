---
layout: post
title: Demystifying Xcode stack views
date: 2016-7-14
---

As someone new to Xcode, I think the hardest part to learn is working with views. I'm used the the world of HTML and CSS where it's easy to tweak and adjust, and I am fully in charge of the code. Xcode, however, provides a drag-and-drop layout where the developer is not fully in charge of the code that is generated, and what you see isn't always what you get.

If this is new to you, too, here are some things I learned along the way.

This week, I was pairing with another apprentice to create a tic-tac-toe interface in Xcode. We started with some basic wireframes I made using Sketch.

![Wireframes](images/xcode-stack-views/Screen Shot 2016-07-14 at 10.14.01 AM.png)

I'm going to focus this post on the board view, but the home screen was made using a similar process. The first thing we did was construct the board.

Initially, we tried to use an image that matches the board I made in Sketch and overlay it with a grid of buttons. We quickly realized, though, that this wasn't the best approach.

In the end, we used stack views to make a grid of buttons for the board.

First, we made a button. We set an aspect ratio on the button to set the width equal to the height, making it a square. You can do this by CTRL-clicking the button, dragging the mouse to the edge of the views, and selecting *aspect ratio* from the dropdown.

![Button with aspect ratio](images/xcode-stack-views/Screen Shot 2016-07-14 at 10.35.20 AM.png)

![Aspect ratio settings](images/xcode-stack-views/Screen Shot 2016-07-14 at 9.31.55 AM.png)

*Aspect ratio settings*

Now, we just need to copy and paste our button twice. Once there are three buttons, you can select all of them and click *Editor > Embed In > Stack View*.

![Embed in stack view](images/xcode-stack-views/Screen Shot 2016-07-14 at 9.35.04 AM.png)

I'm not sure why, but at this point xCode will make the buttons smaller until you adjust the constraints later. For now, make sure the alignment and distribution are set to *fill*, and add some spacing between the buttons.

![Alignment, distribution, and spacing](images/xcode-stack-views/Screen Shot 2016-07-14 at 10.48.21 AM.png)

Now, we will copy this stack view twice and repeat the same process to create the horizontal rows.

![Create board rows](images/xcode-stack-views/Screen Shot 2016-07-14 at 10.53.10 AM.png)

Once we had a board, we added the other elements to the page and put them together using—you guessed it—a stack view. Note: The board is currently nested inside an empty view.

![Board stack view](images/xcode-stack-views/Screen Shot 2016-07-14 at 10.58.20 AM.png)

Now is when we want to set constraints. Constraints can get complicated quickly, but here is the basic run-down. Like we set the aspect ratio before, constraints are created when you CTRL-click a container and drag it to the outer edge. Generally you want to do this with the entire stack view rather than the individual elements inside it. As you set constraints, the view will begin to resize.

You can make sure you are selecting the right view by holding down CTRL-shift when clicking on the view.

![ctrl-shift click](images/xcode-stack-views/Screen Shot 2016-07-14 at 11.08.39 AM.png)

Setting constraints is basically like setting margins between one view and another. In this case, I am setting 20 pts of space between the top of the container and the top of the view.

![setting constraints](images/xcode-stack-views/Screen Shot 2016-07-14 at 11.06.50 AM.png)

It's difficult to get used to the idea of sizing objects based on constraints rather than pixels or percentages. Xcode uses this model in order to help developers create designs that are responsive to a variety of devices and screen sizes.

In the end, this was the finished product.

![finished layout](images/xcode-stack-views/Screen Shot 2016-07-14 at 9.57.49 AM.png)

While it doesn't match the wireframes exactly yet, it's a great starting point as we continue to add functionality to our application.
