import Ember from 'ember';

let movieTitle = '';

export default Ember.Route.extend({

  setupController(controller, model) {
    this._super(controller, model);
    movieTitle = '';
  },

  beforeModel(transition) {
    movieTitle = transition.queryParams;
  },

  actions: {

    search(movieTitle) {
      if (movieTitle) {
        this.transitionTo('/movie?title=' + movieTitle);
        this.get('controller').set('movieTitle', '');
        this.controllerFor('movie').set('searchedFor', movieTitle);
      }
    }

  }

});
