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

      return Ember.$.getJSON('http://www.omdbapi.com/?t=' + query + '&y=&plot=short&r=json').then(result => {

        if (result.hasOwnProperty('Search')) {
          return result.Search.map(val => {
            return {
              id: val.imdbID,
              title: val.Title,
              year: val.Year,
              rated: val.Rated,
              released: val.Released,
              runtime: val.Runtime,
              genre: val.Genre,
              director: val.Director,
              writer: val.Writer,
              actors: val.Actors,
              plot: val.Plot,
              language: val.Language,
              country: val.Country,
              awards: val.Awards,
              poster: val.Poster,
              metascore: val.Metascore,
              imdbRating: val.imdbRating,
              imdbVotes: val.imdbVotes,
              type: val.Type,
              response: val.Response
            };
          });
        }

      });

    }

  }

});
