import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['title'],
  title: "Star Wars",

  actions: {
    search: function(title) {
      //console.log("Title: " + title);
      //this.transitionToRoute('movie', {queryParams: {title: "Matrix"}});
      return this.store.query('movie', {t: "Matrix"});
    }
  }

});
