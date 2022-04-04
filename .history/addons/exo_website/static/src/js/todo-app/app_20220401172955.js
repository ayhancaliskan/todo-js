odoo.define('exo_wesbite.todo_app', function (require){
    "use strict";
    var Widget = require("web.Widget");
    var sAnimation = require("website.content.snippets.animation");

    var dialog = require('web.Dialog')
    var addTask = require ('exo_website_add_task');
    var cpt = 0   //pas propre car le cpt est déclaré manuellement. L'id est normalement géré par la DB

    sAnimation.registry.todo_app = Widget.extend({
        selector: ".todo-app",

        events: {
            "submit form": "_taskAdd",
            'click .btn-success': '_taskValidation'
        },
        init: function (parent) {
            this._super.apply(this, arguments);
            this.tasks = [];
        },

        start: function () {
            console.log('start todo');
        },

        _taskAdd: function (ev) {
            ev.preventDefault();
            var value = $('#totoapp')[0].value
            var task = {
                'id': cpt,
                'value': value,
                'edit': false,   //edition
                'val': false,    //validation
            };
            cpt++
            if (value) {
                var item = new addTask(this, task);
                this.tasks.push(item.task);
                item.appendTo(this.$('.list-group'));
            }else{
                dialog.alert('stop')
            }
        },

        _taskValidation: function (ev) {
            var target = $(ev.target); // chop le target (btn -> balise a avec l'attribut 'data')
            var task_id = parseInt(target.data("task_id"), 10); // chop l'ID via l'attribut data mis dans le xml
            var taskCibling = _.where(this.tasks, { id: task_id })

            taskCibling[0].val = !taskCibling[0].val
            // this.taskCibling.renderE/lement()
            console.log(taskCibling[0].val);
        },

        // refresh: function() {
        //     this.tasks.renderElement();
        // },
    });

});