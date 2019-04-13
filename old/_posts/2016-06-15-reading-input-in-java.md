---
layout: post
title: Sockets, readers, and infinite loops–Oh my!
description: Reading input in Java
date: 2016-6-16
twitter_text: "My involuntary experience with sockets, readers, newlines, and infinite loops."
---

The internet isn't always right. Shocking, I know.

I ran into a lot of problems this week, and like the developer I am, the first thing I did was Google it. I spent the week reading through dated stack overflow posts and help forums, looking up Java examples on the Oracle website. I asked a lot of questions, probably thoroughly annoyed the people I work with. At times, it seemed like I fixed one problem only to create another.

I found a lot of answers that just didn't work for me. Maybe it was because of the specific setup of my server, or the way I was trying to test it, or just the fact that I implemented the solution incorrectly. So, for one of these problems, I would like to set the record straight and talk about the solutions that didn't work, and the one that finally did.

Reading input from a server socket in Java is surprisingly hard, and most of the examples I found did it the same way. My first attempt looked something like this:

{% highlight java %}
public String getRequestFromClient(BufferedReader in) throws IOException {
  StringBuilder request = new StringBuilder();
  String line;
  while ((line == in.readLine) != null) {
    request.append(line);
    request.append("\n");
  }
  return request.toString();
}
{% endhighlight %}

Reading this code, it seems to make sense. In a perfect world, it should do this:

+ while a socket is open
+ until there are no lines left
+ append each line to a string followed by a newline
+ return the full response

However, this code didn't work for me. I ended up with a nasty infinite loop that was forever waiting for input from the client, and never got a response that was null.

{% highlight java %}
public String getRequestFromClient(BufferedReader in) throws IOException {
  StringBuilder request = new StringBuilder();
  String line = in.readLine()
  while (in.ready()) {
    request.append(line);
    request.append("\n");
  }
  return request.toString();
}
{% endhighlight %}

This was my second approach, which solved my infinite loop problem. As opposed to `in.readLine() != null`, `in.ready()` didn't cause the server to be waiting forever. You can probably predict that `in.ready()` returns true if the socket is ready to send data to the server. However, notice the catch here. I discovered entirely by accident that `in.ready()` will only return true *after* it starts reading data, kind of like the weather app on my phone which will only tell me it's going to rain *after* it has started raining and I already left home without my umbrella.

However, even this approach didn't solve my problem completely. I learned the hard way that `readLine()` will only read a line if it is followed by a newline. I wrongly assumed that it would read the last line of data, which was preceded by a newline, but not followed by one, but learned when I tried it that my assumption was wrong.

In order to completely solve my problem, I had to learn how to read bytes.

{% highlight java %}
private String getRequestFromClient(BufferedReader in) throws IOException {
    StringBuilder request = new StringBuilder();
    request.append(in.readLine());
    request.append("\n");
    while(in.ready()) {
        request.append((char) in.read());
    }
    return request.toString();
}
{% endhighlight %}

This solution still includes `in.readLine()`, because as I already mentioned, `in.ready()` doesn't return true until the server is already reading data. Next, I am using `in.read()` to append individual characters to my StringBuilder, which includes newlines and carriage returns.

Working with sockets and readers in Java isn't always easy, as you can see by my multiple attempts to solve this problem. However, it's always exciting to finally find a working solution and gain a better understanding of basic programming in the process.
