import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var answer = this.get('model');
      var text = this.get('text');
      answer.set('text', text);
      answer.save();
      var controller = this;
      answer.get('question').then(function(question) {
        question.save();
        controller.transitionToRoute('question', question);
      });
    }
  }
});
