import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from 'ember-data';

export default FirebaseAdapter.extend({
});

export default DS.RESTAdapter.extend({
  host: 'http://www.omdbapi.com/?t=Star+Wars&y=2015&plot=short&r=json'
});
