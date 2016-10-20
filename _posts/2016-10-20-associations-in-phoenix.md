---
layout: post
title: "Associations in Phoenix: One-to-Many"
date: 2016-10-20
---

Right now, I am building a library application using Elixir and Phoenix. *Side note: Elixir is really cool, and I highly recommend it.*

When learning a new language and a new framework, one of the most challenging parts so far has been making associations between models. For example, here is the schema for my application.

![schema](/images/Screen Shot 2016-10-20 at 5.08.16 PM.png)

As you can see, I have two different types of relationships. I have a one-to-many relationsip between Books and CheckOuts, and a many-to-many relationship between Books and Tags.

## One-to-many associations

To create a one-to-many relationship in Phoenix, we need to add associations in the schema using `has_many` and `belongs_to`. If you are familiar with Rails, the process is very similar.

{% highlight elixir %}

# inside models/book.ex
schema "books" do
  field :title, :string
  field :author, :string
  field :year, :integer
  has_many :check_outs, Bookish.CheckOut

  timestamps()
end

# inside models/check_out.ex
schema "check_outs" do
  field :checked_out_to, :string
  field :return_date, Ecto.Date
  belongs_to :book, Bookish.Book

  timestamps()
end
{% endhighlight %}

Next, we need to add nested routes in the router.

{% highlight elixir %}
scope "/", Bookish do
  pipe_through :browser
  get "/", PageController, :index

  resources "/books", BookController, except: [:show] do
    resources "/check_outs", CheckOutController, only: [:index, :new, :create]
  end
end
{% endhighlight %}

Now comes the harder part. When we create a new check-out record, we also need to associate it with the correct book_id. If we are using nested routes, we can get the book_id from the route using the plug `conn.assigns[:book]`. You can learn more about Phoenix plugs in [the docs](http://www.phoenixframework.org/v0.12.0/docs/understanding-plug).

Next, we need to use this plug to build an association between book and check_out. Conveniently, there is a `build_assoc` function that will do the trick.

{% highlight elixir %}
def create(conn, %{"check_out" => check_out_params}) do
  changeset =
    conn.assigns[:book]
    |> build_assoc(:check_outs)
    |> CheckOut.changeset(check_out_params)

  case Repo.insert(changeset) do
    {:ok, _check_out} ->
      conn
      |> put_flash(:info, "Book has been checked out!")
      |> redirect(to: book_path(conn, :index))
    {:error, changeset} ->
      render(conn, "new.html", changeset: changeset)
  end
end
{% endhighlight %}

In order to test this, we need to preload the association. While I found this whole process a bit difficult to understand, Phoenix speeds up its loading time by only loading associated models for any given query when you specifically ask it to. For example, when you want to load a collection of Books with their associated CheckOuts, you would do it like this: `Repo.all(Book) -> Repo.preload(:check_outs)`.

Stay tuned for Many-to-Many associations in Phoenix!
