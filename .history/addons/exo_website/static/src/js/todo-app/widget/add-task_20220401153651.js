odoo.define('exo_website_add_task', function (require) {
    "use strict";
    var Widget = require("web.Widget");

    var task = Widget.extend({
      template: 'exo_website.task',
      xmlDependencies: ['/exo_website/static/src/js/todo-app/views/task.xml'],

      init: function (parent, task) {
        this._super.apply(this, arguments);
        this.arrayTask = {
            'id': 0,
            'value': value,
            'edit': false,   //edition
            'val': false,    //validation
        };
      },

      start: function () {
        this._super.apply(this, arguments);
      },
    });

    return task;
});