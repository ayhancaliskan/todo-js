odoo.define("exo_website.add_task", function (require) {
  "use strict";
  var Widget = require("web.Widget");

  var task = Widget.extend({
    template: "exo_website.task",
    xmlDependencies: ["/exo_website/static/src/js/todo-app/views/task.xml"],

    events: {
      "click .validate": "_taskValidation",
      "click .btn-danger": "_removeTask",
      "click .btn-primary": "_editTask",
    },

    init: function (parent, task) {
      this._super.apply(this, arguments);
      this.task = task;
      this.id = task.id;
      this.parent = parent;
    },

    // start: function () {
    //   this._super.apply(this, arguments);
    // },

    _taskValidation: function (ev) {
      this.task.val = !this.task.val;
      console.log(this.task);
      this.renderElement();
    },
    _removeTask: function () {
      this.destroy();
    },
    _editTask: function () {
      console.log("task edit ..");
      this.task.edit = !this.task.edit;
      this.renderElement();
      // if (this.task.value) {
      //   this.task.val = this.$(".new-task")[0].value;
      //   this.renderElement();
      // }
    },
  });

  return task;
});
