import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),

  setupController(controller, model) {
    this._super(controller, model);
  },

  actions: {

    updateUser() {

      window.onerror = function (error) {
        controller.set('error', error.code);
        return false;
      };

      const user = this.get('firebaseApp').auth().currentUser;
      const controller = this.get('controller');
      const email = controller.get('updateEmail');
      const username = controller.get('updateUsername');
      const password = controller.get('updatePassword');
      const currentPassword = controller.get('currentPassword');
      let currentEmail;

      user.providerData.forEach(profile => {
        currentEmail = profile.email;
      });

      if (typeof currentEmail !== 'undefined' && typeof currentPassword !== 'undefined') {

        const credential = firebase.auth.EmailAuthProvider.credential(currentEmail, currentPassword);
        user.reauthenticate(credential).then(() => {

          if (typeof username !== 'undefined' && username.length > 1) {
            user.updateProfile({
              displayName: username
            }).then(() => {
              controller.set('success', '... Finished! Your account information was updated successfully.');
              controller.set('error', '');
            }, error => {
              controller.set('success', '');
              controller.set('error', error.code);
            });
          }

          if (typeof email !== 'undefined' && email.length > 1) {
            user.updateEmail(email).then(() => {
              controller.set('success', '... Finished! Your account information was updated successfully.');
              controller.set('error', '');
            }, error => {
              controller.set('success', '');
              controller.set('error', error.code);
            });
          }

          if (typeof password !== 'undefined' && password.length > 1) {
            user.updatePassword(password).then(() => {
              controller.set('success', '... Finished! Your account information was updated successfully.');
              controller.set('error', '');
            }, error => {
              controller.set('success', '');
              controller.set('error', error.code);
            });
          }

          controller.set('updateEmail', '');
          controller.set('updateUsername', '');
          controller.set('updatePassword', '');
          controller.set('currentPassword', '');

          this.refresh();

        });
      } else {
        controller.set('error', 'Error: You must provide your current password.');
      }

    }

  }
});
