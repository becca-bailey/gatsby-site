---
layout: post
title: "It's Jekyllicious!"
description: Tips and Tricks for Blogging with Jekyll
date: 2016-6-03
---

### I'm a pretty big fan of Jekyll. What is Jekyll, anyway?

Jekyll is a static site generator that easily integrates with GitHub pages. In fact, this blog that you're reading right now is built with Jekyll.

When I say a site is *static*, I mean that it's not connected to a database. A Content Management System like WordPress requires a database to operate. Even when you build a site locally, you need to use a program like [MAMP](https://mamp.info) to set up a local database.

This makes a static site easier to set up than a dynamic one. Jekyll stores all of your posts and pages as separate HTML files within the folder structure.

Keep in mind that a static site does have its disadvantages. Jekyll relies on third-party plugins for things like comments, form entries, and basic user authentication. This can be a disadvantage if you want more advanced functionality, or want to manage the entire codebase yourself.

### Can't I do all this with plain HTML and CSS?

Yes, absolutely. However, building a blog with straight-up HTML and CSS involves a lot of copying and pasting. Jekyll uses [liquid markup](https://github.com/Shopify/liquid/wiki/liquid-for-designers) to create templates, which saves a lot of code duplication.

![template-example](images/Screen Shot 2016-06-01 at 4.04.51 PM.png)

### Fun with YAML

YAML is a language used in order to store bits of data. It basically creates key-value pairs that you can call in your code. Fun fact: YAML actually stands for **Y**AML **A**in't a **M**arkup **L**anguage. (That is what you call a *recursive algorithm*.)**

In Jekyll, you can add YAML Front Matter to your posts, pages, and templates.

![yaml-example](images/Screen Shot 2016-06-03 at 8.49.32 AM.png)

Inside your HTML, you can call the values defined in your front matter using liquid tags.

![liquid-example](images/Screen Shot 2016-06-03 at 8.49.18 AM.png)

YAML is helpful for creating custom post types. For example, if I wanted to create a page to display a portfolio item, I could add an image name to my front matter, and incorporate it into my HTML using the tag `page.image`. (See the presentation for code example.)

### Gems

Becuase Jekyll is build in Ruby, you can also use gems to add functionality. Some gems are automatically installed as a dependency when you install Jekyll, but there are also many others you can add yourself. As a matter of fact, in the latest version, Jekyll removed some gems such as jekyll-paginate and Pygments (a syntax highlighter) from their list of dependencies.

There are two ways to add gems. First, you can list them in your configuration file and install them individually.

In _config.yml:

{% highlight yaml %}
gems: ['jekyll-paginate']
{% endhighlight %}
In the command line:

```
gem install jekyll-paginate
```

The second way is to use a Gemfile. With bundler installed, you can create a gemfile using `bundle init` inside the directory, and include your gems there.

#### Do I need a Gemfile?

Gemfiles are useful if you have a lot of dependencies, or if you want someone else to easily clone the project and run it on their computer. For example, an open source project should probably use a Gemfile. Otherwise, it's probably not necessary.

### Third Party plugins

Because Jekyll is static, as previously mentioned, it requires third-party plugins for any features where data needs to be stored in a database.

For example, my site uses Disqus (pronounced 'discuss') to enable comments. The [installation instructions](https://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions) make it easy to set up.

There are also multiple form plugins that will save form data. I use [simple form](https://getsimpleform.com/), but [Formspree](http://formspree.io) and [FormKeep](https://formkeep.com/) also look like great options.

[Click here](https://jekyllrb.com/docs/plugins/) to see a list of available Gems and plugins.

### The bottom line

I love WordPress, but as a developer I find that Jekyll is much easier to set up and maintain. There's no PHP, no database to configure, and it is infinitely customizable without the need for themes.

The major downside, however, is that Jekyll itself is not a CMS. If a user doesn't know their way around HTML, Markdown, and GitHub, it would come with a pretty steep learning curve. Fortunately, there are solutions like CloudCannon[http://cloudcannon.com/] that could provide a more client-friendly alternative.

To learn more about Jekyll, there is plenty of [documentation](http://jekyllrb.com) to help.

<iframe src="//slides.com/beccanelson/deck/embed" width="100%" height="500" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
