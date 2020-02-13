import Model, { attr } from '@ember-data/model';

export default Model.extend({
  title: attr('string'),
  body: attr('string'),
  createdtime: attr('date'),
  modifiedtime: attr('date', {
    defaultValue() { return new Date(); }
  }),
  owner: attr('string')
});
