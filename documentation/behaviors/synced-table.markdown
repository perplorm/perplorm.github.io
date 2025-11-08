---
layout: documentation
title: Synced Table Behavior
---

# Synced Table Behavior #

The `synced_table` behavior is a new base behavior introduced in ❊ Perpl ❊. It's less intended for using it on it's own, but instead provide a generalization for other behaviors. Both the `archiveable` and `versionable` now use at it's base and hence inherit from `synced_table`.

It copies table declaration elements from a source table to a target table (synced table). All matching changes to the source table will be automatically applied to the synced table when building migrations or creating model files. It is a generalization of functionality from the archiveable behavior, with additional configuration options.

## Example Configuration ##

In the `schema.xml`, use the `<behavior>` tag with the `name="config_store"` parameter to define your config store for each configuration you want to store. 

Let's say you want to template reusable parameters for the `archivable` behavior in your `schema.xml`. Give your config store a unique name with the `id` parameter like e.g. `id="my_archivable"`. Then define all parameters for this behaviour you want to.

```xml
 <behavior name="synced_table">

        <!-- renames -->
        <parameter name="table_name" value="le_synced_table"/>
        <parameter name="synced_phpname" value="LeTableSyncee"/>
        <parameter name="add_pk" value="le_id"/>
        <parameter name="column_prefix" value="le_source_"/>

        <!-- ignores -->
        <parameter name="ignore_columns" value="changed_at,changed_by"/>

        <!-- additional data -->
        <parameter-list name="columns">
            <parameter-list-item>
                <parameter name="name" value="fk_to_some_table_id"/>
                <parameter name="type" value="integer"/>
            </parameter-list-item>
        </parameter-list>
        <parameter-list name="foreign_keys">
            <parameter-list-item>
                <parameter name="name" value="LeFk" />
                <parameter name="localColumn" value="fk_to_some_table_id" />
                <parameter name="foreignTable" value="some_tablet" />
                <parameter name="foreignColumn" value="id" />
                <parameter name="phpName" value="ManualFk" />
                <parameter name="refPhpName" value="ManualFk" />
            </parameter-list-item>
        </parameter-list>

    </behavior>
```

## Parameters ##

These parameters are available: | 


| Parameter | Value | Description | Default |
|--------------------------------|-----------------|-------------|-------------|
| table_name | literal | Name of the table storing synced data. Will be created if it does not exist. | Original table name with suffix _synced |
| synced_phpname | literal | Sets the name of the generated PHP model and query classes. | null (resolved to Pascal-case version of synced_table) |
| table_attributes | param-list | Schema parameters for the synced table |  |
| add_pk | literal|true | The name of the added pk column ('id' if set to true) | false |
| columns | param-list | Columns schema declaration of additional columns to be created on the synced table | [] |
| foreign_keys | param-list | Foreign key schema declarations to be declared on the synced table | [] |
| sync | true/false | Copy columns from source to synced table. | true |
| sync_indexes | true/false | Recreate indexes from the source table on the synced table. | false |
| sync_unique_as | index/unique/false | Recreate unique indexes from the source table on the synced table, either as unique index or as regular index. | false |
| sync_pk_only | true/false | Ignore all columns but the primary key columns of the source table. | false |
| ignore_columns | CSV-string | Names of columns that should not be copied to synced table. | null |
| empty_accessor_columns | CSV-string | Names of pseudo-columns that should be made available as getters/setters on the model of the synced table. Can be used | to make the source model's copyInto compatible with the synced model. | null |
| column_prefix | literal| true | Put a prefix on the copied column names. Uses the table name if set to true. | false |
| relation | param-list|true | Create a relation between synced and source primary key. If set to true, the relation will be created, but no constraints on DB level. To create a foreign key on database level, pass in an array defining the key. | null |
| inherit_foreign_key_relations | true/false | Inherit foreign key relations from the source table. Will add getters/setters on model and join methods on query class of synced table | false |
| inherit_foreign_key_constraints | true/false | Same as inherit_foreign_key_relations, but also creates foreign key constraints in the database to the referenced columns of the source table. | false  |
| on_skip_sql | ignore/inherit/omit | What to do when parent table has skipSql="true". When set to ignore, the synced table will be created as a regular table. When set to inherit, the synced table will have skipSql="true" too. When set to omit, the synced table will not be created. | omit  |

When used as base, the inhering behavior can override parameter names (for example, versionable and archiveable rename table_name to version_table and archive_table ).

>**Tip**In ❊ Perpl ❊, both the [`archivable`](/documentation/behaviors/archivable.html) as well as the [`versionable`](/documentation/behaviors/versionable.html) behavior are based on the [`synced_table`] behavior since [July 2024](https://github.com/perplorm/perpl/pull/10).
