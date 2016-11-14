import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
      sessionStorage.clear();
      window.location.reload();
      this.transitionToRoute('/');
  }
});