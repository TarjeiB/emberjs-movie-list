import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    
    search: function(title) {
      this.transitionToRoute('movie', title);
    }
    
  }
});
