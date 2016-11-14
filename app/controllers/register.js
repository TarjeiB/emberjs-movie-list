import Ember from 'ember';

export default Ember.Controller.extend({

  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isValidUsername: Ember.computed.gte('username.length', 2),
  isValidPassword: Ember.computed.gte('password.length', 3),

  isValid: Ember.computed.and('isValidEmail', 'isValidUsername', 'isValidPassword'),

  actions: {
    registerUser: function () {
      const email = this.get('email');
      const username = this.get('username');
      const password = this.get('password');

      const newUser = this.store.createRecord('user', {
        email: email,
        username: username,
        password: password
      });

      newUser.save().then((response) => {
        sessionStorage.username = username;
        sessionStorage.authenticated = true;
        this.set('email', '');
        this.set('username', '');
        this.set('password', '');
        window.location.reload();
        this.transitionToRoute('/');
      });
    }
  }
});