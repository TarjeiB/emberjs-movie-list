import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    title: {
      refreshModel: true
    }
  },
  model: function(params) {
    //return this.store.findAll('movie'); //working
    return this.store.query('movie', {}); //emberfire error
  }
});
