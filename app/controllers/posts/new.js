import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
        save: function() {
                var title = this.get('title');
                var description= this.get('description');
                var author= this.get('auth').username;
		var date = new Date();
                if(!title.trim()) {return; } //empty string

                var post = this.store.createRecord('post', {
                        title:title,
                        description:description,
			author:author,
			date:date

                });
                this.set('title','');
                this.set('description','');
		this.set('author','');
                post.save();
                this.transitionToRoute('posts');

        }
}
});
