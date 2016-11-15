import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    localStorage.movie_id = params.movie_imdbID;
    localStorage.search_type = 'id';
    return this.store.findAll('movie'); //working
    //return this.store.query('movie', {}); //emberfire error
  }
});
