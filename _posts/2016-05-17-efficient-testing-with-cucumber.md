---
layout: post
title: Efficient Testing with Cucumber
date: 2016-5-17
categories: java apprenticeship testing
related: ["Arrays and Lists in Java", "Testing and Troubleshooting in Clojure", "Flexible Testing with Speclj"]
---

This week, I've been exploring the [Cucumber](http://cucumber.io) testing framework for Java. So far, I don't think I've ever been so excited about a testing framework. Just following along with some of the examples in [The Cucumber for Java Book](https://pragprog.com/book/srjcuc/the-cucumber-for-java-book) and using the it to test the [Prime Factors kata](http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata), I'm seriously impressed by how easy it is to use, and how much test code I have saved in the process.

In a nutshell, Cucumber uses a language called [Gherkin](https://cucumber.io/docs/reference) which allows you to create plain-English test files that define the core functionality of your program. Using keywords like *given*, *when*, *and*, and *then*, a developer can write out features and scenarios that are easily understandable by clients and stakeholders.

With the appropriate .jar files, Cucumber can be run from the command line. In this example, though, I set up my project using Maven for IntelliJ. The full version of this project can be found [here](https://github.com/beccanelson/prime-factors-maven).

{% highlight Gherkin %}
# prime_factors/src/test/resources/cucumber/PrimeFactors.feature

Feature: Prime Factors
  Scenario: Returns an empty collection
    When I generate the prime factors of 1
    Then it returns an empty collection
{% endhighlight %}

When I run this test, Cucumber gives me what is perhaps the world's most helpful error message.

{% highlight Java %}
1 Scenarios (1 undefined)
2 Steps (2 undefined)
0m0.000s


You can implement missing steps with the snippets below:

@When("^I generate the prime factors of (\\d+)$")
public void iGenerateThePrimeFactorsOf(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^it returns an empty collection$")
public void itReturnsAnEmptyCollection() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}
{% endhighlight %}

Do you see what happened there? Cucumber actually analyzed my scenario using regex and wrote test code *for me*. THAT'S CRAZY!!

<center>
<iframe src="//giphy.com/embed/5aLrlDiJPMPFS" width="480" height="558" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/jon-stewart-the-daily-show-5aLrlDiJPMPFS">via GIPHY</a></p>
</center>

Now, you can take this code and put it in a Steps file. IntelliJ allows you to do this automatically, otherwise, copying and pasting works just fine. This file is also known as the *glue*. Basically, when Cucumber runs your tests with Gherkin, it reads through your scenarios and connects them to the actual test code.

Anyway, now I have a separate test file that looks like this.

{% highlight Java %}
// prime_factors/src/test/java/example.primefactors/Steps.java

package example.primefactors;

import cucumber.api.PendingException;
import cucumber.api.java.en.*;

public class Steps {
    @When("^I generate the prime factors of (\\d+)$")
    public void iGenerateThePrimeFactorsOf(int arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^it returns an empty collection$")
    public void itReturnsAnEmptyCollection throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
{% endhighlight %}

Now, I can add code to my tests to make them pass. *The Cucumber for Java Book* recommends writing all of your implementation code in this test file initially before extracting it to a separate file.

{% highlight Java %}
// prime_factors/src/test/java/example.primefactors/Steps.java

package example.primefactors;
import static org.junit.Assert.assertEquals;
import...

class PrimeFactors {
    public ArrayList<Integer> generate(int n) {
        return new ArrayList<Integer>();
    }
}

public class Steps {
    ArrayList<Integer> factors;
    PrimeFactors primeFactors = new PrimeFactors();

    @When("^I generate the prime factors of (\\d+)$")
    public void iGenerateThePrimeFactorsOf(int n) throws Throwable {
        factors = primeFactors.generate(n);
    }

    @Then("^it returns an empty collection$")
    public void itReturnsAnEmptyCollection() throws Throwable {
        ArrayList<Integer> emptyCollection = new ArrayList<Integer>();
        assertEquals(emptyCollection, factors);
    }
}
{% endhighlight %}

Now, I have passing tests.

{% highlight Java %}
1 Scenarios (1 passed)
2 Steps (2 passed)
0m0.121s

Process finished with exit code 0
{% endhighlight %}

Now, what if I wanted to add more than one test to each scenario? The first way would be to add the keyword *And*. If I add another line to my feature, this test will still pass without adding any code.

{% highlight Gherkin %}
# prime_factors/src/test/resources/cucumber/PrimeFactors.feature

Feature: Prime Factors
  Scenario: Returns an empty collection
    When I generate the prime factors of 0
    And I generate the prime factors of 1
    Then it returns an empty collection
{% endhighlight %}

The second method is adding *Scenario Outlines*. Basically, scenario outlines allow you to create tables of input and expected results.

{% highlight Gherkin %}
# prime_factors/src/test/resources/cucumber/PrimeFactors.feature

Feature: Prime Factors
  ...
  Scenario Outline: Returns a prime number
    When I generate the prime factors of <prime>
    Then it returns list <prime>

    Examples:
      | prime |
      | 2     |
      | 3     |

  Scenario Outline: Returns two or more prime factors
    When I generate the prime factors of <non-prime>
    Then it returns list <factors>

    Examples:
      | non-prime | factors |
      | 4         | 2, 2    |
      | 8         | 2, 2, 2 |
      | 9         | 3, 3    |
{% endhighlight %}

I have only included a few, but ideally, we could put an infinite number of test cases into each table, and Cucumber would generate the same amount of code. However, do you see the problem with these tests that Cucumber automatically generated?

{% highlight java %}

@Then("^it returns list (\\d+)$")
public void itReturnsListPrime(int factor1) throws Throwable {
    assertEquals(list(factor1)), factors)
}

@Then("^it returns list (\\d+), (\\d+)$")
public void itReturnsListPrime(int factor1, int factor2) throws Throwable {
    assertEquals(list(factor1, factor1), factors)
}

@Then("^it returns list (\\d+), (\\d+), (\\d+)$")
public void itReturnsList(int factor1, int factor2, int factor3) throws Throwable {
    assertEquals(list(factor1, factor2, factor3), factors);
}

// *list is a function I wrote that takes a list of integers and returns an ArrayList.
{% endhighlight %}

These tests are repetitive and limited. If we added an example to the scenario outline that has more than three factors, we would need to add another test. Fortunately, with a couple of small changes, we can create a test that accepts an unlimited number of arguments.

Now, this is my entire test file.

{% highlight java %}
package example.primefactors;

import...

public class Steps {
    ArrayList<Integer> factors;
    PrimeFactors primeFactors = new PrimeFactors();

    @When("^I generate the prime factors of (\\d+)$")
    public void iGenerateThePrimeFactorsOf(int n) throws Throwable {
        factors = primeFactors.generate(n);
    }

    @Then("^it returns list (.*)")
    public void itReturnsList(List<Integer> expectedFactors) throws Throwable {
        assertEquals(expectedFactors, factors);
    }
}
{% endhighlight %}

This, I believe is my favorite part of testing with Cucumber. We could (impractically) write 1,000 different test cases in the `.features` file, and in this case, we could test each one with only two functions. Pretty cool! I don't remember the last time I had this much fun writing tests.

### For more information:

[Cucumber Docs - Cucumber-JVM](https://cucumber.io/docs/reference/jvm)
[IntelliJ Docs - Cucumber](https://www.jetbrains.com/help/idea/2016.1/cucumber.html)
