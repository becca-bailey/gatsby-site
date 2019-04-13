---
layout: post
title: "Associations in Phoenix: Many to Many"
date: 2016-10-28
---

In [my last post](/associations-in-phoenix), I gave an example of a one-to-many association in Phoenix. But as you can see in my schema, I also have a many-to-many relationship between Books and Tags.

![schema](/images/Screen Shot 2016-10-20 at 5.08.16 PM.png)

## Many-to-many associations

Luckily, the latest version of Phoenix provides an easy way to create this relationship. While Rails would use the `has_many` helper in both models to describe the relationship, Phoenix provides you with a `many-to-many` helper for the model's schema.

{% highlight elixir %}
# in models/book.ex
schema "books" do
  field :title, :string
  field :author, :string
  field :year, :integer
  has_many :check_outs, Bookish.CheckOut
  many_to_many :tags, Bookish.Tag, join_through: Bookish.BookTag, on_delete: :delete_all, on_replace: :delete

  timestamps()
end

# in models/tag.ex
schema "tags" do
  field :text, :string
  many_to_many :books, Bookish.Book, join_through: Bookish.BookTag

  timestamps()
end
{% endhighlight %}

`many_to_many` requires a `join_through` attribute, which points to the join table. In my example, I also specified `on_delete` and `on_replace` options that will delete or replace the association if the model is deleted or updated.

Creating the association gets a bit more complicated. While I will not include every single line of code that I used, here was my general process. Once a book has been validated and created, we want to:

1. Find or create a collection of tags based on the user input
2. Preload the association between books and tags
3. Associate the collection of tags with the book being created
4. Update the book in the database

{% highlight elixir %}
def associate_with_resource(tag_collection, book) do
  book
  |> Repo.preload(:tags)
  |> Ecto.Changeset.change()
  |> Ecto.Changeset.put_assoc(:tags, tag_collection)
  |> Repo.update!
end
{% endhighlight %}

To test this, you can also instantiate a book with a pre-existing collecton of tags.

{% highlight elixir %}
book = Repo.insert! %Book{title: "My book", author: "Jane Smith", tags: [ruby, testing, awesome]}
{% endhighlight %}

Pretty easy, right? Associations aren't quite as scary as they seem. To see more code, [check out the project on github](https://github.com/beccanelson/bookish).
