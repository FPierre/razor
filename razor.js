Iron.utils.debug = true;

Knowledge = new Mongo.Collection('knowledge');

Router.route('/', function() {
    this.layout('WikiLayout');
    this.render('IndexPage');
});

Router.route('/knowledge', function() {
    this.layout('WikiLayout');
    this.render('KnowledgeList', {data: {items: Knowledge.find({})}});
});

Router.route('/knowledge/:slugName', function() {
    var item = Knowledge.findOne({slugName: this.params.slugName});

    Session.set('knowledgeId', item._id);
    Session.set('knowledgeSave', true);

    this.layout('WikiLayout');
    this.render('KnowledgePage', {data: {item: item}});  
});

if (Meteor.isClient) {
    Template.KnowledgePage.helpers({
        knowledgeSaved: function() {
            return Session.get('knowledgeSave') == true && Session.get('knowledgeSaved') == 1;
        }
    });

    Template.WikiLayout.events({
        'click #hide-edit-area': function(event, template) {
            $('#edit-area').removeClass('col-sm-6').hide();
            $('#render-area').toggleClass('col-sm-6', 'col-sm-12');

            Session.set('knowledgeSave', false);
        }
    });

    Template.KnowledgePage.rendered = function() {
        if (!this.rendered) {
            var editArea = this.find('#edit-area');
            var renderArea = this.find('#render-area');
        
            $(editArea).addClass('col-sm-6');
            $(renderArea).addClass('col-sm-6');
            
            $(editArea).height($(renderArea).height()); 

            var menuItems = ''

            $('h2, h3', renderArea).each(function(index, element) {
                menuItems += '<li role="presentation"><a role="menuitem" tabindex="-1" class="' + $(element)[0].tagName.toLowerCase() + '" href="#' + element.id + '">' + $(element).text() + '</a></li>';
            });

            $('#header ul[aria-labelledby=dropdown-nav]').append(menuItems);

            Session.set('knowledgeSaved', 0);

            if (Session.get('knowledgeSave')) {
                var id = Session.get('knowledgeId');

                setInterval(function() {
                    if (editArea.value != '' && id != undefined) {
                        var count = Knowledge.update(id, {$set: {text: editArea.value}});

                        Session.set('knowledgeSaved', count);
                    }
                }, 2500);
            }

            $('#scroll-top').click(function() {
                $('body').animate({
                    scrollTop: $('#header').offset().top
                }, 'fast');

                return false;
            });

            this.rendered = true;
        }
    };

    Template.WikiLayout.rendered = function() {
        $(window).scroll(function() {
            var distanceY      = window.pageYOffset || document.documentElement.scrollTop,
                $smallElements = $('.header-wrapper, #nav');

            if (distanceY > 150) {
                $smallElements.addClass('smaller');
            }
            else {
                if ($smallElements.hasClass('smaller')) {
                    $smallElements.removeClass('smaller');
                }
            }
        });
    };
}






/*
if (Meteor.isClient) {
    Template.body.helpers({
        documents: function() {
            return Knowledge.find({});
        }
    });
}

Template.body.events({
"submit .new-task": function (event) {
  // This function is called when the new task form is submitted
  var text = event.target.text.value;

  Tasks.insert({
    text: text,
    createdAt: new Date() // current time
  });

  // Clear form
  event.target.text.value = "";

  // Prevent default form submit
  return false;
},
"change .hide-completed input": function (event) {
  Session.set("hideCompleted", event.target.checked);
}
});

Template.task.events({
"click .toggle-checked": function () {
  // Set the checked property to the opposite of its current value
  Tasks.update(this._id, {$set: {checked: ! this.checked}});
},
"click .delete": function () {
  Tasks.remove(this._id);
}
});
*/
