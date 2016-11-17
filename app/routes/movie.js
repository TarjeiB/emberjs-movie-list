import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, model) {
    this._super(controller, model);
  },

  model: function(params) {
    if (localStorage.search_type == 'id') {
      localStorage.movie_id = params.movie_imdbID;
    }
    return this.store.findAll('movie');
  }

});
