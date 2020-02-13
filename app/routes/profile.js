import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('application');
    }
  },
  model(){
    return this.store.find('user',this.get('session.currentUser.uid'));
  }
});
