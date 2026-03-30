---
layout: post
title: ❊ Perpl ❊ 2.7 Released
author: The ❊ Perpl ❊ Team
published: true
---

Do away with the winter blues, we have some springtime news:

We have released [❊ Perpl ❊ 2.7](https://github.com/perplorm/perpl/releases/tag/v2.67.0) in March and [❊ Perpl ❊ 2.6](https://github.com/perplorm/perpl/releases/tag/v2.6.0) earlier in November. 

Also, we have a new repo! It enables you to create a Docker test environment and is avalaible under <https://github.com/perplorm/perpl-test-docker>, see also our [Announcement](https://github.com/perplorm/perpl/discussions/86) info.

We are continuously working on stabilizing, cleaning up and improving the old code while also adding fresh new stuff:

### Feature Highlights

- Support for PHP 8.5 and Symfony 8 components with Symfony 5 support removed in [PR #98](https://github.com/perplorm/perpl/pull/98) and [PR #103](https://github.com/perplorm/perpl/pull/103)
- Since [PR #83](https://github.com/perplorm/perpl/pull/83) we use fully typed column fields in objects from generated classes. This also affects the generated phpDoc blocks removing the typehint from the docblock if applicable. This behavior can be overridden by setting the newly introduced config key `generator.objectModel.typeColumnDataFields` to `false`
- Native ENUM and SET column type support for MySQL and PostgreSQL in [PR #99](https://github.com/perplorm/perpl/pull/99)
- Improving the CLI interface with more useful messaging in [PR #93](https://github.com/perplorm/perpl/pull/93)
- Adding a new CLI command `config:preview` in [PR #94](https://github.com/perplorm/perpl/pull/94)
- Disabling virtual file system in tests is now possible since [PR #88](https://github.com/perplorm/perpl/pull/88)


### Improvements and Bugfixes Highlights

- Separate templates from class code in [PR #109](https://github.com/perplorm/perpl/pull/109)
- cleanup and streamline model methods in [PR #89](https://github.com/perplorm/perpl/pull/89)
- Fixed relation type hints to reference Stub class instead of Base class in [PR #111](https://github.com/perplorm/perpl/pull/111)
- Underscore methods like [`->_if()` and `->_endif()`](https://perplorm.github.io/documentation/reference/model-criteria.html#fluid-conditions) no more silently produce wrong queries when the underscore is forgotten but throw an exception since [PR #110](https://github.com/perplorm/perpl/pull/110) and additionally types have been added to those and other conditional methods using `PropelConditionalProxy` in [PR #113](https://github.com/perplorm/perpl/pull/113)
- Fixed wrong SQL generated in queries while filtering array columns with `Criteria::CONTAINS_ALL`, `Criteria::CONTAINS_SOME` or `Criteria::CONTAINS_NONE`, see [PR #91](https://github.com/perplorm/perpl/pull/91)
- Fixed failed CI runs with some Symfony versions in [PR #87](https://github.com/perplorm/perpl/pull/87), for further information see also [this Symfony CVE](https://symfony.com/blog/cve-2025-64500-incorrect-parsing-of-path-info-can-lead-to-limited-authorization-bypass)



Compare all changes to version 2.5 under <https://github.com/perplorm/perpl/compare/v2.5.0...v2.7.0>


### Download

You can download & install ❊ Perpl ❊ via Composer. 
Please give it a try and [report any bugs](https://github.com/perplorm/perpl/issues/new)
you spot:

```json
{
  "require": {
    "perplorm/perpl": ">=2.0"
  }
}
```

Of course you can also download the zipped or tarred source code from our releases.

All releases: [github.com/perplorm/perpl/releases](https://github.com/perplorm/perpl/releases)
