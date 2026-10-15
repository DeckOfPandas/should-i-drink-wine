# Should I drink wine now?

A flowchart, one question per page, big white words on near-black. Every
path ends in wine.

Jekyll, no plugins, one layout. Every page is front matter only:
a `question` and a list of `links` (`label`, `to`, optional `class`).
Add a page, point a link at it.

Where things live:

- `_sass/_palette.scss`: every colour and font. Nothing else holds a hex code.
- `assets/css/main.scss`: the styles, compiled by Jekyll's built-in Sass.
- `assets/js/main.js`: site script, loaded with `defer`. Y / N / Enter follow links.
- `_includes/head.html`: meta, favicon, stylesheet and script tags.
- `404.md`: the lost-visitor page. `palette.md`: the swatches, unlinked.

## Running it

In the container: `.devcontainer/run.sh` builds and starts it, with this
project mounted at `/workspace` and port 9001 published. Then:

    bundle exec jekyll serve --host 0.0.0.0 --port 9001

What goes into the container is `.devcontainer/kit.env`. The GitHub wrappers in
`scripts/` act only on the repositories in `scripts/github.conf`. The rules for
Claude are in `CLAUDE.md`; the hooks that enforce some of them are in
`.claude/hooks/`. `python3 -m pytest` checks the kit agrees with itself.

## Deploying

`.github/workflows/pages.yml` builds on every push to `main` and deploys to
GitHub Pages. Pages must be set to "GitHub Actions" as its source in the
repository settings. The workflow passes the right `--baseurl` itself.
