import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  //host: 'http://www.omdbapi.com/?t=Star+Wars&y=2015&plot=short&r=json'


buildURL: function(type,id, params) {
  //var query = {param: value};
  //var array = this.store.find('movie', query);
  //console.log("Type: "+ array);
  //var params = type.params;
  return "http://www.omdbapi.com/?t=" + "Star+Wars" + "&y=2015&plot=short&r=json";
}

});
