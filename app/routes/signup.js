import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  firebaseApp: service(),
  beforeModel(){
    if(this.get('session.isAuthenticated')){
    this.transitionTo('home');
    }
  },

  actions: {
    createUser() {
      var controller = this.controller;
      controller.set('isLoading', true);

      var firstName = controller.firstName;
      var lastName = controller.lastName;
      var mobile = controller.mobile;
      var address = controller.address;
      var email = controller.email;
      var password = controller.password;

      const route = this;
      const auth = route.firebaseApp.auth();

      auth.createUserWithEmailAndPassword(email, password).then((userData) => {
        //Creating Record after signing up
        var user = this.store.createRecord('user', {
          id: userData.uid,
          firstName: firstName,
          lastName: lastName,
          mobile : mobile,
          address : address,
          email: email,
        });
        user.save()
        .then(() =>{
          controller.set('isLoading', false);
          alert('Data Saved Successfully');
        });

        route.session.open('firebase', {
          provider: 'password',
          email: email,
          password: password,
        }).then(() => {
          controller.set('isLoading', false);
          alert('User Created Successfully')
          route.transitionTo('home'); // FIXME
        });

        }, (errorResponse) => {
        controller.set('isLoading', false);
        alert(errorResponse.message);
      });
    }
  }
});
