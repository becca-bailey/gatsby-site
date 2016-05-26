---
layout: post
title: To Test or Not to Test
description: My adventures with the Testing Pyramid
date: 2016-5-26
categories: java apprenticeship testing
related: ["Efficient Testing with Cucumber", "Testing and Troubleshooting in Clojure", "Flexible Testing with Speclj"]
---
An important part of the apprenticeship at 8th Light is writing an HTTP Server. For the past couple of weeks, I've been busy working on testing and designing my server in Java.

As I have been diving into testing with [Cucumber](/efficient-testing-with-cucumber) and jUnit, I have been attempting (and sometimes failing) to understand the different levels of testing that need to exist in my project.

A visual that helped me to understand this is the [Test Pyramid](http://martinfowler.com/bliki/TestPyramid.html)

![test pyramid](images/idealautomatedtestingpyramid.png)

For now, I'm going to focus on the difference between Unit and Integration tests.

## Unit tests

Unit testing is the base of the pyramid. Ideally, 100% of your code should be covered by unit tests. Unit tests should cover individual methods inside classes, and verify that they are doing everything they are intended to do.

For example, inside my Server class I have a getPortNumber method that parses the command line arguments and returns a port number.

{% highlight java %}
public static Integer getPortNumber(String[] args) {
     int portNumber;
     if (args.length > 0) {
         portNumber = Integer.parseInt(args[1]);
     }
     else {
         portNumber = 5000;
     }
     return portNumber;
 }
 {% endhighlight %}

 Because this method returns an Integer, it can be validated using a simple jUnit test.

 {% highlight java %}
 @Test
 public void getPortNumberReturnsDefaultPort() throws Throwable {
     String[] args = {};
     Integer defaultPort = 5000;
     Assert.assertEquals(defaultPort, Server.getPortNumber(args));
 }

 @Test
 public void getPortNumberReturnsPortArgument() throws Throwable {
     String[] args = {"-p", "8000"};
     Integer port = 8000;
     Assert.assertEquals(port, Server.getPortNumber(args));
 }
{% endhighlight %}

For for methods like this one without side effects, testing is pretty simple. However, not every method can be easily tested by itself. For example, let's look at a method I wrote in order to return an echo response from the server.

{% highlight java %}
public void echo (PrintWriter out, BufferedReader in) throws IOException {
    String request;
    while((request = in.readLine()) != null) {
        out.println(echoResponse(request));
    }
}
{% endhighlight %}

First of all, this method returns void, which means we need some way of capturing the output in a test case. Also, it takes a PrintWriter and a BufferedReader, which are both classes that can only be initialized with a socket. In order to test this, we need to:

+ Initialize a server socket
+ Initialize a client socket that connects to the server socket
+ Initialize the output and input (the PrintWriter and BufferedReader)
+ Provide the server with input that mimics a user's request
+ Read the response from the server and compare it to the expected response

To me, this sounds more like an **Integration test**.

## Integration tests

Integration tests test the way that different methods work together. In this example, it's nearly impossible to test it without also testing the server that calls it. Generally, this is not a good thing, as the different parts of a program should know as little about each other as possible. However, in this case, I think it's mostly unavoidable.

I have been writing my Integration tests using [Cucumber](http://cucumber.io).

{% highlight gherkin %}
Feature: Echo Server
  Scenario: Server returns echo response
    Given the server is running on port 5000
    And the client connects on port 5000
    When the user inputs "hello"
    Then the response is "Echo: hello"
  {% endhighlight %}

While it's my goal to isolate as much behavior into unit-testable methods as possible, I've concluded that it's not always possible to test things outside of the broader context.

Ideally, we should be writing tests at every level of the pyramid, from unit tests that test the behavior of individual methods, to integration tests that test methods working together, to UI tests that test the overall behavior of an application. (Yes, I just said the word "test" seven times in one sentence. Does that make me an official 8th Light team member now?)
