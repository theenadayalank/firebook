import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  createdtime: DS.attr('date'),
  modifiedtime: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  owner: DS.attr('string')
});
