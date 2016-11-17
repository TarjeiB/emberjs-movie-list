import store from '../models/store';

export default {

  initialize(application) {
    application.register('store:main', store);
    application.inject('route', 'store', 'store:main');
  }

};
