import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.controllerFor('logout').send('logoutUser');
  }
});