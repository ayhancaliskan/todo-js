odoo.define('exo_wesbite.todo_app', function (require){
    "use strict";
    var Widget = require("web.Widget");
    var sAnimation = require("website.content.snippets.animation");

    var addTask = require ('exo_website_add_task');

    sAnimation.registry.todo_app = Widget.extend({
        selector: ".todo-app",

        events: {
            "submit form": "_taskAdd",
        },

        start: function () {
            console.log('start todo');
        },

        _taskAdd: function (ev) {
            ev.preventDefault();
            var value = $('#totoapp')[0].value
            var task = new addTask(this, value)
            task.appendTo(this.$('.list-group'))
        },
        _check: function (params) {
            console.log(params);
        }
    });

});