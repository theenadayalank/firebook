import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function(){
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('application');
    }
  },
  model(){
    return hash({
      use: this.store.find('user',this.get('session.currentUser.uid')),
      pos: this.store.findAll('post')
    });
  },
  actions : {
    goNewPost(){
      this.transitionTo('newpost');
    }
  }
});
