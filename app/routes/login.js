import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),

  setupController(controller, model) {
    this._super(controller, model);
  },

  beforeModel() {
    const user = this.get('firebaseApp').auth().currentUser;
    if (user !== null) {
      this.transitionTo('/');
    }
  },

  actions: {

    loginUser() {
      const auth = this.get('firebaseApp').auth();
      const controller = this.get('controller');
      const email = controller.get('loginEmail');
      const password = controller.get('loginPassword');
      let valid = true;

      auth.signInWithEmailAndPassword(email, password).catch(error => {
        controller.set('error-login', error.code);
        valid = false;
      }).then(() => {
        if (valid) {
          window.location.reload();
          this.transitionTo('/');
          controller.set('success-login', "You've been signed in.");
        }
      });
    },

    createUser() {
      const auth = this.get('firebaseApp').auth();
      const controller = this.get('controller');
      const email = controller.get('registerEmail');
      const username = controller.get('registerUsername');
      const password = controller.get('registerPassword');

      auth.createUserWithEmailAndPassword(email, password).catch(error => {
        controller.set('error-register', error.code);
      }).then(() => {
        auth.currentUser.updateProfile({
          displayName: username
        }).then(() => {
          window.location.reload();
          this.transitionTo('/');
          controller.set('success-register', "You've been registered.");
        });
      });

    }

  }
});
