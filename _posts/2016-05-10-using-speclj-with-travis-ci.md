---
layout: post
title: Using Speclj with Travis CI
date: 2016-5-10
categories: clojure testing travis
related: ["Flexible Testing with Speclj", "Testing and Troubleshooting in Clojure", "How do I _____ in Clojure?"]
---

### If you're a fan of testing Clojure with [Speclj](https://github.com/slagyr/speclj), you will be glad to know that it's very simple to integrate with [Travis CI](https://travis-ci.org/).

If you're new to Travis, Travis is an automatic service that connects to a Github repository and runs tests each time you push changes or submit a pull request. It's an easy way to keep track of the status of your project, and ensure that the changes you are making (or the changes someone else is making and submitting as a pull request) aren't breaking anything in the project.

#### To use Travis:

1. Sign up on [travis-ci.org](https://travis-ci.org/) and connect to your Github account.
2. Add a `.travis.yml` file to the root of your project. Typically, this includes the language and any configuration options.
3. Push your changes to Github, and see your build pass or fail.

### To use Travis with Speclj:

Make sure Speclj is included in the development dependencies in `project.clj`.

{% highlight clojure %}
:profiles {:dev {:dependencies [[speclj "3.3.1"]]}}
{% endhighlight %}

Add the `script: lein spec` to `.travis.yml`. This just tells Travis how to run your tests each time it builds. My `.travis.yml` only needed `language` and `script`.

{% highlight yaml %}
language: clojure
script: lein spec
{% endhighlight %}

That's it! Travis is now able to run your tests using Speclj. Isn't it nice when everything turns green?

![travis build with speclj](images/Screen Shot 2016-05-10 at 3.11.56 PM.png)

### For more information:

[Travis Documentation - Building a Clojure Project](https://docs.travis-ci.com/user/languages/clojure)
