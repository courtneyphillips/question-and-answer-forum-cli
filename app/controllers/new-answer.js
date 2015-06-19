import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var answer = this.get('model');
      var text = this.get('text');
      var date = new Date();
      answer.set('text', text);
      answer.set('answerdate', date);
      answer.save();
      var controller = this;
      debugger;
      answer.get('question').then(function(question) {
        controller.transitionToRoute('question', question);
      });
    }
  }
});
