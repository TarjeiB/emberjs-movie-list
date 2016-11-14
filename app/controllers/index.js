import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['t'],
  t: "Star Wars",

  actions: {
    search: function(title) {
      console.log("Title: " + title);
    }
  }
});
