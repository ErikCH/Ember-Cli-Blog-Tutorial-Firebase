import Ember from 'ember';


var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {
	return window.moment(date).fromNow();
});


export default formatDate;
