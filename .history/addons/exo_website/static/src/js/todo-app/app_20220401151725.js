odoo.define('exo_wesbite.todo_app', function (require){
    "use strict";
    var Widget = require("web.Widget");
    var sAnimation = require("website.content.snippets.animation");

    var dialog = require('web.Dialog')
    var addTask = require ('exo_website_add_task');

    sAnimation.registry.todo_app = Widget.extend({
        selector: ".todo-app",

        events: {
            "submit form": "_taskAdd",
            'click'
        },

        start: function () {
            console.log('start todo');
        },

        _taskAdd: function (ev) {
            ev.preventDefault();
            var value = $('#totoapp')[0].value
            task = {
                'value': value,
                'edit': false,   //edition
                'val': false,    //validation
            };
            if (value) {
                var task = new addTask(this, task)
                task.appendTo(this.$('.list-group'))
            }else{
                dialog.alert('stop')
            }
        },
        _taskValidation: function (task) {
            console.log('validation');
        }
    });

});