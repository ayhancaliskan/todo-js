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
            // 'click .btn-success': '_taskValidation'
        },
        init: function (parent) {
            this._super.apply(this, arguments);
            // this.tasks = [];
        },

        start: function () {
            console.log('start todo');
        },

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
        },

        // _taskValidation: function (ev) {
        //     var target = $(ev.target); // chop le target (btn -> balise a avec l'attribut 'data')
        //     var task_id = parseInt(target.data("task_id"), 10); // chop l'ID via l'attribut data mis dans le xml
        //     console.log(task_id);
        //     var taskCibling = _.where(this.tasks, { id: task_id })

        //     taskCibling[0].val = !taskCibling[0].val
        //     console.log(taskCibling);
        //     this.renderElement()
        //     console.log(this);
        //     // console.log(taskCibling[0]);
        //     // console.log(taskCibling[0].val);
        //     // taskCibling.renderElement()
        //     // this.$('.list-group').renderElement()
        //     // console.log(taskCibling[0].val);
        // },
    });

});