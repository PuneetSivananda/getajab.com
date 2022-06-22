# Preact PWA Boilerplate / Starter Kit

[Map App Demo](https://youtu.be/JJatzkPcmoI)
[![Build Status](https://travis-ci.org/gokulkrishh/preact-pwa-boilerplate.svg?branch=master)](https://travis-ci.org/gokulkrishh/preact-pwa-boilerplate)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ca11c8c5-c780-43a0-8dba-4808ed9547a0/deploy-status)](https://app.netlify.com/sites/clever-yalow-4f684d/deploys)

> **[:boom: View Demo :boom:](findmyjab.online)**


---
### Links

- Add links used for reference here

## What changes are done?

- 06/2022
  - Bring in New UI changes for card
  - TODO: Integrate Mapbox API


## What else do you want?

- [ ] - Travis with lighthouse support
- [ ] - Feel free to create issue and make this repo awesome ;)

# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Structure](#structure)
- [CSS Modules](#css-modules)
- [Handling URLS](#handling-urls)


## Installation

**1. Clone this repo:**

```sh
git clone --depth 1 https://github.com/PuneetSivananda/getajab.com.git my-app
cd my-app
```


> :information_source: This re-initializes the repo and sets up your NPM project.


**2. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**4. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**5. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
npm test
```

**6. Generate a production build in `./build`:**

```sh
npm run build
```

> You can now deploy the contents of the `build` directory to production!
>
> **[Surge.sh](https://surge.sh) Example:** `surge ./build -d my-app.surge.sh`


**5. Start local production server with `superstatic`:**

```sh
npm start
```

> This is to simulate a production (CDN) server with gzip. It just serves up the contents of `./build`.



---


## Structure

Apps are built up from simple units of functionality called Components. A Component is responsible for rendering a small part of an application, given some input data called `props`, generally passed in as attributes in JSX. A component can be as simple as:

```js
class Link extends Component {
  render({ to, children }) {
    return <a href={ to }>{ children }</a>;
  }
}
// usage:
<Link to="/">Home</Link>
```


---


## CSS Modules

This project is set up to support [CSS Modules](https://github.com/css-modules/css-modules).  By default, styles in `src/style` are **global** (not using CSS Modules) to make global declarations, imports and helpers easy to declare.  Styles in `src/components` are loaded as CSS Modules via [Webpack's css-loader](https://github.com/webpack/css-loader#css-modules).  Modular CSS namespaces class names, and when imported into JavaScript returns a mapping of canonical (unmodified) CSS classes to their local (namespaced/suffixed) counterparts.

When imported, this LESS/CSS:

```css
.redText { color:red; }
.blueText { color:blue; }
```

... returns the following map:

```js
import styles from './style.css';
console.log(styles);
// {
//   redText: 'redText_local_9gt72',
//   blueText: 'blueText_local_9gt72'
// }
```

Note that the suffix for local classNames is generated based on an md5 hash of the file. Changing the file changes the hash.


---


## Handling URLS

:information_desk_person: This project contains a basic two-page app with [URL routing](http://git.io/preact-router).

Pages are just regular components that get mounted when you navigate to a certain URL. Any URL parameters get passed to the component as `props`.

Defining what component(s) to load for a given URL is easy and declarative. You can even mix-and-match URL parameters and normal props.

```js
<Router>
  <A path="/" />
  <B path="/b" id="42" />
  <C path="/c/:id" />
</Router>
```


---

```bash 
  git subtree push --prefix api heroku master 
```

---



## License

MIT


[Preact]: https://developit.github.io/preact
[webpack]: https://webpack.github.io

