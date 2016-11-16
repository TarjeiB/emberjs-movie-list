import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    
    search(title) {
      this.transitionToRoute('movie', title);
    }
    
  }
});
