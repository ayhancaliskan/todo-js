odoo.define('exo_wesbite.todo_app', function (require){
    "use strict";
    var Widget = require("web.Widget");
    var sAnimation = require("website.content.snippets.animation");

    sAnimation.registry.todo_app = Widget.extend({
        selector: "todo-app"
    });

});