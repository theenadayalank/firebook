import Component from '@ember/component';

export default Component.extend({
  actions: {
    toPublish(user){
      var title=this.title;
      var body=this.body;
      this.attack(user,title,body);
    },
    toCancel(){
      this.canc();
    }
  }
});
