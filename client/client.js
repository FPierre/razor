Template.index.helpers({
  files: function() {
    return Files.find({}, { sort: { createdAt: -1 }});
    // return File.find({ userId: Session.get('userId') }).fetch();
  }
});
