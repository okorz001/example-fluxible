module.exports = function (context, payload, done) {
  context.dispatch('UPDATE_DATE');
  done();
};
