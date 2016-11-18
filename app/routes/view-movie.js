import Ember from 'ember';

let movieTitle = '';

export default Ember.Route.extend({

  setupController(controller, model) {
    this._super(controller, model);
    movieTitle = '';
    controller.set('movie', model);
  },

  queryParams: {
    title: {
      refreshModel: true
    }
  },

  beforeModel(transition) {
    movieTitle = transition.queryParams;
  },

  model() {
    return this.store.findQuery('specific', 'movie', movieTitle.title);
  }

});
