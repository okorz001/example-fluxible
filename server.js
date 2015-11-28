var express = require('express');
var createElement = require('fluxible-addons-react/createElementWithContext');
var executeMultiple = require('fluxible-action-utils/async/executeMultiple');
var React = require('react');
var ReactDOM = require('react-dom/server');
var serialize = require('serialize-javascript');

var app = require('./app.js');
var setTitle = require('./actions/setTitle.js');
var updateDate = require('./actions/updateDate.js');
var Html = React.createFactory(require('./components/Html.jsx'));

var server = express();
server.set('state namespace', 'App');

server.use('/public', express.static('build'));

server.use(function (req, res, next) {
  var context = app.createContext({
    req: req,
  });

  var actions = {
    setTitle: {
      action: setTitle,
      params: {
        title: 'Sweet Fluxible Demo',
      },
    },
    updateDate,
  };
  executeMultiple(context, actions, function (err) {
    if (err) {
      if (err.statusCode && err.statusCode === 404) {
        return next();
      }
      else {
        return next(err);
      }
    }

    // Serialize application state in order send to client.
    var state = 'window.App=' + serialize(app.dehydrate(context)) + ';';

    var html = ReactDOM.renderToStaticMarkup(Html({
      state: state,
      markup: ReactDOM.renderToString(createElement(context)),
      context: context.getComponentContext(),
    }));

    res.set('Content-Type', 'text/html; charset=utf-8');
    res.write('<!DOCTYPE html>');
    res.write(html);
    res.end();
  });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
