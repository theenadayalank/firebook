import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page-not-found', { path: '/*path' });
  this.route('home');
  this.route('signup');
  this.route('login');
  this.route('profile');
  this.route('about');
  this.route('newpost');
  this.route('viewpost', { path: '/post/:post_id'});
  this.route('editpost', { path: '/edit/:post_id'});
});

export default Router;
