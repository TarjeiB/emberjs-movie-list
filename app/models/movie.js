import DS from 'ember-data';

export default DS.Model.extend({
  Title: DS.attr('string'),
  Year: DS.attr('string'),
  Rated: DS.attr('string'),
  Released: DS.attr('string'),
  Runtime: DS.attr('string'),
  Genre: DS.attr('string'),
  Director: DS.attr('string'),
  Writer: DS.attr('string'),
  Actors: DS.attr('string'),
  Plot: DS.attr('string'),
  Poster: DS.attr('string'),
  Metascore: DS.attr('string'),
  imdbRating: DS.attr('string'),
  imdbID: DS.attr('string'),
});
