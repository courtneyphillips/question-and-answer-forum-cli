import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})

});
