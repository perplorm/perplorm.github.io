---
layout: default
title: Contribute to the Perpl documentation
---

# How to contribute to the Perpl documentation?

The Perpl documentation is built from text files written in [Markdown](https://www.markdownguide.org/) syntax. They are automatically turned into HTML with [Jekyll](https://jekyllrb.com/) through [GitHub Pages](https://docs.github.com/en/pages).

Help improve the documentation by updating the markdown files.

## Download the code and make changes available

The documentation code is hosted on GitHub, contribute as with any other open source project:

- Fork the [documentation repository](https://github.com/perplorm/perplorm.github.com) at GitHub *([But how do I fork a repository?](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo))*
- Fix things
- Push your changes back to GitHub and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request) in the documentation repository.
- Your changes will get merged, possibly after we go through a review and refinement process.

If you run into difficulties, please let us know in the [Issues](https://github.com/perplorm/perplorm.github.io/issues) section of the repository.

## Improve the documentation

First, find the `.markdown` file that matches the documentation page you want to update. Usually, it will be inside the `src/documentation/` directory.

And then edit away! There are markdown cheat sheets like [this one](https://www.markdownguide.org/cheat-sheet/) to get a quick reference over the markup constructs. Editors like VS Code use plugins to help you work with Markdown files, particularly a preview display will give you immediate feedback wether you are doing it right.

To add new pages to the navigation, register them in `_config.yml`. 

Current goals for the documentation include:
- use precise and formal language
- improve structure inside pages and as a document overall
- separate technical documentation (which should be comprehensive and compact) from tutorials (which should be focused on the current task)
- remove information that is outdated, irrelevant, not directly related to Perpl, takes up too much space compared to importance, or is explained better somewhere else


## Compiling HTML files locally

>**Tip**
Unless you work on page layout or style, there is little benefit in running the build chain locally. Editors like VS Code show simple markdown preview through plugins, which offers a faster and more convenient alternative.  

Markdown files are turned into HTML by Jekyll, which is written in Ruby. Check the [Jekyll Quickstart Instructions](http://jekyllrb.com/docs/) on how to get it set up on your system.

Alternatively, you can build and serve the files through a Docker container using the Docker Compose file contained in the repository.

Start the container from inside the project folder by running:

```bash
docker compose -f ./docker-composer.yml up
```
or for rootless mode:
```bash
JEKYLL_ROOTLESS=1 docker compose -f ./docker-composer.yml up
```

When the container is up, it builds the project and makes it available at [http://localhost:4000](http://localhost:4000). A rebuilt is triggered when files change, but it takes a few seconds.
