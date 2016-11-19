import Ember from 'ember';

let movieTitle = '';

export default Ember.Route.extend({

  setupController(controller, model) {
    this._super(controller, model);
    movieTitle = '';
  },

  beforeModel(transition) {
    movieTitle = transition.queryParams;
  }

});
