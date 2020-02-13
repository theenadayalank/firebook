import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName : DS.attr(),
  lastName : DS.attr(),
  mobile : DS.attr(),
  address : DS.attr(),
  email : DS.attr(),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});
