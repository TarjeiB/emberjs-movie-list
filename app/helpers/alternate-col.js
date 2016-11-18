export default Ember.Helper.helper(index => {

  if (index % 2 === 0) {
    return 1;
  } else {
    return 0;
  }

});