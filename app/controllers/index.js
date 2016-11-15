import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function(title, year) {
      localStorage.title = title;
      localStorage.year = year;
      localStorage.search_type = 'title';

      // TODO: Search for movie, display at movie/imdbID

      // Hardcoded route
      this.transitionToRoute('movie', "tt2488496");
    }
  }
});
