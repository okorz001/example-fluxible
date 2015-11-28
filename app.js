// TODO: not sure why this is included here
var React = require('react');
var Fluxible = require('fluxible');

var app = new Fluxible({
  component: require('./components/Site.jsx'),
});

app.registerStore(require('./stores/PageStore.js'));
app.registerStore(require('./stores/DateStore.js'));

module.exports = app;
