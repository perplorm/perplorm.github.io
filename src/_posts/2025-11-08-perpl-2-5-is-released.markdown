---
layout: post
title: ❊ Perpl ❊ 2.5 Released
author: The ❊ Perpl ❊ Team
published: true
---

❊ Perpl ❊ has a new release!

We have released [❊ Perpl ❊ 2.5](https://github.com/perplorm/perpl/releases/tag/v2.5.0). 

Also, we have decided to move the ❊ Perpl ❊ repository to its own organisation, <https://github.com/perplorm/>. This website had already been moved to the new organisation, now we are making it official with the main repository!


### Features

We are continuously working on stabilizing, cleaning up and improving the old code:

- Further refined filter system in [PR #28](https://github.com/perplorm/perpl/pull/28), [PR #33](https://github.com/perplorm/perpl/pull/33) and [PR #70](https://github.com/perplorm/perpl/pull/70)
- Better handling of DateTime objects and the timestampable behavior
- Better code testability
- And as always: various bugfixes & code cleanup
- _Preview:_ there is [WIP](https://github.com/perplorm/perpl/pull/83) for better typing in generated classes

Compare all changes to the previous release under <https://github.com/perplorm/perpl/compare/v2.4.0...v2.5.0>

### Documentation

To reflect the continuous progress in ❊ Perpl ❊, this documentation has also been updated:

- Added update-info time stamps on each page of the documentation (main headline and footer) so you will always know, when a particular documentation page has been last updated!
- Added a ❊ new ❊ indicator for newly added pages
- Documented the new [`synced_table`](/documentation/behaviors/synced-table.html) behavior from [PR #10](https://github.com/perplorm/perpl/pull/10)
- Documented the new [`config_store`](/documentation/behaviors/config-store.html) behavior from [PR #13](https://github.com/perplorm/perpl/pull/13)
- Documented of the new `bulk-load` [table attribute](/documentation/reference/schema.html#table-element) from [PR #15](https://github.com/perplorm/perpl/pull/15)
- Added a note on the new option to use multiple [user-contributed behaviors](/documentation/cookbook/user-contributed-behaviors.html) from the same Github repo
- Finally fixed the active link indication of the page you are currently visiting after 12 years (\*lol\*)
- Replaced and fixed a lot of dead, old and http-only links
- Introduced a site-wide dark mode!
- Changed the whole color scheme to purplish hues to visually reflect the difference to the old Propel homepage
- Added conditional splitting of blog post previews to better handle & separate long and short posts on the blog page
- Replaced some old libraries
- Replaced the old table join chart with a more clean and legible inline version
- Fixed multiple typos

### Download

You can download ❊ Perpl ❊ via Composer. 
Please give it a try and [report any bugs](https://github.com/perplorm/perpl/issues/new)
you spot:

```json
{
  "require": {
    "perplorm/perpl": ">=2.0"
  }
}
```


All releases: [github.com/perplorm/perpl/releases](https://github.com/perplorm/perpl/releases)
