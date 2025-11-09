---
layout: documentation
title: What's new in ❊ Perpl ❊?
---

# What's new in ❊ Perpl ❊ #

❊ Perpl ❊ is an updated Version of Propel2. It's almost completely backwards compatible to Propel2 yet has a number of improvements, bug fixes and new features. We will update the information below over time.

## Features

Some of the new and improved features below:

- Runs successfully tested for PHP 8.4
- Improved type-preserving
- Better typing in generated classes [(WIP, see also PR #83)](https://github.com/perplorm/perpl/pull/83)
- Code cleanup for better readability and maintainabilty
- Performance improvements
- Enhanced filter system for easier performing complex queries in [PR #28](https://github.com/perplorm/perpl/pull/28), [PR #33](https://github.com/perplorm/perpl/pull/33) and [PR #70](https://github.com/perplorm/perpl/pull/70)
- New and improved behaviors e.g. [`synced_table`](/documentation/behaviors/synced-table.html) [(PR)](https://github.com/perplorm/perpl/pull/10) and [`config_store`](/documentation/behaviors/config-store.html) [(PR)](https://github.com/perplorm/perpl/pull/13) and `output_group` [(PR)](https://github.com/perplorm/perpl/pull/9)
- Added option for importing multiple [user-contributed behaviors](/documentation/cookbook/user-contributed-behaviors.html) from the same (user) repo [(PR)](https://github.com/perplorm/perpl/pull/25)
- Deprecation of some old internal methods

For the (few) BC-breaking changes and more detailed information on new and updated features, please visit <https://github.com/perplorm/perpl>

## Difference to Propel2

See all [changes between ❊ Perpl ❊ and Propel2](https://github.com/propelorm/Propel2/compare/master...mringler:perpl:main).