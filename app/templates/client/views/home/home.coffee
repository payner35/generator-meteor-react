#define routes...
Router.map ->
  @route 'home',
    path:"/"
    controller: "homeController"

#the route controller for this view
class @homeController extends RouteController

#template..........................
_.extend Template.home,

	rendered: ->
		console.log "home is rendered"
		return
