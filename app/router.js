import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'});
  this.resource('question', {path: 'questions/:question_id'}, function() {
    this.resource('new-answer');
    this.resource('answers');
  });
  this.resource('new-question');
  this.route('questions');
  this.resource('answers');
  this.route('new-answer');
});
export default Router;
