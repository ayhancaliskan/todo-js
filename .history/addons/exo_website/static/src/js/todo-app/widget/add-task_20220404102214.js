odoo.define("exo_website.add_task", function (require) {
  "use strict";
  var Widget = require("web.Widget");

  var task = Widget.extend({
    template: "exo_website.task",
    xmlDependencies: ["/exo_website/static/src/js/todo-app/views/task.xml"],

    events: {
      "click .btn-success": "_taskValidation",
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
      var target = $(ev.target); // chop le target (btn -> balise a avec l'attribut 'data')
      var task_id = parseInt(target.data("task_id"), 10); // chop l'ID via l'attribut data mis dans le xml
      var taskCibling = _.where(this.parent.tasks, { id: task_id });
      console.log(taskCibling);
      console.log(this.task);
      // this.task = taskCibling;
      
      // console.log(this.task[0]);
      // console.log(this.task[0].id);
      // console.log(this.task[0].val);


      // taskCibling[0].val = !taskCibling[0].val;
      // console.log(taskCibling[0].id);
      // console.log(taskCibling[0].val);


      // taskCibling[0].renderElement();
      this.renderElement();
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
