import DS from 'ember-data';

export default DS.RESTSerializer.extend({
 normalizeFindAllResponse(store, type, payload) {
  return {
      data: {
          id: payload.imdbID,
          type: type.modelName,
          attributes: {
              Title: payload.Title,
              Year: payload.Year,
              Rated: payload.Rated,
              Released: payload.Released,
              Runtime: payload.Runtime,
              Genre: payload.Genre,
              Director: payload.Director,
              Writer: payload.Writer,
              Actors: payload.Actors,
              Plot: payload.Plot,
              Poster: payload.Poster,
              Metascore: payload.Metascore,
              imdbRating: payload.imdbRating,
              imdbID: payload.imdbID,

             }
         }
      };
    }
});
