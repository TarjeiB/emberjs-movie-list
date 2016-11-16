import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),

  setupController: function (controller, model) {
    this._super(controller, model);
  },

  beforeModel: function () {
    return this.get('session').fetch().catch(function () {});
  },

  actions: {

    accessDenied() {
      this.transitionTo('login');
    },

    logout() {
      const auth = this.get('firebaseApp').auth();
      auth.signOut().then(() => {
        window.location.reload(true);
      });
    }

  }
});
