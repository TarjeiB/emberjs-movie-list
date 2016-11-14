import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  //host: 'http://www.omdbapi.com/?t=Inception&y=&plot=short&r=json'

buildURL: function(type, id, query) {
  console.log("Type: "+ query.t);
  var params = type.params;
  return "http://www.omdbapi.com/?t=" + "Inception" + "&y=&plot=short&r=json";
}

});
