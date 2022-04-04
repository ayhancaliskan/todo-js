odoo.define("exo_website.actor_app", function (require) {
  "use strict";
  var Widget = require("web.Widget");
  var sAnimation = require("website.content.snippets.animation");

  //widget perso
  var ActorsTable = require("exo_website.actor_table");
  var ActorPreview = require("exo_website.actor_preview");

  sAnimation.registry.actor_app = Widget.extend({
    selector: ".app-actor",

    events: {
      "click .contact-info": "_actorPreview",
    },

    init: function (parent) {
      this.actors = []; //iniatilise un [] vide pour chopper les actors dans la fonction _actorsList
      this._super.apply(this, arguments);
    },

    start: function () {
      this._actorsList();
      this._super.apply(this, arguments);
    },

    _actorsList: function () {
      var actorsTable = new ActorsTable(this);
      this.actors = actorsTable.actors; //avant de rendre le tableau avec la liste des actors, je stock les actors dans une variable depuis init
      // console.log(this.actors);
      return actorsTable.appendTo(this.$(".left-zone"));
    },

    _actorPreview: function (ev) {
      ev.preventDefault();
      this.$(".right-zone").html("");

      var target = $(ev.target); // chop le target (btn -> balise a avec l'attribut 'data')
      var actor_id = parseInt(target.data("actor_id"), 10); // chop l'ID via l'attribut data mis dans le xml

      var actor = _.where(this.actors, { id: actor_id }); //where(undescorejs)
      // console.log("preview " + actor[0].name);

      var preview = new ActorPreview(this, actor); //instance de mon widget
      preview.appendTo(this.$(".right-zone"));
    },

  });
});
