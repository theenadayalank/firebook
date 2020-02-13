import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    goToShowPost(id){
      this.transitionToRoute('viewpost',id);
    }
  }
});
