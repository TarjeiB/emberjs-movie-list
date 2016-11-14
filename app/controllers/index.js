import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function(title) {
      //console.log("Title: " + title);
      //this.transitionToRoute('movie', {queryParams: {title: "Matrix"}});
    }
  }
});
