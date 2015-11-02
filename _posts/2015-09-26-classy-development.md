---
layout: post
title:  "Classy Development"
description: "ID's and classes in HTML and CSS"
date:   2015-09-26
categories: dev-bootcamp git
---

##"What is the difference between a class and an ID?"

If this question has been keeping you up at night, I've got some answers for you.  

Simple Answer:

###An ID is an identifier you can only use once, but you can use a class more than once.  

I bet you never saw that one coming.  But, in case you need a little more explanation, here's the more complicated answer.

##Using an ID  

{% highlight css %}
<h1 id="#site-title">My Awesome Website</h1>
{% endhighlight %}

**This is the only site title on the page.**  There is not another one, nor is there another element with the exact same styling.  I can do whatever I want to this site title, and it won't affect any other elements on the page.  That ID is now a 'hook' I can use when I write CSS.  

{% highlight css %}
#site-title {
	font-family: Papyrus, fantsy;
	font-size: 50px;
	color: lime;
}
{% endhighlight %}

So in other words, if I wanted to display my title in huge, lime green Papyrus, it would only apply to this one element.  If you wanted to write more than one element on your page with 50px lime green Papyrus, it wouldn't work properly.  Plus, it would just look terrible.  

ID's do have one more trick up their sleeve, which is site navigation.  If you want to navigate to a specific place on a page, you can link to an ID.


{% highlight css %}
<a href="#about">About Me</a>
{% endhighlight %}

##Using a Class

Most of the time when you write CSS rules, you will be using classes.  It's just classier, if you ask me.  Unlike an ID, a class allows you to apply styling to more than one element.  

{% highlight css %}
<p class="quote">I think this is brilliant, so I am quoting it.</p>
<p class="quote">I am quoting this, too, becuase it makes me look smarter.</p>
{% endhighlight %}

If I apply styles to the quote class, it will apply to both paragraphs, as well as any other elements on my site with the same class. 

{% highlight css %}
.quote {
	font-style: bold;
	font-color: purple;
	backgroud-color: orange;
}
{% endhighlight %}

Now, all of my quotes are purple with an orange background.  Beautiful.  I can also target more specific classes by including the parent elements, too. 

{% highlight css %}
header .quote {
	font-size: 5em;
}
{% endhighlight %}

Now the quotes in my header would have the quote styles PLUS the additial style I just gave it.  Pretty neat, huh?  

For more information:

[The Difference Between ID and Class](https://css-tricks.com/the-difference-between-id-and-class/)

