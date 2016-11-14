import Ember from 'ember';

export default Ember.Controller.extend({

  isValidUsername: Ember.computed.gte('username.length', 2),
  isValidPassword: Ember.computed.gte('password.length', 3),

  isValid: Ember.computed.and('isValidUsername', 'isValidPassword'),

  actions: {

    loginUser: function () {
      const username = this.get('username');
      const password = this.get('password');

      window.setTimeout(function () {
        this.$(".alert").fadeIn(200);
      }, 200);

      window.setTimeout(function () {
        this.$(".alert").fadeOut(1500);
      }, 5000);

      this.store.query('user', {
        orderBy: 'username',
        equalTo: username,
      }).then((users) => {
        if (typeof users.get("firstObject") !== 'undefined' && users.get("firstObject").get('password') === password) {
          sessionStorage.username = users.get("firstObject").get('username');
          sessionStorage.authenticated = true;
          this.set('responseMessage', '');
          this.set('username', '');
          this.set('password', '');
          window.location.reload();
          this.transitionToRoute('/');
        } else {
          this.set('responseMessage', 'Wrong username or password.');
        }
      });
    }
  }
});