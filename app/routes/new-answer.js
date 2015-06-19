import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var question = this.modelFor('question');
    var answer = this.store.createRecord('answer');
    question.get('answers').then(function(answers) {
      answers.pushObject(answer);
    });
    return answer;
  }
});
