---
layout: documentation
title: The Build Time
configuration: true
---

# The Build Time #

With Perpl installed we can now begin the configuration process to connect our PHP code to our database.  We are assuming at this stage that you have a folder for this project and you have installed Perpl into this folder (using 'composer').  My project folder currently looks like this:
<img width="485" height="104" alt="image" src="https://github.com/user-attachments/assets/1383d23c-37a4-4796-b163-b6534a63496c" />

We require database software to be accessible, there are six options to choose from:
* MySQL or MariaDB
* SQLite
* PostgreSQL
* Oracle
* MSSQL (via pdo-sqlsrv)
* MSSQL (via pdo-mssql)

If you have an existing database skip to the "Initialise" heading.
Create your database and generate some tables and columns.  You can make changes to these tables later, so don't worry too much about the structure.

## Initialise ##
We can now initialise our Object Relational Model (ORM) for this project.  

```bash
perpl init
```

Perpl will issue a number of prompts - for this example I have an existing database 'bookshop' that will be used to initialise the ORM:

<img width="399" height="161" alt="image" src="https://github.com/user-attachments/assets/868debeb-1733-407b-a187-54c3083dd927" />
<img width="378" height="156" alt="image" src="https://github.com/user-attachments/assets/0fcea52e-71e9-46fb-a537-a74b68aae8ea" />
<img width="881" height="100" alt="image" src="https://github.com/user-attachments/assets/3aaec966-75b0-4793-b1fa-9725f71c7f65" />
<img width="725" height="110" alt="image" src="https://github.com/user-attachments/assets/80cfbba7-21dc-4488-9b9e-b6792a3b9141" />
<img width="836" height="225" alt="image" src="https://github.com/user-attachments/assets/72870969-a119-42a8-bfd7-7e411e6da049" />

My project folder now looks like this:
<img width="485" height="234" alt="image" src="https://github.com/user-attachments/assets/b3619c2d-9349-4ba6-a42c-4d82dca04143" />

* generated-classes: this contains the Query and Object classes for each of the tables in my database
* generated-conf: this contains a php script that defines a PDO connection to the database
* generated-sql: this contains an SQL file that can be used to define my database
* propel.php: this defines the values used to connect to the database
* propel.php.dist: ignore this or delete it
* schema.xml: this is the database definition in an XML format


> [!NOTE]
> The rest of this page explains more about what happened above, and how you can repeat specific steps of the process.
> If you are comfortable with this initial configuration, you can skip to the next page.



#### The Configuration File ####

In the example above we generated a file 'propel.php' which contained the values that would allow us to connect to our database.  While I recommend the 'php' option you can use other formats such as those listed below.  In essence all we are doing is defining:
* The database product we are using
* The PDO connection string (DSN)
* The username to manage the database
* The password to be used with the username
* Optional attributes

We recommend keeping this file in the root project folder.

Below are examples of the configuration files using the different formats.

<div class="conftabs">
<ul>
<li><a href="#tabyaml">propel.yaml</a></li>
<li><a href="#tabphp">propel.php</a></li>
<li><a href="#tabjson">propel.json</a></li>
<li><a href="#tabini">propel.ini</a></li>
<li><a href="#tabxml">propel.xml</a></li>
</ul>
<div id="tabyaml">
{% highlight yaml %}
propel:
  database:
      connections:
          bookstore:
              adapter: mysql
              classname: Propel\Runtime\Connection\ConnectionWrapper
              dsn: "mysql:host=localhost;dbname=my_db_name"
              user: my_db_user
              password: s3cr3t
              attributes:
  runtime:
      defaultConnection: bookstore
      connections:
          - bookstore
  generator:
      defaultConnection: bookstore
      connections:
          - bookstore
{% endhighlight %}
</div>
<div id="tabphp">
{% highlight php %}
<?php

return [
    'propel' => [
        'database' => [
            'connections' => [
                'bookstore' => [
                    'adapter'    => 'mysql',
                    'classname'  => 'Propel\Runtime\Connection\ConnectionWrapper',
                    'dsn'        => 'mysql:host=localhost;dbname=my_db_name',
                    'user'       => 'my_db_user',
                    'password'   => 's3cr3t',
                    'attributes' => []
                ]
            ]
        ],
        'runtime' => [
            'defaultConnection' => 'bookstore',
            'connections' => ['bookstore']
        ],
        'generator' => [
            'defaultConnection' => 'bookstore',
            'connections' => ['bookstore']
        ]
    ]
];
{% endhighlight %}
</div>
<div id="tabjson">
{% highlight json %}
{
    "propel": {
        "database": {
            "connections": {
                "bookstore": {
                    "adapter": "mysql",
                    "classname": "Propel\Runtime\Connection\ConnectionWrapper",
                    "dsn": "mysql:host=localhost;dbname=my_db_name",
                    "user": "my_db_user",
                    "password": "s3cr3t",
                    "attributes": []
                }
            }
        },
        "runtime": {
            "defaultConnection": "bookstore",
            "connections": ["bookstore"]
        },
        "generator": {
            "defaultConnection": "bookstore",
            "connections": ["bookstore"]
        }
    }
}
{% endhighlight %}
</div>
<div id="tabini">
{% highlight ini %}
[propel]
;
; Database section
;
database.connections.bookstore.adapter    = mysql
database.connections.bookstore.classname  = Propel\Runtime\Connection\ConnectionWrapper
database.connections.bookstore.dsn        = mysql:host=localhost;dbname=my_db_name
database.connections.bookstore.user       = my_db_user
database.connections.bookstore.password   = s3cr3t
database.connections.bookstore.attributes =

;
; Runtime section
;
runtime.defaultConnection = bookstore
runtime.connections[0]    = bookstore

;
; Generator section
;
generator.defaultConnection = bookstore
generator.connections[0] = bookstore
{% endhighlight %}
</div>
<div id="tabxml">
{% highlight xml %}
<?xml version="1.0" encoding="ISO-8859-1" standalone="no"?>
<config>
    <propel>
        <database>
            <connections>
                <connection id="bookstore">
                    <adapter>mysql</adapter>
                    <classname>Propel\Runtime\Connection\ConnectionWrapper</classname>
                    <dsn>mysql:host=localhost;dbname=my_db_name</dsn>
                    <user>my_db_user</user>
                    <password>s3cr3t</password>
                    <attributes></attributes>
                </connection>
            </connections>
        </database>
        <runtime>
            <defaultConnection>bookstore</defaultConnection>
            <connection>bookstore</connection>
        </runtime>
        <generator>
            <defaultConnection>bookstore</defaultConnection>
            <connection>bookstore</connection>
        </generator>
    </propel>
</config>
{% endhighlight %}
</div>
</div>



## The Schema File ##

The schema file is an XML file that defines your database.  When we first initialise our application Perpl will generate this schema file for us.  However, as our applications grows and expands we will typically make additions and modifications to this schema file, and then have Perpl apply those modifications to the database.

See the reference section for a full description of all the options within the schema file.  
Following is a quick overview of the components of the schema file.

### Describing Your Database ###

There are three main XML elements to our schema file.
* database
* table
* column

The `<database>` tag is used to identify the name of the database, the ID method and optionally a PHP naming method.

```xml
<?xml version="1.0" encoding="utf-8"?>
<database name="bookshop" defaultIdMethod="native" defaultPhpNamingMethod="underscore">
  ...
</database>
```

### Tables ###

Within the `<database>` tag we can define multiple `<table>` tags:

```xml
  <table name="author" idMethod="native" phpName="Author">
    ...
  </table>
  <table name="book" idMethod="native" phpName="Book">
    ...
  </table>
  <table name="publisher" idMethod="native" phpName="Publisher">
    ...
  </table>
```

The 'table' tag identifies the name of the table, the ID method and optionally the PHP name.

### Columns ###

Within the `<table>` tags we can define multiple `<column>` tags:

```xml
    <column name="id" phpName="Id" type="INTEGER" primaryKey="true" autoIncrement="true" required="true"/>
    <column name="firstname" phpName="Firstname" type="VARCHAR" size="128"/>
    <column name="surname" phpName="Surname" type="VARCHAR" size="128"/>
    <column name="datebirth" phpName="Datebirth" type="DATE"/>
    <column name="datedeath" phpName="Datedeath" type="DATE"/>
```

Each 'column' tag identifies the name of the column, optionally the PHP name, the column type, some types require a size, and other possible attributes.

Each column also requires a `type`. These types are defined by Perpl and are not necessarily the same as those used in your database system.  The following types are all valid. For a full list refer to the reference section [schema reference][schema]
* INTEGER
* FLOAT
* CHAR (requires a SIZE)
* VARCHAR (requires a SIZE)
* DATE
* DATETIME

> [!TIP]
> If you specify a `namespace` attribute in a `<table>` tag, the generated PHP classes for this table will use this namespace.


#### Indexed Columns ####

You can define an index on a column using the `<index>` tag.

```xml
    <index>
      <index-column name="surname"/>
    </index>
```

When applied to the database an index will be defined on the named column, providing improved query performance.


#### Foreign Keys ####

You can link tables together using a `<foreign-key>` tag. Each `<foreign-key>` tag consists of one or more mappings between a local column and a foreign column.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<database name="bookstore" defaultIdMethod="native">
  <table name="book" phpName="Book">
    <column name="id" type="integer" required="true" primaryKey="true" autoIncrement="true"/>
    <column name="title" type="varchar" size="255" required="true" />
    <column name="isbn" type="varchar" size="24" required="true" phpName="ISBN"/>
    <column name="publisherid" type="integer" required="true"/>
    <column name="authorid" type="integer" required="true"/>
    <foreign-key foreignTable="publisher">
      <reference local="publisherid" foreign="id"/>
    </foreign-key>
    <foreign-key foreignTable="author">
      <reference local="authorid" foreign="id"/>
    </foreign-key>
  </table>
  <table name="author" phpName="Author">
    <column name="id" type="integer" required="true" primaryKey="true" autoIncrement="true"/>
    <column name="firstname" type="varchar" size="128" required="true"/>
    <column name="surname" type="varchar" size="128" required="true"/>
  </table>
  <table name="publisher" phpName="Publisher">
   <column name="id" type="integer" required="true" primaryKey="true" autoIncrement="true" />
   <column name="name" type="varchar" size="128" required="true" />
  </table>
</database>
```

There are many more attributes and elements available to describe a datamodel.
Propel's documentation provides a complete [reference of the schema syntax][schema]



## Building The Model ##

The 'init' command above actually performed multiple steps, but now we are going to break these steps down.

### Build the SQL ###
From the schema file we can very easily build the SQL that will create the database.  
You will only use this if you are building a new database, or a new copy of the database. 
If a previous version of the SQL output exists, use the --overwrite option to overwrite the existing file with a new one.

```bash
$ perpl sql:build --overwrite
```

### Build the Config script ###

We have defined the settings to connect to our database, the PDO connection details, username and password, however we can improve performance by converting these settings to a short PHP script that will connect to our database.  So this command will read our 'propel.php' file and write 'generated-conf/config.php':

```bash
$ perpl config:convert
```

### Build the Query and Model classes ###

The Query classes will assist us in writing database queries to retrieve records.
The Model classes will assist us in adding, reading, updating, and deleting records.

```bash
$ perpl model:build
```

Perpl will generate two Query classes for each table, a base class that will be overwritten each time this command is run, and a child class that is available for the developer to place their code in.  This child class will not be overwritten.

Similarly Perpl will generate two Model classes for each table, a base class that will be overwritten each time this command is run, and a child class that is available for the developer to place their code in.  This child class will not be overwritten.

Propel also generates one `TableMap` class for each table under the `Map/` directory. You will probably never use the map classes directly, but Propel needs them to get metadata information about the table structure at runtime.

> [!Tip]
> Never add any code of your own to the classes generated by Propel in the `Map/` directory or the `Base\` directory; this code would be lost next time you call the `model:build` command.

> [!Warning]
> After generating the classes, you have to autoload them. For example, with composer this can be achieved with:
>
> ```json
> {
>   ...
>   "autoload": {
>     "classmap": ["generated-classes/"]
>   }
> }
> ```
> 
> followed by:
>
> ```bash
> $ composer dump-autoload
> ```


<!--
You can now setup Propel with the following script:

```php
<?php

// setup the autoloading
require_once '/path/to/vendor/autoload.php';

// setup Propel
require_once '/generated-conf/config.php';
```
-->


<!--
It's also a good practice to add a logger to the service container, so that Propel
can log warnings and errors. You can do so by adding the following code to the
setup script:

```php
<?php

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$defaultLogger = new Logger('defaultLogger');
$defaultLogger->pushHandler(new StreamHandler('/var/log/propel.log', Logger::WARNING));

$serviceContainer->setLogger('defaultLogger', $defaultLogger);
```

-->


<!--
> **Tip** You may wish to write the setup code in a standalone script that is
included at the beginning of your PHP files.

Now you are ready to start using your model classes!
-->


<!--
#### Create the Database Schema ####

Now that your project is fully set up, you have to create the generated schema
in your database.

Before inserting it, you should create a database, let's say we want to call it
`bookstore`. If you are using MySQL for instance, just run:

```bash
$ mysqladmin -u root -p create bookstore
```

Then insert the SQL into your database:

```bash
$ propel sql:insert
```

You should normally have your tables created. Propel will also generate a
`generated-sql` folder containning the SQL files of your schema ; useful if you
are using a SCM, you can so compare the different versions of your schema.

Each time you will update your schema, you should run `sql:build` and `sql:insert`.

Depending on which RDBMS you are using, it may be normal to see some errors
(e.g. "unable to DROP...") when you first run this command. This is because some
databases have no way of checking to see whether a database object exists before
attempting to DROP it (MySQL is a notable exception). It is safe to disregard
these errors, and you can always run the script a second time to make sure that
the errors are no longer present.

> **Warning** The `schema.sql` file will DROP any existing table before
creating them, which will effectively erase your database.
-->



---
<span class="next">[Next: Basic CRUD &rarr;](03-basic-crud.html)</span>

[schema]: /documentation/reference/schema.html
[DTD]: https://github.com/propelorm/Propel2/blob/master/resources/dtd/database.dtd
[XSD]: https://github.com/propelorm/Propel2/blob/master/resources/xsd/database.xsd


<!-- 
#### Setup UTF-8 ####

If you want to save anything in UTF-8 in your database then depending on your database you have to set some extra configuration values.

<div class="conftabs">
<ul>
<li><a href="#tabMysql">MySQL</a></li>
<li><a href="#tabPgsql">PostgreSQL</a></li>
<li><a href="#tabSqlite">SQLite</a></li>
<li><a href="#tabMssql">MSSQL</a></li>
<li><a href="#tabOracle">Oracle</a></li>
</ul>
<div id="tabMysql">
{% highlight yaml %}
propel:
  database:
    connections:
      default:
        adapter: mysql
        settings:
          charset: utf8mb4
          queries:
            utf8: "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci, COLLATION_CONNECTION = utf8mb4_unicode_ci, COLLATION_DATABASE = utf8mb4_unicode_ci, COLLATION_SERVER = utf8mb4_unicode_ci"
{% endhighlight %}
</div>
<div id="tabPgsql">
{% highlight yaml %}
propel:
  database:
    connections:
      default:
        adapter: pgsql
        settings:
          charset: utf8
          queries:
            utf8: "SET NAMES 'UTF8'"
{% endhighlight %}
</div>
<div id="tabSqlite">
{% highlight yaml %}
propel:
  database:
    connections:
      default:
        adapter: sqlite
        settings:
          charset: utf8
{% endhighlight %}
</div>
<div id="tabMssql">
{% highlight yaml %}
propel:
  database:
    connections:
      default:
        adapter: mssql
        settings:
          charset: UTF-8
{% endhighlight %}
</div>
<div id="tabOracle">
{% highlight yaml %}
propel:
  database:
    connections:
      default:
        adapter: oracle
        settings:
          charset: UTF8
{% endhighlight %}
</div>
</div>
-->


