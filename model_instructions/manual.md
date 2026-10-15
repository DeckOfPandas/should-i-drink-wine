# Manual

Status, not history. Rewrite it when things change.

## What this is

A one-question-per-page flowchart that always ends in wine. Jekyll with no
plugins, one layout, front-matter-only pages, Sass for the palette, one small
JS file. It deploys to GitHub Pages from `.github/workflows/pages.yml` on every
push to `main`. The project kit (container, GitHub wrappers, Claude hooks and
rules, kit tests) is the same one as is-it-rhubarb-yet.

## Status

- The site builds clean and every page links to a page that exists.
- Eight kit tests fail. The same eight fail in is-it-rhubarb-yet, so they came
  with the kit: Dockerfile defaults disagree with `kit.env`, a
  `settings.local.example.json` the tests expect is absent, and the wrappers
  test expects `github.conf` to still hold the placeholder. Fix them in the kit
  once and carry the fix to both repos.
- `_config.yml` sets `url` to the Pages origin. The workflow supplies
  `--baseurl`, so leave `baseurl` empty.
- `.claude/settings.local.json` was not copied. Make a fresh one here if the
  rhubarb one holds anything you rely on.
- Playwright is on in `kit.env` and nothing here uses it. Turning it off makes
  the image smaller and the first build faster.

## To do next

- Set Pages to "GitHub Actions" in repository settings, or the workflow has
  nowhere to deploy. The first deploy then needs a push to `main` or a manual
  run of the workflow.
- Clone this repo somewhere of its own and start its container with
  `.devcontainer/run.sh`. The copy under the rhubarb project's `tmp/` has no
  remote and was only a staging area.
- Fix or delete the eight inherited kit tests.

## Worth exploring

- A guard for the flow itself: a script in `tools/` that reads every page's
  `links` and fails if any `to` points at a page that does not exist, or if any
  page cannot reach `/drink/`. The kit tests would be the place to run it.
- Share images. Pages have Open Graph tags but no image. An SVG cannot be an
  OG image, so this would be the one place a raster is justified, generated
  from the SVG favicon at build time or by hand.
- Per-link colours. The layout accepts `class` on a link and the stylesheet
  has `.jewel-<name>` for each jewel. Nothing uses it yet. One idea: colour
  the honest "No" links (driving) in ruby and everything else pink.
- A `prefers-reduced-motion` stance before any animation goes in. There is no
  animation yet, which is the right amount.

## Ideas for the flow

Each is two files and a link. All roads still lead to wine.

- Is it before noon? Yes: Is it noon somewhere? Yes: drink. No: It is. Think
  harder.
- Are you driving? Yes: Later, then. No: drink. The one honest No on the site.
- Is there wine in the house? No: Is there a shop? Yes: Go on then. No: Is
  there gin?
- Have you eaten? No: Have some wine and a cracker.
- Is it a school night? Yes: Are you the teacher? Either way: drink.
- Are you already drinking wine? Yes: Then why are you here? Keep going.
- Is someone judging you? Yes: Offer them a glass.
- Try harder as a loop: Did it work? No returns to Try harder, forever.

## What was not done for lack of time

- No link-integrity check, so a typo in a `to` is only caught by clicking.
- No test of the JS keyboard shortcuts. They were checked by reading, not
  running.
- The swatch page hard-codes its hex values in HTML, because Liquid cannot
  read Sass variables. If the palette changes, change the swatches by hand or
  move the palette to `_data/` and generate both from it.
- `tools/` is excluded in `_config.yml` but does not exist yet.
