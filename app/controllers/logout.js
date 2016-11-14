import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logoutUser: function () {
      sessionStorage.clear();
      window.location.reload();
      this.transitionToRoute('/');
    }
  }
});