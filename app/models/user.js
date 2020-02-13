import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default Model.extend({
  firstName : attr(),
  lastName : attr(),
  mobile : attr(),
  address : attr(),
  email : attr(),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  })
});
