import Ember from 'ember';
const { getOwner } = Ember;

export default Ember.Object.extend({

  findQuery(searchType, model, query) {
    const adapter = getOwner(this).lookup('adapter:' + model);
    return adapter.query(searchType, model, query);
  }

});