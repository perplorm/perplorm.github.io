---
layout: documentation
title: The Build Time
configuration: true
---

# The Build Time #

With Perpl installed we can now begin the configuration process to connect our PHP code to our database.  We are assuming at this stage that you have a folder for this project and you have installed Perpl into this folder (using 'composer').  My project folder currently looks like this:<br/>
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

<img width="399" height="161" alt="image" src="https://github.com/user-attachments/assets/868debeb-1733-407b-a187-54c3083dd927" /><br/>
<img width="378" height="156" alt="image" src="https://github.com/user-attachments/assets/0fcea52e-71e9-46fb-a537-a74b68aae8ea" /><br/>
<img width="881" height="100" alt="image" src="https://github.com/user-attachments/assets/3aaec966-75b0-4793-b1fa-9725f71c7f65" /><br/>
<img width="725" height="110" alt="image" src="https://github.com/user-attachments/assets/80cfbba7-21dc-4488-9b9e-b6792a3b9141" /><br/>
<img width="836" height="225" alt="image" src="https://github.com/user-attachments/assets/72870969-a119-42a8-bfd7-7e411e6da049" />

My project folder now looks like this:<br/>
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

<details>
<summary>perpl.yaml</summary>
  
```yaml
perpl:
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
```

</details>

<details>
<summary>perpl.php</summary>
  
```php
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
```

</details>

<details>
<summary>perpl.json</summary>
  
```json
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
```

</details>

<details>
<summary>perpl.ini</summary>
  
```text
[perpl]
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
```

</details>

<details>
<summary>perpl.xml</summary>
  
```xml
<?xml version="1.0" encoding="ISO-8859-1" standalone="no"?>
<config>
    <perpl>
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
```

</details>



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
> Please refer to the schema reference document for a full list of column types


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

The 'init' command above performed multiple steps to build our model, however now we are going to break these down into individual steps.

### Build the SQL ###
From the schema file we can build the SQL that will create the database.  
If a previous version of the SQL output exists, use the --overwrite option to overwrite the existing file with a new one.

```bash
$ perpl sql:build --overwrite
```

> [!NOTE]
> You will only use this if you are building a new database, or a new copy of the database. 


### Build the Config script ###

We have defined the settings to connect to our database (in the perpl.php file) including; the PDO connection details, username and password. We can improve the performance of your application by converting these settings to a short PHP script that will connect to your database.  This command will read our 'propel.php' file and write 'generated-conf/config.php':

```bash
$ perpl config:convert
```

> [!NOTE]
> You only use this option if the settings to connect to the database change


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
> Never add any code of your own to the classes generated by Perpl in the `Map/` directory or the `Base/` directory; this code would be overwritten whenever the `model:build` command is executed.

> [!Warning]
> The first time a class is generated, it is necessary to refresh the 'autoload' operation.  This happens the first time you generate a set of classes, and also after you add a new table to your schema file.  Ensure your composer.json file includes this autoload entry.
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
> To refresh the 'autoload' operation you can run the command:
>
> ```bash
> $ composer dump-autoload
> ```


> [!TIP]
> You may wish to create a short script file that completes all of these tasks for you.  
>
> ```bash
> perpl sql:build --overwrite
> perpl model:build
> perpl migration:diff
> perpl migrate
> composer update --no-dev -n
> composer dump-autoload
> ```



#### Create the Database Schema ####

In the instance where you are creating a new application and you are building your database definition using a schema file, you will still need to create your own database and populate it with the defined tables.  You can use the generated SQL, or, you can have Perpl populate the database with the required tables.

Let's start by creating our database called 'bookshop' in MySQL.

```bash
$ mysqladmin -u sampleuser -p sample1 bookshop
```

Now we can have Perpl generate the tables for us:

```bash
$ perpl sql:insert
```

> [!WARNING]
> The generated `schema.sql` file will DROP any existing table before creating them, which will effectively erase your database.


<!--
LOGGING TO BE ADDED LATER

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










---
<span class="next">[Next: Basic CRUD &rarr;](03-basic-crud.html)</span>

[schema]: /documentation/reference/schema.html
[DTD]: https://github.com/propelorm/Propel2/blob/master/resources/dtd/database.dtd
[XSD]: https://github.com/propelorm/Propel2/blob/master/resources/xsd/database.xsd


<!-- 
#### Setup UTF-8 ####

If you want to save anything in UTF-8 in your database then depending on your database you have to set some extra configuration values.
-->


