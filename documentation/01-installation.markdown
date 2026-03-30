---
layout: documentation
title: Installing ❊ Perpl ❊
---

# Installing ❊ Perpl ❊ #

❊ Perpl ❊ is available via [composer](#via-composer) (see also <https://packagist.org/packages/perplorm/perpl>), as a clone from the official [Github repository](https://github.com/perplorm/perpl) and as a "traditional" [tgz](https://github.com/perplorm/perpl/tarball/main) or [zip](https://github.com/perplorm/perpl/zipball/main) package. Whatever installation method you may choose, getting ❊ Perpl ❊ to work is pretty straightforward.

## Prerequisites ##

❊ Perpl ❊ just requires:

* [PHP 8.1](https://www.php.net/) or newer, with the DOM (libxml2) module enabled
* A supported database (MySQL, MS SQL Server, PostgreSQL, SQLite, Oracle)

Propel also uses some Symfony2 components to work properly:

* [Config](https://github.com/symfony/Config) : uses in the source code to manage and validate configuration.
* [Console](https://github.com/symfony/Console) : which manage the generators propel uses.
* [Yaml](https://github.com/symfony/Yaml)
* [Validator](https://github.com/symfony/Validator) : a way you manage validations with Propel.
* [Finder](https://github.com/symfony/Finder) : uses in the source code to manage the files.

>**Tip**❊ Perpl ❊ uses the PDO and SPL components, which are bundled and enabled by default in PHP8.

## Setup ##

### Via Composer ###

We advise you to rely on [Composer](https://getcomposer.org/) to manage your projects' dependencies. If you want to install ❊ Perpl ❊ via Composer, just create a new `composer.json` file at the root of your project's directory with the following content:

```json
{
    "require": {
        "perplorm/perpl": ">=2.0"
    }
}
```

Then you have to download Composer itself so in a terminal just type the following:

```bash
$ wget https://getcomposer.org/composer.phar
# If you haven't wget on your computer
$ curl -s https://getcomposer.org/installer | php
```

Finally, to install all your project's dependencies, type the following:

```bash
$ php composer.phar install
```

### Via Git ###

If you want, you can also setup ❊ Perpl ❊ using Git cloning the Github repository:

```bash
$ git clone git://github.com/perplorm/perpl vendor/propel
```

❊ Perpl ❊ is well unit-tested so the cloned version should be pretty stable. If you want to update ❊ Perpl ❊, just go to the repository and pull the remote:

```bash
$ cd myproject/vendor/propel
$ git pull
```

> **Tip**For compatibility reasons, the vendor folder is still vendor/propel

## ❊ Perpl ❊ Directory Structure ##

The root directory of the ❊ Perpl ❊ library includes the following folders:

|Folders        |Explanations
|---------------|----------------------------------------------------------------------
|bin            |Contains scripts that manage the ❊ Perpl ❊ command line tool (depending of your operating system)
|resources      |Contains some files such as the database XSD or DTD
|src            |The ❊ Perpl ❊ source code. Pass over if you just want to use Propel, not to contribute.
|templates      |Well, templates. ❊ Perpl ❊ makes have use of templating.
|tests          |❊ Perpl ❊ unit tests. Ignore this if you don't want to contribute to Propel.

## Testing ❊ Perpl ❊ Installation ##

The ❊ Perpl ❊ generator component bundles a `perpl` sh script (and a `perpl.bat` script for Windows). This script makes it easy to execute build commands. The legacy `propel` versions are also available. You can test this component is properly installed by calling the `perpl` script from the CLI:

```bash
$ cd myproject
$ vendor/bin/perpl
```

The command should output the ❊ Perpl ❊ version following by a list of the options and the available commands. We will learn to use these commands later.

> **Tip**In order to allow an easier execution of the script, you can also add the
> perpl generator's `bin/` directory to your PATH, or create a symlink. For
> example:
>
> ```bash
> $ cd myproject
> $ ln -s vendor/bin/perpl perpl
> ```
>
> Or simply edit your .bashrc or .zshrc file:
>
> ```bash
> export PATH=$PATH:/path/to/vendor/bin/
> ```
>
> On Windows you could set the PATH for the opened command with:
>
> ```
> set PATH=%PATH%;C:/path/to/vendor/bin/
> ```
>
> To globally define the PATH adjust it inside the "Environment Variables", which
> you can find in your system advanced settings panel.

At this point, ❊ Perpl ❊ should be setup and ready to use. You can follow the steps in the [Build Guide](02-buildtime.html) to try it out.

## Troubleshooting ##

### Getting Help ###

If you can't manage to install ❊ Perpl ❊, don't hesitate to ask for help. See
[Support](../support.html) for details on getting help.

---
<span class="next">[Next: Building a project &rarr;](02-buildtime.html)</span>
