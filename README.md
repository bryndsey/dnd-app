# Dungeons and Dragons Character Guide

## Overview

This application displays some data related to character creation for the role-playing game Dungeons and Dragons.

At the moment, it only shows information about common races (e.g. Human, Elf, Halfling, etc.).

It consists of 2 main pages - a list page and a details page.
Clicking on an item on the list page navigates to the relevant details page.

## See it working

To see the app running, you have a few options:

### Visit the live site

See the latest production version running at https://bryan-dnd-app.vercel.app/

### Run it locally

Once you have pulled down the repository, you can run a development build using the following command:

```
npm run dev
```

After that, the app will usually be available at http://localhost:5173/ for dev builds.

You can also run a production build by running the following commands:

```
npm run build
npm run preview
```

After that, the app will usually be available at http://localhost:4173/ for production builds.

## Tests

You can run unit tests (made using Vitest) by running `npm run test`.

You can run end-to-end tests (made using Playwright) by running `npm run e2e`.
