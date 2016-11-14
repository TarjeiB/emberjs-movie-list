import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.route('account');
  this.route('create-list');
  this.route('login');
  this.route('logout');
  this.route('movie', { path: "movie/:movie_imdbID"});
  this.route('movies');
  this.route('register');
  this.route('test');
});

export default Router;
