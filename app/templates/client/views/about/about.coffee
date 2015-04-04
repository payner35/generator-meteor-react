#define routes...
Router.map ->
  @route 'about',
    path:"/about"
    controller: "aboutController"

#the route controller for this view
class @aboutController extends RouteController

#template..........................
_.extend Template.about,

	rendered: ->
		console.log "about is rendered"
		return
