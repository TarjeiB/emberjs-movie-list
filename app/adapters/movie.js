import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  buildURL: function (modelName, id, query) {
    if (modelName === 'movie') {
      // const url = this._buildURL(modelName, query.id);
      // const title = url.replace('/movies/', '');
      return "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json";
    }
  }

});
