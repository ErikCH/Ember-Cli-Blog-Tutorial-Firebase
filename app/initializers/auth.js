import Ember from 'ember';

var Ref = new window.Firebase("https://blogexample.firebaseio.com/");  


var auth = Ember.Object.extend({  
  authed: false,
  username: '',
  init: function() {
    this.authClient = new window.FirebaseSimpleLogin(Ref, function(error, twitterUser) {
      if (error) {
        alert('Authentication failed: ' + error);
      } else if (twitterUser) {
        this.set('authed', true);
	this.set('username',twitterUser.username);
      } else {
        this.set('authed', false);
      }
    }.bind(this));
  },

  logout: function() {
    this.authClient.logout();
	this.set('authed', false);
  }
});


export default {  
  name: 'Auth',

  initialize: function( container, app ) {
        app.register('auth:main', auth, {singleton: true});
        app.inject('controller', 'auth', 'auth:main');
        app.inject('route', 'auth', 'auth:main');

  }
};
