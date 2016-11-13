import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.route('login');
  this.route('register');
  this.route('create-list');
  this.route('movie');
  this.route('movies');
  this.route('test');
});

export default Router;
