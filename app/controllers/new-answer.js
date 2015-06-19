import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var answer = this.get('model');
      answer.save();
      var controller = this;
      answer.get('question').then(function(question) {
        question.save();
        controller.transitionToRoute('question', question);
      });
    }
  }
});
