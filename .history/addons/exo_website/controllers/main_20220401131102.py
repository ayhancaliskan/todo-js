from odoo import http
from odoo.http import request

class WebsiteController(http.Controller):
    @http.route(["/actor"], auth="public", website=True)
    def actor_get(self, **kw):
        return request.render('exo_website.website_actor_page', {})