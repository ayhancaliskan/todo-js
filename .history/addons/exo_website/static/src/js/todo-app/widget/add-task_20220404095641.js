odoo.define("exo_website.add_task", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  // var tasks = require('exo_website.add_task')
  // console.log(tasks);

  var task = Widget.extend({
    template: "exo_website.task",
    xmlDependencies: ["/exo_website/static/src/js/todo-app/views/task.xml"],
    events: {
      "click .btn-success": "_taskValidation",
    },

    init: function (parent, task) {
      this._super.apply(this, arguments);
      // this.parent = parent;

    },
    // start: function () {
    //   this._super.apply(this, arguments);
    // },


    _taskValidation: function (ev) {
      var target = $(ev.target); // chop le target (btn -> balise a avec l'attribut 'data')
      var task_id = parseInt(target.data("task_id"), 10); // chop l'ID via l'attribut data mis dans le xml
      console.log(task_id);
      // var taskCibling = _.where(this.tasks, { id: task_id });
      // console.log(taskCibling);
      // console.log(this.parent);
      // taskCibling[0].val = !taskCibling[0].val;
      // this.renderElement();
      // console.log(this);
      // console.log(taskCibling[0]);
      // console.log(taskCibling[0].val);
      // taskCibling.renderElement()
      // this.$('.list-group').renderElement()
      // console.log(taskCibling[0].val);
    },
  });

  return task;
});
