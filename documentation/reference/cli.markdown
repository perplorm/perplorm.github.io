---
layout: documentation
title: CLI Reference
---

# CLI Reference #

You will need to execute console commands mostly during [project setup](/documentation/02-buildtime.html) and [changes](/documentation/09-migrations.html) in your database schema. Also, each time you change your Perpl [configuration](documentation/10-configuration.html), you will need to convert this file via command line into a generated configuration class. 

Console commands will also come in handy in case you want to [add/import](/documentation/cookbook/working-with-existing-databases.html) (additional) existing databases to your Perpl project, export schema data and review the exact changes during database [schema migrations](/documentation/09-migrations.html). 

Perpl uses the [Symfony Console Component](https://symfony.com/doc/current/components/console/index.html) for CLI commands.

As usual, you can see a full list of available commands simply running from your command line:

```bash
vendor/bin/perpl
```

Below you will some common applications for console commands and a reference of all available commands including their options. 



## Typical Use Cases ##

During your project lifecycle, you will most likely come across some of the following scenarios in which you have to invoke the Perpl console.

### Project Setup ###

Whenever you start over with a new Perpl project, you will either build your database model from scratch or import your model from an existing database. 

For a completely new project with an empty database, start the `init` command and Perpl will guide you interactively through the process of setting up the proper configuration, importing existing `schema.xml` files or databases and ensuring 

### Database Model Changes (Migrations) ###

Every once in a while, your project's requirements change. That will also include your data model, reflected in your database structure. Inevitably, you will finally need that extra column in your database or a whole new table. Perpl lets you easily define your database schema in a [schema.xml](schema.html) file. 

Besides the schema definitiion, a changed database model needs to be conveyed to your actual database and also be accessible via Perpl classes and methods. This is where [migrations](/documentation/09-migrations.html) come in. 

Migrations ensure Perpl recognizes changes in your schema definition and writes them back into your database and your PHP model classes and methods.

### Configuration Changes ###

Each time you change entries in your [configuration](documentation/10-configuration.html), Perpl needs to generate PHP classes to make your configuration work. After you have saved the changes in configuration file, call `config:convert` to build the configuration classes.

## Command Overview ##

The following commands are available in Perpl. Some of them have aliases which have the same name as the old Phing tasks in Propel 1.x.

|	Command	|	Alias (es)	|	Options	|	Description	|	Argument	|
|	---------------	|	---------------	|	---------------	|	---------------	|	---------------	|
|	init	|		|	Interactive selection	|	Initializes a new project	|		|
|	model:build	|	build-model	|	--mysql-engine, --schema-dir, --output-dir, --object-class, --object-stub-class, --object-multiextend-class, --query-class, --query-stub-class, --query-inheritance-class, --query-inheritance-stub-class, --tablemap-class, --pluralizer-class, --enable-identifier-quoting, --target-package, --disable-package-object-model, --disable-namespace-auto-package, --composer-dir, --loader-script-dir	|	Build the model classes based on Propel XML schemas	|		|
|	sql:build	|	build-sql	|	--mysql-engine, --schema-dir, --output-dir, --validate, --overwrite, --connection, --schema-name, --table-prefix, --composer-dir	|		|		|
|	sql:insert	|	insert-sql	|	--sql-dir, --connection	|	Run SQL scripts in directory --sql-dir (or paths.sqlDir in config), typically used to (re-)initialize database by running SQL scripts from sql:build.	|		|
|	config:convert	|	convert-conf	|	--config-dir, --output-dir, --output-file, --loader-script-dir	|	Transform the configuration to PHP code leveraging the ServiceContainer	|		|
|	migration:create	|		|	--output-dir, --schema-dir, --migration-table, --connection, --editor, --comment, --suffix	|	Create an empty migration class	|		|
|	migration:diff	|	diff	|	--output-dir, --schema-dir, --print, --override, --migration-table, --connection, --table-renaming, --editor, --skip-removed-table, --skip-tables, --disable-identifier-quoting, --comment, --suffix	|	Generate diff classes	|		|
|	migration:status	|	status	|	--output-dir, --migration-table, --connection, --last-version	|	Get migration status	|		|
|	migration:migrate	|	migrate	|	--output-dir, --migration-table, --connection, --fake, --force, --migrate-to-version	|	Execute all pending migrations	|		|
|	migration:up	|	up	|	--output-dir, --migration-table, --connection, --fake, --force	|	Execute migrations up	|		|
|	migration:down	|	down	|	--output-dir, --migration-table, --connection, --fake, --force	|	Execute migrations down	|		|
|	database:reverse	|	reverse	|	--output-dir, --database-name, --schema-name, --namespace	|	Reverse-engineer a XML schema file based on given database. Uses given `connection` as name, as dsn or your `reverse.connection` configuration in propel config as connection.	|	 connection (optional)	|
|	datadictionary:export	|	datadictionary, md	|	--output-dir, --schema-dir	|	Generate Data Dictionary files (.md)	|		|
|	graphviz:generate	|	graphviz	|	--output-dir, --schema-dir	|	Generate Graphviz files (.dot)	|		|
|	test:prepare	|		|	--vendor, --dsn, --user, --password, --exclude-database	|	Prepare the Propel test suite by building fixtures	|		|
