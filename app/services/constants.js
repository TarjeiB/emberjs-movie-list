import Ember from 'ember';

export default Ember.Service.extend({
  isAuthenticated: sessionStorage.authenticated,
  username: sessionStorage.username
});