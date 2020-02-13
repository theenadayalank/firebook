import Controller from '@ember/controller';

export default Controller.extend({
  actions : {
    goToShowPost(user,title,body){
      var post = this.store.createRecord('post', {
        title: title,
        body: body,
        createdtime : new Date(),
        modifiedtime : new Date(),
        owner : user.get('fullName'),
      });
      post.save()
      .then(() =>{
        alert('Post Created Successfully');
        this.transitionToRoute('viewpost',post.id);
      })
      .catch((error) => {
        alert(error);
      });
    },
    cancelPosting(){
      alert('Stopped Publishing');
      this.transitionToRoute('home');
    }
  }

});
