import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['listComplete'],
  listComplete: false,

  actions: {
    ListComplete: function () {
      this.toggleProperty('listComplete');
    }
  },
  });
