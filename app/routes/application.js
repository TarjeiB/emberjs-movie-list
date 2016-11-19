import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),

  selectedMovie: false,

  setupController(controller, model) {
    this._super(controller, model);
  },

  beforeModel: function () {
    return this.get('session').fetch().catch(() => {});
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
    },

    search(movieTitle) {
      if (movieTitle) {
        this.transitionTo('/search?title=' + movieTitle);
        this.get('controller').set('movieTitle', '');
      }
    },

  }
});
