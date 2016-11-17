import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('/');
  this.authenticatedRoute('account');
  this.route('create-list');
  this.route('error', { path: '/*wildcard' });
  this.route('login');
  this.route('movie', { path: "movie/:movie_imdbID"});
  this.route('movies');
});

export default Router;
