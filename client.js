var React = require('react');
var ReactDOM = require('react-dom');
var createElement = require('fluxible-addons-react/createElementWithContext');

var app = require('./app.js');

// Serialized application state injected by the server.
var dehydratedState = window.App;

app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }

    window.context = context;
    ReactDOM.render(createElement(context), document.getElementById('app'));
});
