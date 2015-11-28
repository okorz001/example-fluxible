var React = require('react');
var provideContext = require('fluxible-addons-react/provideContext');
var connectToStores = require('fluxible-addons-react/connectToStores');

var updateDate = require('../actions/updateDate.js');
var DateStore = require('../stores/DateStore.js');

var Site = React.createClass({
  contextTypes: {
    executeAction: React.PropTypes.func.isRequired,
  },

  propTypes: {
    date: React.PropTypes.string.isRequired,
  },

  _click: function() {
    this.context.executeAction(updateDate);
  },

  render: function() {
    return (
      <div>
        {this.props.date}
        <button type="button" onClick={this._click}>
          Update
        </button>
      </div>
    );
  },
});

Site = connectToStores(Site, [DateStore], function (context, props) {
  return {
    date: context.getStore(DateStore).getDate(),
  };
});

Site = provideContext(Site);

module.exports = Site;
