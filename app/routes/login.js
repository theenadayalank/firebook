import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function(){
  if(this.get('session.isAuthenticated')){
    this.transitionTo('home');
    }
  },
  actions : {
    login: function() {
      var controller = this.controller;
      var email = controller.userEmail;
      controller.set('isLoading',true);
      var password = controller.userPassword;
      let _this=this;
        _this.get('session').open('firebase', {
             provider: 'password',
             email: email,
             password: password
        }).then(function() {
            controller.set('isLoading',false);
            _this.transitionTo('home');
        }).catch(function(error) {
          controller.set('isLoading',false);
          alert(error);
      });
    }
  }
});
