import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function() {
    return this.session.fetch().catch(function() {});
  },
  actions: {
      posts: function() {
        this.transitionTo('home');
      },
     profile: function() {
      this.transitionTo('profile');
     },
     about: function() {
       this.transitionTo('about');
     },
     logout: function() {
         if (window.confirm('Do you really want to logout?')) { // eslint-disable-line
           this.session.close().then(function() {
               this.transitionTo('application');
           }.bind(this));
          window.location.reload();
        } 
     }
   }
});
