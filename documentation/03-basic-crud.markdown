---
layout: documentation
title: Basic C.R.U.D. Operations
---

# Basic C.R.U.D. Operations #

In this chapter, you will learn how to perform basic C.R.U.D. (Create, Retrieve, Update, Delete) operations on your database using Perpl.

## Creating Rows ##

To add new data to the database, instantiate a Perpl-generated object and then call the `save()` method. Perpl will generate and execute the appropriate INSERT SQL from the instantiated object.

But before saving it, you probably want to define some column values. For that purpose, Perpl has generated a `setXXX()` method for each of the columns of the table in the model object. So in its simplest form, inserting a new row looks like the following:

```php
<?php
/* initialize Perpl, etc. */

$author = new Author();           // Instantiate a new Author object
$author->setFirstName('Jane');    // Store 'Jane' into the 'first_name' column
$author->setLastName('Austen');   // Store 'Austen' into the 'last_name' column
$author->save();                  // Inserts this record to the 'author' table
```

The column names used in the `setXXX()` methods correspond to the column name in the table.  For example: column `id` will generate `setId()`.  If your column name includes underscores these are removed and the following letter is capitalised, for example column `first_name` will generate `setFirstName()`.  Lastly, you can define the `phpName` attribute of the `<column>` tag in your schema, however this is less common.

> [!TIP]
> Be sure that your column names avoid any reserved words for your database.

In the background, the call to `save()` results in the following SQL being executed on the database:

```sql
INSERT INTO author (first_name, last_name) VALUES ('Jane', 'Austen');
```

## Reading Object Properties ##

You can read values from the Perpl object in the same way that you set them.  Instead of `setXXX()` we use `getXXX()`

```php
<?php
echo $author->getFirstName(); // 'Jane'
echo $author->getLastName();  // 'Austen'
```

## Retrieving Rows ##

Retrieving objects from the database, also referred to as _hydrating_ objects, is essentially the process of executing a SELECT query against the database and populating a new instance of the appropriate object with the contents of each returned row.

In Perpl, you use the generated Query objects to retrieve existing rows from the database.

### Retrieving by Primary Key ###

The simplest way to retrieve a row from the database, is to use the generated `findPk()` method.  In the following example we are going to presume that our Author table has three fields, the first is the ID field and also the primary key.

```php
<?php
$author = AuthorQuery::create()->findPk(1); 
```

This generates a SELECT SQL query (below) and populates the object with all of the values from the table columns.

```sql
SELECT author.id, author.first_name, author.last_name
FROM `author`
WHERE author.id = 1;
```

### Retrieving records using other values ###

To retrieve rows other than by the primary key, use the `find()` method.

```php
<?php
$authors = AuthorQuery::create()->find();
// $authors contains a collection of Author objects
// one object for every row of the author table
foreach($authors as $author) {
  echo $author->getFirstName();
}
```

To add a simple condition on a given column, use one of the generated `filterByXXX()` methods of the Query object, where `XXX` is a column name similar to those we use in the setters and getters. Since `filterByXXX()` methods return the current query object, you can continue to add conditions or end the query with the result of the method call. For instance, to filter by first name:

```php
<?php
$authors = AuthorQuery::create()
  ->filterByFirstName('Jane')
  ->find();
```

> [!TIP]
> `filterByXXX()` is the common method for creating query conditions. See [Column Filter Methods](/documentation/reference/model-criteria.html#column_filter_methods) for more details.

You can also easily limit and order the results on a query. Once again, the Query methods return the current Query object, so you can easily chain them:

```php
<?php
$authors = AuthorQuery::create()
  ->orderByLastName()
  ->limit(10)
  ->find();
```

`find()` always returns a collection of objects, even if there is only one result. If you know that you need a single result, use `findOne()` instead of `find()`. It will add the limit and return a single object instead of an array:

```php
<?php
$author = AuthorQuery::create()
  ->filterByFirstName('Jane')
  ->findOne();
```

For further information regarding query conditions see [Query API reference](/documentation/reference/model-criteria.html).


<!-- Hide this for now
### Using Custom SQL ###

The `Query` class provides a relatively simple approach to constructing a query. Its database neutrality and logical simplicity make it a good choice for expressing many common queries. However, for a very complex query, it may prove more effective (and less painful) to simply use a custom SQL query to hydrate your Perpl objects.

As Perpl uses PDO to query the underlying database, you can always write custom queries using the PDO syntax. For instance, if you have to use a sub-select:

```php
<?php
use Propel\Runtime\Propel;
$con = Propel::getWriteConnection(\Map\BookTableMap::DATABASE_NAME);
$sql = "SELECT * FROM book WHERE id NOT IN "
        ."(SELECT book_review.book_id FROM book_review"
        ." INNER JOIN author ON (book_review.author_id=author.ID)"
        ." WHERE author.last_name = :name)";
$stmt = $con->prepare($sql);
$stmt->execute(array(':name' => 'Austen'));
```

With only a little bit more work, you can also populate `Book` objects from the resulting statement. Create a new `ObjectFormatter` for the `Book` model, and call the `format()` method using the `DataFetcher` instance of the current connection with the pdo statement:

```php
<?php
use Propel\Runtime\Formatter\ObjectFormatter;
$con = Propel::getWriteConnection(\Map\BookTableMap::DATABASE_NAME);
$formatter = new ObjectFormatter();
$formatter->setClass('\Book'); //full qualified class name
$books = $formatter->format($con->getDataFetcher($stmt));
// $books contains a collection of Book objects
```

There are a few important things to remember when using custom SQL to populate Perpl:

* The resultset columns must be numerically indexed
* The resultset must contain all the columns of the table (except lazy-load columns)
* The resultset must have columns _in the same order_ as they are defined in the `schema.xml` file

-->

## Updating Objects ##

Updating database rows basically involves retrieving objects, modifying the contents, and then saving them. In practice, for Perpl, this is a combination of what you've already seen in the previous sections:

```php
<?php
$author = AuthorQuery::create()->findOneByFirstName('Jane');
$author->setLastName('Austen');
$author->save();
```

Alternatively, you can update several rows based on a Query using the query object's `update()` method:

```php
<?php
AuthorQuery::create()
  ->filterByFirstName('Jane')
  ->update(array('LastName' => 'Austen'));
```

The first method involves two SQL queries, one to retrieve the row and the second to issue an update. The second method generates only a single SQL query, and therefore is more efficient.

## Deleting Objects ##

Deleting objects works the same as updating them. You can either delete an existing object:

```php
<?php
$author = AuthorQuery::create()->findOneByFirstName('Jane');
$author->delete();
```

Or use the `delete()` method in the query:

```php
<?php
AuthorQuery::create()
  ->filterByFirstName('Jane')
  ->delete();
```

> [!TIP]
> A deleted object still lives in the PHP code. It is marked as deleted and cannot be saved anymore, but you can still read its properties:

```php
<?php
echo $author->isDeleted();    // true
echo $author->getFirstName(); // 'Jane'
```

<!-- Hide this for now

## Query Termination Methods ##

The Query methods that don't return the current query object are called "Termination Methods". You've already seen some of them: `find()`, `findOne()`, `update()`, `delete()`. There are two more termination methods that you should know about:

`count()` returns the number of results of the query.

```php
<?php
$nbAuthors = AuthorQuery::create()->count();
```
You could also count the number of results from a `find()`, but that would be less effective, since it implies hydrating objects just to count them.

`paginate()` returns a paginated list of results:

```php
<?php
$authorPager = AuthorQuery::create()->paginate($page = 1, $maxPerPage = 10);
// This method will compute an offset and a limit
// based on the number of the page and the max number of results per page.
// The result is a PropelModelPager object, over which you can iterate:
foreach ($authorPager as $author) {
  echo $author->getFirstName();
}
```

A pager object gives more information:

```php
<?php
echo $pager->getNbResults();   // total number of results if not paginated
echo $pager->haveToPaginate(); // return true if the total number of results exceeds the maximum per page
echo $pager->getFirstIndex();  // index of the first result in the page
echo $pager->getLastIndex();   // index of the last result in the page
$links = $pager->getLinks(5);  // array of page numbers around the current page; useful to display pagination controls
```

## Collections And On-Demand Hydration ##

The `find()` method of generated Model Query objects returns a `PropelCollection` object. You can use this object just like an array of model objects, iterate over it using `foreach`, access the objects by key, etc.

```php
<?php
$authors = AuthorQuery::create()
  ->limit(5)
  ->find();
foreach ($authors as $author) {
  echo $author->getFirstName();
}
```

The advantage of using a collection instead of an array is that Perpl can hydrate model objects on demand. Using this feature, you'll never fall short of memory when retrieving a large number of results. Available through the `setFormatter()` method of Model Queries, on-demand hydration is very easy to trigger:

```php
<?php
$authors = AuthorQuery::create()
  ->limit(50000)
  ->setFormatter(ModelCriteria::FORMAT_ON_DEMAND) // just add this line
  ->find();
foreach ($authors as $author) {
  echo $author->getFirstName();
}
```

In this example, Perpl will hydrate the `Author` objects row by row, after the `foreach` call, and reuse the memory between each iteration. The consequence is that the above code won't use more memory when the query returns 50,000 results than when it returns 5.

`ModelCriteria::FORMAT_ON_DEMAND` is one of the many formatters provided by the Query objects. You can also get a collection of associative arrays instead of objects, if you don't need any of the logic stored in your model object, by using `ModelCriteria::FORMAT_ARRAY`.

The [ModelCriteria Query API reference](/documentation/reference/model-criteria.html) describes each formatter, and how to use it.

## Perpl Instance Pool ##

Perpl keeps a list of the objects that you already retrieved in memory to avoid calling the same request twice in a PHP script. This list is called the instance pool, and is automatically populated from your past requests:

```php
<?php
// first call
$author1 = AuthorQuery::create()->findPk(1);
// Issues a SELECT query
...
// second call
$author2 = AuthorQuery::create()->findPk(1);
// Skips the SQL query and returns the existing $author1 object
```
When setting the `bulk-load` attribute to true on a [table](/documentation/reference/schema.html#table-element), `findPk()` not only maintains the requested object in the instance pool, but the whole table.

-->

---
<span class="next">[Next: Relationships &rarr;](04-relationships.html)</span>
