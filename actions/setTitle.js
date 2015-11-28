module.exports = function (context, params, done) {
  context.dispatch('UPDATE_PAGE_TITLE', params.title);
  done();
};
