---
layout: documentation
title: Config Store Behavior
---

# Config Store Behavior #

The `config_store` behavior lets you create a reusable template that store the configuration for another behavior, which you then can load into your tables with the `config_load` behavior.

## Usage ##

In the `schema.xml`, use the `<behavior>` tag with the `name="config_store"` parameter to define your config store for each configuration you want to store. 

Let's say you want to template reusable parameters for the `archivable` behavior in your `schema.xml`. Give your config store a unique name with the `id` parameter like e.g. `id="my_archivable"`. Then define all parameters for this behaviour you want to.

```xml
<database name="my_connection_name" defaultIdMethod="native"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="http://xsd.propelorm.org/1.6/database.xsd" >
      <vendor type="mysql">
          <parameter name="Engine" value="InnoDB" />
          <parameter name="Charset" value="utf8mb4" />
          <parameter name="Collate" value="utf8mb4_unicode_ci" />
      </vendor>

      <behavior
        name="config_store"
        behavior="archivable"
        id="my_archivable"
      >
        <parameter name="log_archived_at" value="true" />
        <parameter name="archived_at_column" value="archival_date" />
        <parameter name="inherit_foreign_key_relations" value="true" />
        <parameter name="inherit_foreign_key_constraints" value="true" />
      </behavior>
```

Then load your stored configuration into any table you want. You must provide the `name="config_load"` parameter for the behavior and the id of your config store with the `ref` parameter.

```xml
<table name="book">
    <column name="id" required="true" primaryKey="true" autoIncrement="true" type="integer" />
    <column name="title" type="varchar" required="true" primaryString="true" />
    <behavior name="config_load" ref="my_archivable" />
</table>
<table name="author">
    <column name="id" required="true" primaryKey="true" autoIncrement="true" type="integer" />
    <column name="name" type="varchar" required="true" />
    <behavior name="config_load" ref="my_archivable" />
</table>
```

If you want to use a stored configuration but want one parameter to behave differently, you can overwrite it for this specific table by just respecifying the parameter:

```xml
<table name="author">
    <column name="id" required="true" primaryKey="true" autoIncrement="true" type="integer" />
    <column name="name" type="varchar" required="true" />
    <behavior name="config_load" ref="my_archivable">
        <parameter name="inherit_foreign_key_constraints" value="false" />
    </behaviour>
</table>
```
