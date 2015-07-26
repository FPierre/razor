Template.header.rendered = function() {
  $('.button-collapse').sideNav();
  $('.modal-trigger').leanModal();
};

Template.login.rendered = function() {
  $('#email').characterCounter();
};

Template.register.rendered = function() {
  $('#email').characterCounter();
};
