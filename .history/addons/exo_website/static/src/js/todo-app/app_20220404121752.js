odoo.define('exo_wesbite.todo_app', function (require){
    "use strict";
    var Widget = require("web.Widget");
    var sAnimation = require("website.content.snippets.animation");

    var dialog = require('web.Dialog')
    var addTask = require ('exo_website.add_task');

    sAnimation.registry.todo_app = Widget.extend({
        selector: ".todo-app",

        events: {
            "submit form": "_taskAdd",
        },
        init: function (parent) {
            this._super.apply(this, arguments);
            // this.tasks = [];
        },

        // start: function () {
        //     console.log('start todo');
        // },

        _taskAdd: function (ev) {
            ev.preventDefault();
            var value = $('#totoapp')[0].value
            var task = {
                'id':  parseInt(_.uniqueId()),
                'value': value,
                'edit': false,   //edition
                'val': false,    //validation
            };
            if (value) {
                var item = new addTask(this, task);
                // this.tasks[item.task.id] = item;
                item.appendTo(this.$('.list-group'));
            }else{
                dialog.alert('stop')
            }
            self.parent.$('#totoapp')[0].value = ""

        },

    });

});