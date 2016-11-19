import Ember from 'ember';

let movieTitle = '';

export default Ember.Route.extend({

  setupController(controller, model) {
    this._super(controller, model);
    movieTitle = '';
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
    return this.store.findQuery('search', 'movie', movieTitle.title);
  },

  actions: {

    selectMovie(movieTitle) {
      this.transitionTo('/movie?title=' + movieTitle);
    }

  }

});
