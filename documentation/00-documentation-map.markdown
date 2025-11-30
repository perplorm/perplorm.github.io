# Documentation Map #

Created to assist with the layout / organisation of the documentation for Perpl


## Current structure vs Proposed structure ## 

<table>
 <tr valign=top>
  <td>
   <ul> <!-- current docs -->
    <li>01-installation<br/>
     Installing Perpl, via composer or git
    </li>
    <li>02-buildtime<br/>
     Defining the schema file, database, tables, columns, foreign keys.
     Building the model using the schema.xml and yaml / php / json / ini / xml configuration files
     propel sql:build
     propel model:build
     propel config:convert
     vendor/autoload.php
    </li>
    <li>03-basic-crud<br/>
     Creating new records
     Getting and setting object properties
     Query
     Updating an object
     Deleting an object
    </li>
    <li>04-relationships<br/>
     Inserting a related row
     Save cascade
     Fetch related objects and properties
     Query by object
     Use and endUse
     Many to many relationship
     Multiple primary keys
     Multiple foreign keys
     One to one relationships
     On-update and On-delete
     Performance
     Model only relationships
    </li>
    <li>05-transactions<br/>
     Simple transation
     Pre and Post hooks wrapped inside the transaction
     Nested transactions
     Performance
    </li>
    <li>06-behaviors<br/>
     Pre and Post hooks
     Bundled behaviors
     Using behaviors
     Customizing behaviors
     Writing a behavior
     Other hooks
    </li>
    <li>07-logging<br/>
     Using monolog
     Debugging database activity
     Counting queries
     Retrieve the last query
     Full query logging
     Logging more events
     Adding profiler information
     Performance
    </li>
    <li>08-inheritance<br/>
     Single table inheritance
     Using inherited objects
     Retrieving inherited objects
     Abstract entities
     Class table inheritance
     Delegation
     Multiple inheritance
     Concrete table inheritance
     Using inherited model classes
     Data replication
    </li>
    <li>09-migrations<br/>
     Migration workflow
     Migration tasks
     Migration configuration
     Migrating data
    </li>
    <li>10-configuration<br/>
     Naming conventions
     Supported formats
     Using parameters
     Precedence among configuration properties
     Internals
    </li>
    <li>whats-new-in-perpl<br/>
     Perpl new features
    </li>
    <li>whats-new<br/>
     Propel 2 new features
    </li>
   </ul>
  </td>
  <td>
   <ul> <!-- proposed docs -->
    <li>01-installation</li>
    <li>02-buildtime</li>
    <li>03 basic-crud</li>
    <li>04 query</li>
    <li>05 results</li>
    <li>06 update-and-delete</li>
   </ul>
  </td>
 </tr>
 <tr valign=top>
  <td>
   <ul> <!-- current folders -->
    <li>Reference</li>
    <ul>
     <li>active-record</li>
     <li>compatibility-index</li>
     <li>configuration-file</li>
     <li>index</li>
     <li>model-criteria</li>
     <li>schema</li>
     <li>uuid-binary-columns</li>
    </ul>
  </td>
  <td>
   <ul> <!-- proposed folders -->
    <li>01 Reference</li>
    <ul>
     <li>0101 configuration-file</li>
     <li>0102 schema</li>
     <li>0103 query</li>
     <li>0104 active record</li>
    </ul>
   </ul>

  </td>
 </tr>
 <tr valign=top>
  <td>
   <ul>
    <li>Cookbook</li>
    <ul>
     <li>Silex</li>
     <ul>
      <li>index</li>
      <li>working-with-silex</li>
     </ul>
     <li>symfony2</li>
     <ul>
      <li>index</li>
      <li>mastering-symfony2-forms-with-propel</li>
      <li>the-symfony2-security-component-and-propel</li>
      <li>working-with-symfony2</li>
     </ul>
     <li>symfony4</li>
     <ul>
      <li>working-with-symfony4</li>
     </ul>
     <li>adding-additional-sql-files</li>
     <li>copying-persisted-ojects</li>
     <li>index</li>
     <li>multi-component-data-model</li>
     <li>namespaces</li>
     <li>replication</li>
     <li>runtime-introspection</li>
     <li>user-contributed-behaviors</li>
     <li>user-mssql-server</li>
     <li>using-sql-schemas</li>
     <li>working-with-advanced-column-types</li>
     <li>working-with-existing-databases</li>
     <li>working-with-test-suite</li>
     <li>writing-behavior</li>
    </ul>
   </ul>
   
  </td>
  <td>
   <ul>
    <li>02 Cookbook ???</li>
    <ul>
     <li>0201 PDO</li>
     <li>0202 sql</li>
     <li>0203 namespaces</li>
    </ul>
   </ul>
   
  </td>
 </tr>
 <tr valign=top>
  <td>
   
   <ul>
    <li>Behaviors</li>
    <ul>
     <li>aggregate-column</li>
     <li>archivable</li>
     <li>auto-add-pk</li>
     <li>config-store</li>
     <li>delegate</li>
     <li>i18n</li>
     <li>nested-set</li>
     <li>query-cache</li>
     <li>sluggable</li>
     <li>sortable</li>
     <li>synced-table</li>
     <li>timestampable</li>
     <li>validate</li>
     <li>versionable</li>
    </ul>
   </ul>

  </td>
  <td>
   
   <ul>
    <li>03 Behaviors</li>
    <ul>
     <li>0301 timestampable</li>
     <li>0302 sluggable</li>
    </ul>
   </ul>
   
  </td>
 </tr>
</table>

     


