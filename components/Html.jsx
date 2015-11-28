var React = require('react');

var PageStore = require('../stores/PageStore.js');

var Html = React.createClass({
  render: function() {
    return (
      <html>
      <head>
        <meta charSet="utf-8" />
        <title>{this.props.context.getStore(PageStore).getPageTitle()}</title>
      </head>
      <body>
        <section id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></section>
        <footer id="info">
          <p>Showing off <a href="http://fluxible.io">Fluxible</a></p>
        </footer>
        <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
        <script src="/public/client.js" defer></script>
      </body>
      </html>
    );
  }
});

module.exports = Html;
