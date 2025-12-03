---
layout: default
title: Download ❊ Perpl ❊
---

# Download ❊ Perpl ❊ #

You can download and install ❊ Perpl ❊ via packagist or by forking the github repository <https://github.com/perplorm/perpl>.

For a full installation tutorial, check the [Installation documentation](documentation/01-installation). The following options allow you to download the Propel code and documentation.

## Composer ##

You can download ❊ Perpl ❊ using Composer. First, download the `composer.phar` file using one of the following command depending on your system:

```bash
$ curl -sS https://getcomposer.org/installer | php
# Alternatively
$ wget http://getcomposer.org/composer.phar
```

Then touch a `composer.json` file with the following content

```json
{
    "require": {
        "perplorm/perpl": ">=2.0"
    }
}
```

Then simply run `php composer.phar install` to fetch ❊ Perpl ❊ and its dependencies.

## Git ##

Clone it:

```bash
$ git clone git://github.com/perplorm/perpl.git
```

Or add it as a submodule:

```bash
$ git submodule add git://github.com/perplorm/perpl.git /path/to/perpl
```


## License ##

Copyright (c) Since 2005 Hans Lellelid, David Zuelke, Francois Zaninotto, William
Durand, Marc J. Schmidt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
