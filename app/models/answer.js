import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  answerdate: DS.attr('date'),
  question: DS.belongsTo('question', {async: true})
});
