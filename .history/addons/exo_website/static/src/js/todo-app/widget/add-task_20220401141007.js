odoo.define('exo_website_add_task', function (require) {
    "use strict";
    var Widget = require("web.Widget");

    var task = Widget.extend({
      template: 'exo_website.actorPreview',
      xmlDependencies: ['/exo_website/static/src/js/app-actor/views/actor_preview.xml'],

    });

    return task;
});