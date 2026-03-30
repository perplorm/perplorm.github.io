---
layout: documentation
title: What's new in ❊ Perpl ❊?
---

# What's new in ❊ Perpl ❊ #

❊ Perpl ❊ is an updated Version of Propel2. It's almost completely backwards compatible to Propel2 yet has a number of improvements, bug fixes and new features. We will update the information below over time.

## Features

Some of the new and improved features below:

- Runs successfully tested with PHP 8.5 and Symfony 8 components
- Better typing & improved type-preserving in general
- Performance improvements, e.g. drastically speeding up queries in [PR #24](https://github.com/perplorm/perpl/pull/24)
- Native ENUM and SET support for MySQL and PostgreSQL
- Improved CLI experience and new commands
- Better typing in generated classes with fully typed column fields since [PR #83](https://github.com/perplorm/perpl/pull/83). This also affects the generated phpDoc blocks removing the typehint from the docblock if applicable. This behavior can be overridden by setting the newly introduced config key `generator.objectModel.typeColumnDataFields` to `false`
- Docker test environment avalaible under <https://github.com/perplorm/perp-test-docker>, see also our [Announcement](https://github.com/perplorm/perpl/discussions/86) info
- Code cleanup for better readability and maintainabilty
- Enhanced filter system for easier performing complex queries in [PR #28](https://github.com/perplorm/perpl/pull/28), [PR #33](https://github.com/perplorm/perpl/pull/33) and [PR #70](https://github.com/perplorm/perpl/pull/70)
- New and improved behaviors e.g. [`synced_table`](/documentation/behaviors/synced-table.html) [(PR #10)](https://github.com/perplorm/perpl/pull/10),  [`config_store`](/documentation/behaviors/config-store.html) [(PR #13)](https://github.com/perplorm/perpl/pull/13) and `output_group` [(PR #9)](https://github.com/perplorm/perpl/pull/9)
- Added option for importing multiple [user-contributed behaviors](/documentation/cookbook/user-contributed-behaviors.html) from the same (user) repo [(PR)](https://github.com/perplorm/perpl/pull/25)
- Underscore methods like [`->_if()` and `->_endif()`](https://perplorm.github.io/documentation/reference/model-criteria.html#fluid-conditions) no more silently produce wrong queries when the underscore is forgotten but throw an exception since [PR #110](https://github.com/perplorm/perpl/pull/110)
- Disabling virtual file system in tests is now possible since [PR #88](https://github.com/perplorm/perpl/pull/88)
- Fixed wrong SQL generated in queries while filtering array columns with `Criteria::CONTAINS_ALL`, `Criteria::CONTAINS_SOME` or `Criteria::CONTAINS_NONE`, see [PR #91](https://github.com/perplorm/perpl/pull/91)
- Fixed failed CI runs with some Symfony versions in [PR #87](https://github.com/perplorm/perpl/pull/87), for further information see also [this Symfony CVE](https://symfony.com/blog/cve-2025-64500-incorrect-parsing-of-path-info-can-lead-to-limited-authorization-bypass)
- Deprecation of some old internal methods in [PR #28](https://github.com/perplorm/perpl/pull/28)

For the (few) BC-breaking changes and more detailed information on new and updated features, please visit <https://github.com/perplorm/perpl>

## Difference to Propel2

See all [changes between ❊ Perpl ❊ and Propel2](https://github.com/propelorm/Propel2/compare/master...perplorm:perpl:main).