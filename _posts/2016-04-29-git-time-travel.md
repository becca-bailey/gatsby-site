---
layout: post
title: Git Time Travel
description: Rebasing with Git
date: 2016-4-29
categories: git clojure testing
related: ["I need help!!", "Lost in Translation", "Refactoring with Helper Functions", "Polymorphism in Clojure"]
twitter_text: "Clojure: A Story of Too Many Parentheses"
---

Rebasing just sounds scary, doesn't it? Beginners (like myself) tend to follow the typical `add`, `commit`, `merge`, and `push` workflow, and everything else invokes the mortal dread of making a mistake that is irreversible, meaning our code will be lost, our projects will be ruined, and **our lives will never be the same.**

First of all, I would like to say *fear not*, because there's a `git reflog` for that. But also, rebasing isn't quite as scary as it seems.

### Why should we rebase?

Rather than just merging one branch into another, rebasing allows us to actually apply our changes *on top of* another branch. It sounds like a small difference, but it actually has pretty big implications. Rebasing also allows us to go back and edit previous commits, re-naming them or grouping them together with other similar commits.

The coolest part (in my opinion) is the way that `git rebase` will actually walk you through the history of your project as you resolve merge conflicts, rather than resolving them all at once the way you typically do with a merge. Using `git rebase -i` allows you to view your past commits, and git provides you with a handy guide for re-working them.

![git rebase -i](images/Screen Shot 2016-04-29 at 10.40.26 AM.png)

### Merge conflicts?!? Oh no!

Believe it or not, whether you are merging or re-basing, merge conflicts are your friend. Imagine them as git saying "Excuse me human, but I seem to have two versions of this bit of code. Which one would you like me to keep?" When we put it that way, it sounds so much nicer than allowing our computer to make assumptions about which code we actually want, because we all know what happens when computers assume things. (Autocorrect, anyone?)

But after dealing with a mountain of merge conflicts this week, I have two pieces of advice. The first is this handy command:

`git rebase --abort`

If at any time throughout your rebasing process you feel like you're getting in too deep, or you kept the wrong code, or you're about to pull your hair out, this command will remove all your conflicts and reset your branch to its original state, no questions asked. `git merge` isn't quite so nice this way.

My second piece of advice is TESTING. I don't think rebasing would be possible without well-tested code. For example, when you first run into merge conflicts, you will see something like this.

![git rebase conflict](images/Screen Shot 2016-04-29 at 10.54.55 AM.png)

This tells you exactly where the conflict is, and the tests will help you decide how to resolve it. Be aware that if you are re-arranging commits, the most recent code might not be the code that passes the tests as they are right now. Your goal isn't to update your code to the most recent version, but it is to make the tests pass *exactly as they are right now*. It's easier than it sounds. For example, my most recent code has 63 tests, but in this particular commit there were 41.

![git rebase testing](images/Screen Shot 2016-04-29 at 10.51.16 AM.png)

After doing it a few times, you get used to the cycle of resolving conflicts, passing tests, and continuing with the rebase as you travel through the history of your project.

![git rebase cycle](images/Screen Shot 2016-04-29 at 10.54.36 AM.png)

Once the rebase is completed and all your current tests are passing, you should be able to merge your branch with no conflicts. I'm still getting used to this process, but in the end, it's not as scary as it sounds!

### For more information:

[A rebase based workflow](http://unethicalblogger.com/2010/04/02/a-rebase-based-workflow.html)

[Atlassian - Git team workflows: merge or rebase?](https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase/)
