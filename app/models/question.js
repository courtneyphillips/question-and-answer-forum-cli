import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  answers: DS.hasMany('answer', {async: true})
});
