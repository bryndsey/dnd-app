# Dungeons and Dragons Character Guide

## Overview

This application displays some data related to character creation for the role-playing game Dungeons and Dragons (D&D).

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

## Implementation Notes

I tried to capture many code-specific notes as comments within the code itself, but here are a few higher-level details.

### Tech stack

- Vite
- Typescript
- React
- Tanstack Router
- Tanstack Query
- Axios
- Zod
- Jotai
- Tailwind CSS
- Framer Motion
- Vitest
- Playwright
- Radix UI

### Architecture

My general approach was to focus on architectural foundations.

I am using a file structure and architecture similar to that of [bulletproof-react](https://github.com/alan2207/bulletproof-react).
A few notable aspects of this structure:

- Directories dividing the app into "features" and "core" code
- Features are broken down into directories representing different "layers" - i.e. API, Views, Models/Domain, etc.
  - Thus, each feature contains the full end-to-end code for a given set of funcitonality.

This structure is based on some concepts from things like "Clean Architecture" - namely, having different application layers and trying to manage dependencies between different layers (as well as features).

Given that this application is quite simple, the code/architecture is arguably "over-engineered", and probably violates the [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) ("You Aren't Gonna Need It") principle, but is done for the sake of demonstration and emulating what might structure might look like in a larger, more complex codebase.

### State management

Because the primary functionality of this app is to fetch and display data from an API, the state management is laregly handled by using the Tanstack Query library, which performs task like caching, retries for errors, and more.

That being said, I added a contrived "Cookies" dialog feature to demonstrate non-server state management.
It uses a combination of local component state along with data kept in local storage.

I used Jotai for its atomic state management model, which I personally like.
It also includes some convenient tools to interact with local storage which I used.

### Testing

The testing is not as comprehensive as I would normally do in a production codebase given the time constraints. I tried to cover a handful of the most important pieces of functionality and demonstrate general testing abilities.

I used a mixture of unit and end-to-end (e2e) style tests.

The unit tests that I implemented using Vitest (similar to Jest) primarily test my stateless components.
I could have also tested the stateful components by using techniques like mocking, but given time constraints I opted not to do that at the moment.

The e2e tests are written using Playwright.
Since the functionality is fairly simple in the app, the tests there are quite basic.

For both unit and e2e tests, I added a11y testing using axe-core plugins.
It covers some basic accessibility testing, but is not intended as a complete replacement for manual testing.

### Other notable details

- I'm certainly not a professional designer, but I tried to implement some basic UX patterns, including responsive layout and text size.
- Even though it's kind of superfluous, I like how the loading indicator turned out (especially if it loads for a few seconds and you can see the animation loop a few times).
- I wanted to include D&D classes in the app as well, but the data in the API was less convenient for my purposes, and ultimately it didn't feel like it would show technical details that weren't already demonstrated.
- Despite not being very familiar with it, I opted to use Tanstack Router as it seemed like it had some benefits over a tool like React Router. In retrospect, I would probably have preferred React Router though as there were some oddities with Tanstack Router.

### Known issues

- On mobile devices where the browser bar appearing/disappearing changes the height of the viewport, the cookies popover can slide away from its anchor.
  - This seems to be an issue with the Radix library I used, but I didn't have time to identify the root cause
- There is a warning in the console about the Tanstack Router `notFoundRoute` API being deprecated.
  - Ironically, the link shown in the warning leads to a 404 page on the Router docs...

## Next steps

If were to continue working on this, here are a few things I would likely focus on next:

- More comprehensive accessibility manual testing and implementation
- More comprehensive automated tests
  - For example, mocking API responses to check error and loading states
- Better encapsulate "core" code
- Add better protections to enforce limitations on inter-package dependencies
  - See [this section](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) of the bulletproof-react docs, for example
- Improve error handling - e.g. give more specific messaging for certain types of errors
- Add D&D classes
