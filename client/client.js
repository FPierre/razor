Template.index.helpers({
  remote_files: function () {
    return RemoteFile.find({ userId: Session.get('userId') }).fetch();
  }
});

// Meteor.startup(function() {

// });
