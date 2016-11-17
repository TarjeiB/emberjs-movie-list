import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    search(title, year) {
      localStorage.title = title;
      localStorage.year = year;
      localStorage.search_type = 'title';

      // Hardcoded route
      this.transitionToRoute('movie', "id");
    }

  }
});
