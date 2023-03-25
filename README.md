# alessiorapini.me

Alessio Rapini's portfolio, designed with [Figma](https://www.figma.com/), built with [Gatsby](https://www.gatsbyjs.org/)!

## Getting started

These instructions will get you a copy of the project up and running on your local machine for contributions or testing purposes.

### Requirements

What things you need to run the website:

- Node.js (v19.3.0)
- GatsbyCLI
- yarn

### Setup

#### Access the project

```
$ git clone git@github.com:rub/alessiorapini.me.git
$ cd alessiorapini.me/frontend
```

#### Install frontend dependencies

```
$ yarn
```

#### Start local server

```
$ gatsby develop
```

Then visit [http://localhost:8000/](http://localhost:8000/) to see the website running.

### Deployment

Ensure to use the most recent Gatsby version.

First create a production build

```
$ gatsby build
```

Serve the production build locally

```
$ gatsby serve
```

Then deploy

```
$ yarn run deploy
```
