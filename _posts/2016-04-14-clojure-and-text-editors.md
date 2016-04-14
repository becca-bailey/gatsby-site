---
layout: post
title:  "Clojure and Text Editors"
description: "A Love-Hate Relationship"
date:   2016-4-14
categories: clojure apprenticeship tools
related: ["Polymorphism in Clojure", "How do I _____ in Clojure?", "Multi-Arity Functions in Clojure"]
---

## Part of the challenge of working with Clojure is making it get along with my text editor.

After a couple days of counting parentheses, I was over it. Complicating the situation even more is the fact that I am still indecisive about my text editor of choice, but that's another story.

Since my apprenticeship began, I've been going back and forth between atom and vim, sometimes taking the "best of both worlds" approach and using atom with vim keybindings, which is helpful for learning, but sometimes buggy.

**Side note:** I can see how vim is faster, and it allows you to edit your code on any machine. However, the hours I've spent over the past two weeks just trying to configure basic things like syntax highlighting and split window display have made me crabby. At the moment, I'm loving the fact that atom comes with these features by default, and has the option of adding a [built-in terminal](https://atom.io/packages/terminal-plus).

### First of all, let me just say that as a newbie, deciding which tools to use is hard.

A quick google search will tell you that:

1. Every developer has an opinion,
2. Every developer thinks their opinion is the right one, and
3. Every developer who has an opinion claims to have more experience than you do.

Also, when every tool has a learning curve, it can be hard to determine how much of your time should be spent learning to write code, and how much time should be spent learning tools to write your code more efficiently. It's a fine balance, I think, wanting to maximize your time, but not becoming so dependent on a certain environment setup that you can't work without it.

Anyway, I have digressed. In my experience so far, here are some tools that have helped. Just know that:

1. My opinion is ever-changing,
2. No, I don't think my opinion is the right one, and
3. I probably don't have more experience than you do.

### [Rainbow Parentheses](https://github.com/kien/rainbow_parentheses.vim)

This is a simple vim plugin that colors your parentheses and eliminates the need to count them. For me, this was an instant game changer.

### [Parinfer](https://shaunlebron.github.io/parinfer/)

While I haven't tried [parinfer for vim](https://github.com/bhurlow/vim-parinfer), I have been using it with [atom](https://github.com/oakmac/atom-parinfer). Basically, this is a plugin that uses math to figure out where your parentheses belong, and puts them there. So, for example, if you comment out a section of code that contains end parentheses for the section above it, parinfer will automatically figure out that you need some extra parentheses and add them for you. It uses indentation to figure out where your code should be nested, and handles all the parentheses for you. Sometimes it can be a little overbearing, and tries to do *a little too much*, but you always have the option of toggling it on and off.

### [Paredit](https://atom.io/packages/lisp-paredit)

This is another one that I've been using on atom, but haven't tried yet with [vim](http://www.vim.org/scripts/script.php?script_id=3998). While this plugin gives you a little more control than Parinfer alone (it gives you shortcuts for wrapping words in parentheses, expanding or shrinking parentheses, etc.), it does have a bit of a learning curve and I often forget to use it. Especially when I'm using atom + vim mode, remembering atom keybindings + vim keybindings + paredit keybindings == too many keybindings.

For me, I think it will take some more time to figure out which tools are best for my workflow, and (hopefully) actually decide on a text editor. In the mean time, notice that I have a comment section, and I am open to suggestions!
