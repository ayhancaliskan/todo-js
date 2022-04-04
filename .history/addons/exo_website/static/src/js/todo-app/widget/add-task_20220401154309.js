odoo.define("exo_website_add_task", function (require) {
  "use strict";
  var Widget = require("web.Widget");

  var task = Widget.extend({
    template: "exo_website.task",
    xmlDependencies: ["/exo_website/static/src/js/todo-app/views/task.xml"],

    init: function (parent, value) {
      this._super.apply(this, arguments);
      this.value = value;
      this.arrayTask = [];
    },

    start: function () {
      this._super.apply(this, arguments);
      this._newTask();
    },

    _newTask: function () {
      console.log("tes");
      task = {
        id: 0,
        value: this.value,
        edit: false, //edition
        val: false, //validation
      };
      this.arrayTask.push(task);
      console.log(this.arrayTask);
    },
  });

  return task;
});
