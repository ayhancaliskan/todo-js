odoo.define("exo_wesbite.todo_app", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  var sAnimation = require("website.content.snippets.animation");

  var dialog = require("web.Dialog");
  var addTask = require("exo_website.add_task");

  sAnimation.registry.todo_app = Widget.extend({
    selector: ".todo-app",

    events: {
      "submit form": "_taskAdd",
      "click .reset": "_resetTasks",
      "click .all": "_getAll",
      "click .todo": "_getTodo",
      "click .done": "_getDone",
    },

    init: function (parent) {
      this._super.apply(this, arguments);
      this.tasks = [];
    },

    // start: function () {
    //     console.log('start todo');
    // },

    _taskAdd: function (ev) {
      ev.preventDefault();
      var value = $("#totoapp")[0].value;
      var task = {
        id: parseInt(_.uniqueId()),
        value: value,
        edit: false, //edition
        val: false, //validation
      };
      if (value) {
        var item = new addTask(this, task);
        this.tasks.push(item);
        item.appendTo(this.$(".list-group"));
      } else {
        dialog.alert(this, "Stop, manque la tâche..");
      }
      this.$("#totoapp")[0].value = "";
    },
    _resetTasks: function () {
        console.log();
        $(".list-group-item").length != 0 ? $(".list-group-item").remove() :  dialog.alert(this, "Tout est clean");
        // if ($("#totoapp")[0].value) {
        //     dialog.alert(this, "Stop, manque la tâche..");
        //     $(".list-group-item").remove() //trouver la facon de destroy et non remove

    },

    // Filters
    _getAll: function () {
      $(".list-group-item").addClass("d-flex");
      $(".list-group-item").removeClass("d-none");
    },
    _getTodo: function () {
      var self = this;
      $(".list-group-item").each(function (index) {
        if (self.tasks[index].task.val) {
          $(this).addClass("d-none");
          $(this).removeClass("d-flex");
        } else {
          $(this).addClass("d-flex");
          $(this).removeClass("d-none");
        }
      });
    },
    _getDone: function () {
      var self = this;
      $(".list-group-item").each(function (index) {
        if (self.tasks[index].task.val) {
          $(this).addClass("d-flex");
          $(this).removeClass("d-none");
        } else {
          $(this).addClass("d-none");
          $(this).removeClass("d-flex");
        }
      });
    },
  });
});
