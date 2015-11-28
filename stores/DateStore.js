var createStore = require('fluxible/addons').createStore;

var DateStore = createStore({
  storeName: 'DateStore',

  handlers: {
    'UPDATE_DATE': 'updateDate',
  },

  initialize: function () {
    this.date = Date();
  },

  updateDate: function () {
    this.date = Date();
    this.emitChange();
  },

  getDate: function () {
    return this.date;
  },

  dehydrate: function () {
    return {
      date: this.date,
    };
  },

  rehydrate: function (state) {
    this.date = state.date;
  },
});

module.exports = DateStore;
