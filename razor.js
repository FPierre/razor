RemoteFile = new Mongo.Collection('remote_file');

// if (Meteor.isClient) {
//   getRequestToken = function getRequestToken(callback) {
//     Meteor.call('getRequestToken', function(error, result) {
//       console.log('getRequestToken');

//       Session.set('request_pair', result);

//       console.log("REQUEST TOKEN: " + result.token + "\nREQUEST SECRET: " + result.secret);

//       // TEST
//       // Router.go('/get_access_token');
//     });
//   }

//   getAccessToken = function getAccessToken(url_query, request_pair, callback) {
//     Meteor.call('getAccessToken', url_query, request_pair, function(error, result) {
//       console.log('getAccessToken');

//       Session.set('request_pair', null);
//       Session.set('access_pair', result);

//       console.log("ACCESS TOKEN: " + result.token + "\nACCESS TOKEN SECRET: " + result.secret);
//       console.log('Done getting Access Token!<br />\n<a href="/api_call_get_user">Make an API Call</a>');

//       // TEST
//       // Router.go('/api_call_get_path/Etudes');
//     });
//   }

//   getPath = function getPath(url_query, access_pair, callback) {
//     Meteor.call('getPath', url_query, access_pair, function(error, result) {
//       console.log('getPath');

//       console.log(result);
//     });
//   }
// }

// if (Meteor.isServer) {
//   var CopyApi = Meteor.npmRequire('copyapi');

//   CopyApi.configure({
//     consumer_key: '9s2E8oznH7CiR6Mdb1GdaTVVNfz5wpI9',
//     consumer_secret: 'awltTwND3pG9iumQcj7kqwFSjL4sUwPEJK4zPBasEVQiNzxR',
//     callback_url: 'http://localhost:3000/get_access_token',
//   });

//   Meteor.methods({
//     'getRequestToken': function getRequestToken() {
//       return Async.runSync(function(done) {
//         CopyApi.getRequestToken(function(error, request_pair, redirect_url) {
//           done(error, request_pair);
//         });
//       }).result;
//     },
//     // Third party redirects user back to this page, where we then request an access token
//     'getAccessToken': function getAccessToken(url_query, request_pair) {
//       return Async.runSync(function(done) {
//         CopyApi.getAccessToken(request_pair, url_query.oauth_verifier, function(error, access_pair) {
//           done(error, access_pair);
//         });
//       }).result;
//     },
//     'getPath': function getPath(url_query, access_pair) {
//       return Async.runSync(function(done) {
//         CopyApi.getPath(access_pair, url_query, function(error, data) {
//           done(error, data);
//         });
//       }).result;
//     }
//   });
// }
