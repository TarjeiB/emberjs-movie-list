import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.authenticatedRoute('account');
  this.route('error', { path: '/*wildcard' });
  this.route('login');
  this.route('movie');
  this.route('search');
});

export default Router;
