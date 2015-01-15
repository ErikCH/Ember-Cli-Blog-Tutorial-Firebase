import Ember from 'ember';

export default Ember.Controller.extend({

actions: {
        save: function() {
		var d = this.get('model');
		d.set("date",new Date());
		d.save();
		this.set('isEditing', false);

        },
	del: function() {
		this.get('model').deleteRecord();
                this.transitionToRoute('posts');
		this.get('model').save();
		this.set('isEditing', false);
	},
	edit: function() {
	this.set('isEditing', true);
	}
}


});
