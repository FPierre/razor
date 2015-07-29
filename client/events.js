// http://meteortips.com/second-meteor-tutorial/user-accounts/
Template.register.events({
  'submit form': function(event) {
    event.preventDefault();

    var email    = $('[name=email]').val(),
        password = $('[name=password]').val();

    Accounts.createUser({
      email: email,
      password: password
    },
    function(error) {
      if (error) {
        Materialize.toast(error.reason, 1000, 'rounded');
        console.log(error.reason);
      }
      else {
        Router.go('index');
      }
    });
  },
  'click .logout': function(event) {
    event.preventDefault();
    Meteor.logout();
    Router.go('login');
  }
});

Template.login.events({
  'submit form': function(event) {
    console.log('1');
    event.preventDefault();

    var email    = $('[name=email]').val(),
        password = $('[name=password]').val();

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        Materialize.toast(error.reason, 1000, 'rounded');
        console.log(error.reason);
      }
      else {
        Router.go('index');
      }
    });
  }
});

Template.index.events({
  'submit #modal-create-file form': function(event) {
    event.preventDefault();

    var name = event.target.name.value;
    var host = event.target.host.value;
    var path = event.target.path.value;

    Files.insert({
      name: name,
      host: host,
      path: path,
      createdAt: new Date()
    });

    event.target.name.value = '';
    event.target.host.value = '';
    event.target.path.value = '';
  }
});
