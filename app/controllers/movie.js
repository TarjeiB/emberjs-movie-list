import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    
    search(title, year) {
      localStorage.title = title;
      localStorage.year = year;
      localStorage.search_type = 'title';

      return this.store.findAll('movie');
      //return this.store.query('movie', {t: "Matrix"});
    }
    
  }
});
