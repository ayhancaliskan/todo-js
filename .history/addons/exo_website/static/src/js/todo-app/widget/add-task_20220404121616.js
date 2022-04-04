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
      let self = this
      self.task.val = !self.task.val;
      self.parent
      self.renderElement();
    },
    _removeTask: function () {
      this.destroy();
    },
    _editTask: function () {
      let self = this
      if (self.task.edit) {
        self.task.value = self.$(".new-task")[0].value;
        self.renderElement();
      }
      self.task.edit = !self.task.edit;
      self.renderElement();
    },
  });

  return task;
});
