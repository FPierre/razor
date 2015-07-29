// Meteor.settings
if (typeof Meteor.settings === 'undefined') {
  Meteor.settings = {};
}

_.defaults(Meteor.settings, {
  copy: {
    consumerKey: '',
    consumerSecret: ''
  }
});

// ServiceConfiguration.configurations.upsert(
//   { service: 'copy' },
//   {
//     $set: {
//       consumerKey: Meteor.settings.copy.consumerKey,
//       consumerSecret: Meteor.settings.copy.consumerSecret
//     }
//   }
// );
