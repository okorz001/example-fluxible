# example-fluxible
![Build Status](https://travis-ci.org/okorz001/example-fluxible.svg)

This is a simple web app using Fluxible that I created as a learning exercise as
someone with little web experience. 

## Demo
http://immense-waters-3264.herokuapp.com/

## Libraries and Tools
The following libraries and tools are demonstrated in this app.

* Fluxible: For unidirectional data flow and server-side rendering.
* React: For UI components.
* Babel: For compiling React's JSX as well as ES6.
* Webpack: For invoking babel and client bundling.
* Travis CI: For free CI and CD. :smile:
* Heroku: For free hosting. :smile:

## Usage
1. Install node dependencies: `npm install`
2. Build: `webpack`
3. Run: `npm start`
4. Profit: [http://localhost:3000/](http://localhost:3000/)

For development, it is better to use a build daemon to avoid the hassle of
remembering to rebuild.

1. Install nodemon (it's not a dependency): `npm install nodemon`
2. Run: `npm run watch`
3. Profit: [http://localhost:3000/](http://localhost:3000/)

Any code changes should cause webpack to rebuild which will then cause
nodemon to restart the server.
