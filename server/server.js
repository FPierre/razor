Meteor.startup(function () {

});



// db.RemoteFile.insert({ name: 'c',   text: 'server/dirty/c.md',   host: 'Copy', path: 'copy/Etudes/Master 1/Semestre 2', createdAt: new Date(), userId: '' });
// db.RemoteFile.insert({ name: 'c++', text: 'server/dirty/c++.md', host: 'Copy', path: 'copy/Etudes/Master 1/Semestre 2', createdAt: new Date(), userId: '' });





// Router.route('/document/:slugName', function() {
//     // var item = Knowledge.findOne({slugName: this.params.slugName});

//     // Session.set('knowledgeId', item._id);
//     // Session.set('knowledgeSave', true);

//     this.layout('MainLayout');
//     this.render('KnowledgePage', {data: {item: item}});
// });



//     // Template.MainLayout.rendered = function() {
//     //     $(window).scroll(function() {
//     //         var distanceY      = window.pageYOffset || document.documentElement.scrollTop,
//     //             $smallElements = $('.header-wrapper, #nav');

//     //         if (distanceY > 150) {
//     //             $smallElements.addClass('smaller');
//     //         }
//     //         else {
//     //             if ($smallElements.hasClass('smaller')) {
//     //                 $smallElements.removeClass('smaller');
//     //             }
//     //         }
//     //     });
//     // };

//     // Template.KnowledgePage.helpers({
//     //     knowledgeSaved: function() {
//     //         return Session.get('knowledgeSave') == true && Session.get('knowledgeSaved') == 1;
//     //     }
//     // });

//     // Template.MainLayout.events({
//     //     'click #hide-edit-area': function(event, template) {
//     //         $('#edit-area').removeClass('col-sm-6').hide();
//     //         $('#render-area').toggleClass('col-sm-6', 'col-sm-12');

//     //         Session.set('knowledgeSave', false);
//     //     }
//     // });
