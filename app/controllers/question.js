import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    delete: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },
    save: function() {
      this.set('isEditing', false);
      var question = this.get('model');
      var title = this.get('title');
      var author = this.get('author');
      var description = this.get('description');
      question.set('title', title);
      question.set('author', author);
      question.set('description', description);
      question.save()
    }
  }
});
