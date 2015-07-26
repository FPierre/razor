Iron.utils.debug = true;

Router.configure({
  layoutTemplate: 'razor'
});

Router.route('/', function() {
  this.render('index');
});

Router.route('/settings');
// Router.route('/register');
// Router.route('/login');

Router.route('/sheets/:id', function() {
  var sheet = 'meteor';

  this.render('sheet', { data: { sheet: sheet }});
});

Router.route('/get_request_token', function() {
  console.log('routes.js /get_request_token');

  getRequestToken();
});

Router.route('/get_access_token', function() {
  console.log('routes.js /get_access_token');

  getAccessToken(this.params.query, Session.get('request_pair'));
});

Router.route('/api_call_get_path/:path', function() {
  console.log('routes.js /api_call_get_path/:path');
  // /(.*)
  getPath(this.params.path, Session.get('access_pair'));
});
