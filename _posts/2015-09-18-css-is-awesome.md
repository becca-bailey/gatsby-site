---
layout: post
title:  "CSS is Awesome"
description: "Becca's Favorite CSS Tricks"
date:   2015-09-18
categories: dev-bootcamp git
---

As we are diving into CSS next week in Dev Bootcamp, I wanted to share some of my favorite CSS tricks.

##Flexbox

Flexbox is a trick that does exactly what it says—makes flexible boxes.  I especially like using it for navigation menus to space items out evenly.  Also, using flexbox to display content helps to make your site more mobile responsive.  Flexbox is completely supported in Chrome and Firefox, but some browsers may require a prefix. For the most recent information, check out <a href="http://www.caniuse.com">http://www.caniuse.com</a>.

You can use flexbox by adding a few lines of CSS to the container element.

{% highlight css %}
ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
{% endhighlight %}

<p data-height="268" data-theme-id="0" data-slug-hash="zvqyPJ" data-default-tab="result" data-user="beccaliz" class='codepen'>See the Pen <a href='http://codepen.io/beccaliz/pen/zvqyPJ/'>Flexbox Navigation</a> by Becca Nelson (<a href='http://codepen.io/beccaliz'>@beccaliz</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

For more info: [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

##Clipping a background image around text

This one is a little trickier, as it is not supported in all browsers and involves some workarounds to show up in Firefox and Internet explorer.  The effect, however, is pretty awesome when it works.  Why use photoshop when you can use CSS?  Also, note the hover effect in my example.

{% highlight css %}
 h1 {
  color: black;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(transparent, transparent), url("path/to/image");
  -webkit-background-clip: text;
  background-size: cover;
}

h1:hover {
  background-position: 50%;
}
{% endhighlight %}

<p data-height="268" data-theme-id="0" data-slug-hash="dYMQQq" data-default-tab="result" data-user="beccaliz" class='codepen'>See the Pen <a href='http://codepen.io/beccaliz/pen/dYMQQq/'>dYMQQq</a> by Becca Nelson (<a href='http://codepen.io/beccaliz'>@beccaliz</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

For more info: [Using Background Clip for Text with CSS Fallback](http://nimbupani.com/using-background-clip-for-text-with-css-fallback.html)

##Sass

I guess Sass isn't a CSS trick as much as it's a method of writing CSS.  Sass adds nesting, variables, and conditional logic to CSS, and to me, it just makes sense!

For example, Sass allows you to nest your code instead of writing long strings of identifiers.

{% highlight css %}
.box {
  width: 800px;
  .title-area {
    background-color: blue;
    .h1 {
      font-family: Helvetica, sans-serif;
    }
  }
}
{% endhighlight %}

You can also use variables to replace values.  This way, if you want to change the style of the entire document, you can change the variable instead of searching for each instance of a particular style.

{% highlight css %}
$text-color: #D63B71;
$heading-font: Lato, sans-serif;

h1 {
  color: $text-color;
  font-family: $heading-font;
}
{% endhighlight %}

I obviously can't give you a full tutorial here, but I would recommend checking out some of these resources.

[Sass Documentation](http://sass-lang.com/)

[Sass Basics course at Treehouse](http://teamtreehouse.com/library/sass-basics)

##Stuff I'm still learning about

I took a class on SVGs this week, which I think is completely fascinating, especially when combined with CSS3 animation.  I'm currently reading through [Pocket Guide to Writing SVG](http://svgpocketguide.com/), and learning more about [keyframes animation](https://css-tricks.com/snippets/css/keyframe-animation-syntax/).

What about you?  What's your favorite CSS trick you have learned so far?
