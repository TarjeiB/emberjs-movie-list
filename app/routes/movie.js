import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, model) {
    this._super(controller, model);
  },

  model: function (params) {
    return this.store.query('movie', params.movie_imdbID);
  }
  
});
