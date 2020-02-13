import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('application');
    }
  },
  model(params) {
    return this.store.findRecord('post', params.post_id);
  }
});
