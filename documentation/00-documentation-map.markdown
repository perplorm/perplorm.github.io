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
     Defining the schema file, database, tables, columns, foreign keys.<br/>
     Building the model using the schema.xml and yaml / php / json / ini / xml configuration files<br/>
     propel sql:build<br/>
     propel model:build<br/>
     propel config:convert<br/>
     vendor/autoload.php<br/>
    </li>
    <li>03-basic-crud<br/>
     Creating new records<br/>
     Getting and setting object properties<br/>
     Query<br/>
     Updating an object<br/>
     Deleting an object<br/>
    </li>
    <li>04-relationships<br/>
     Inserting a related row<br/>
     Save cascade<br/>
     Fetch related objects and properties<br/>
     Query by object<br/>
     Use and endUse<br/>
     Many to many relationship<br/>
     Multiple primary keys<br/>
     Multiple foreign keys<br/>
     One to one relationships<br/>
     On-update and On-delete<br/>
     Performance<br/>
     Model only relationships<br/>
    </li>
    <li>05-transactions<br/>
     Simple transation<br/>
     Pre and Post hooks wrapped inside the transaction<br/>
     Nested transactions<br/>
     Performance<br/>
    </li>
    <li>06-behaviors<br/>
     Pre and Post hooks<br/>
     Bundled behaviors<br/>
     Using behaviors<br/>
     Customizing behaviors<br/>
     Writing a behavior<br/>
     Other hooks<br/>
    </li>
    <li>07-logging<br/>
     Using monolog<br/>
     Debugging database activity<br/>
     Counting queries<br/>
     Retrieve the last query<br/>
     Full query logging<br/>
     Logging more events<br/>
     Adding profiler information<br/>
     Performance<br/>
    </li>
    <li>08-inheritance<br/>
     Single table inheritance<br/>
     Using inherited objects<br/>
     Retrieving inherited objects<br/>
     Abstract entities<br/>
     Class table inheritance<br/>
     Delegation<br/>
     Multiple inheritance<br/>
     Concrete table inheritance<br/>
     Using inherited model classes<br/>
     Data replication<br/>
    </li>
    <li>09-migrations<br/>
     Migration workflow<br/>
     Migration tasks<br/>
     Migration configuration<br/>
     Migrating data<br/>
    </li>
    <li>10-configuration<br/>
     Naming conventions<br/>
     Supported formats<br/>
     Using parameters<br/>
     Precedence among configuration properties<br/>
     Internals<br/>
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
   <p>These are mostly comments about what should be changed.  If there are no comments then assume the document will only contain minor changes</p>
   <ul> <!-- proposed docs -->
    <li>01-installation</li>
    <li>02-buildtime</li>
    <li>03 basic-crud</li>
    <li>04 query</li>
    <li>05 results</li>
    <li>06 update-and-delete</li>
    <li>07 relationships<br/>
     I have never used "insert a related row", eg '$book->setAuthor($authorObject)' does anybody use this?<br/>
     I have never used "save cascade", eg '$book->setAuthor($newUnsavedAuthorObject)' does anybody use this?<br/>
     Retrieving related objects: '$authorObject->getBooks()' I use this frequently but I would include it in the Active Record reference.<br/>
     I have never used objects in a query, eg '$query->filterByAuthor($authorObject)' does anybody use this?<br/>
     Embedded query, eg use(), filterByXXX(), and endUse(), I use this frequently but I would include it in the Query reference.<br/>
     Many-to-many, save cascade and retrieving related objects, does anybody use this?<br/>
     More than two primary keys, I would include this in the Active Record reference.<br/>
     On-update and On-delete, I would include this in the Schema reference.<br/>
     Minimizing queries, I would include in the Query reference.<br/>
     Therefore this document can be removed.<br/>
    </li>
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

     


