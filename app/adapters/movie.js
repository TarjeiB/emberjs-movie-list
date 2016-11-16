import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  buildURL: function (type, id, params) {

    var title = localStorage.title;
    var year = localStorage.year;
    var movie_id = localStorage.movie_id;
    var search_type = localStorage.search_type;

    this.store.unloadAll('movie');

    if (search_type === 'id') {
      return "http://www.omdbapi.com/?i=" + movie_id + "&plot=short&r=json";
    } else {
      return "http://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=short&r=json";
    }

  }

});
