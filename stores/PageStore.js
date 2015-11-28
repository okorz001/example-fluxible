var createStore = require('fluxible/addons').createStore;

var PageStore = createStore({
  storeName: 'PageStore',

  handlers: {
    'UPDATE_PAGE_TITLE': 'updatePageTitle',
  },

  initialize: function () {
    this.pageTitle = '';
  },

  updatePageTitle: function (title) {
    this.pageTitle = title;
    this.emitChange();
  },

  getPageTitle: function () {
    return this.pageTitle;
  },

  dehydrate: function () {
    return {
      pageTitle: this.pageTitle,
    };
  },

  rehydrate: function (state) {
    this.pageTitle = state.pageTitle;
  },
});

module.exports = PageStore;
