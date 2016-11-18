import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  query(searchType, model, query) {
    if (searchType === 'search') {

      return Ember.$.getJSON('http://www.omdbapi.com/?s=' + query).then(result => {
        if (result.hasOwnProperty('Search')) {

          return result.Search.map(val => {
            return {
              id: val.imdbID,
              title: val.Title,
              year: val.Year,
              poster: val.Poster
            };
          });

        }
      });

    } else {
      return Ember.$.getJSON('http://www.omdbapi.com/?t=' + query + '&y=&plot=full&r=json').then(result => {
        return {
          id: result.imdbID,
          title: result.Title,
          year: result.Year,
          rated: result.Rated,
          released: result.Released,
          runtime: result.Runtime,
          genre: result.Genre,
          director: result.Director,
          writer: result.Writer,
          actors: result.Actors,
          plot: result.Plot,
          language: result.Language,
          country: result.Country,
          awards: result.Awards,
          poster: result.Poster,
          metascore: result.Metascore,
          imdbRating: result.imdbRating,
          imdbVotes: result.imdbVotes,
          type: result.Type,
          response: result.Response
        };
      });
    }

  }
});
