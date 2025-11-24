---
layout: default
title: Contribute to Perpl
---

# How to contribute code to Perpl?

You are welcome to join us at maintaining Perpl, the still maintained and much improved fork of Propel2.


## Download the code and make changes available

The code is hosted on GitHub, contribute as with any other open source project:

- Fork the [documentation repository](https://github.com/perplorm/perpl.com) at GitHub *([But how do I fork a repository?](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo))*
- Fix things
- Push your changes back to GitHub and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request) in the documentation repository.
- Your changes will get merged, possibly after we go through a review and refinement process.

If you run into difficulties, please let us know in the [Issues](https://github.com/perplorm/perpl/issues) section of the repository.

## Running unit tests and checks locally

In order to get merged, PRs have to pass the test suite automatically run on GitHub. This includes PHPUnit tests, static analysis and checking code style of Perpl code and code of generated model and query files.

You can run these checks locally, which is faster and more convenient than running them on GitHub during development. Check the scripts section in `composer.json` for available commands.

Running the tests requires a PHP environment and access to a DBMS. Instead of installing those into your OS, you might prefer to use Docker containers, we provide container setup [here](https://github.com/perplorm/perp-test-docker).

## Provide your own tests

If you change functionality, please provide test cases to show that your changes are working as expected and to keep them from breaking by future changes. The cookbook article *[Working with Perpl's Test Suite](/documentation/cookbook/working-with-test-suite.html)* should show how your own tests are integrated into the test suite.
