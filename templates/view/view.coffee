#define route...
Router.map ->
  @route '<%= fileName %>',
    path:"/<%= fileName %>"
    controller: "<%= fileName %>Controller"


#the route controller for this view
class @<%= fileName %>Controller extends RouteController
  #onBeforeAction: [filters.security_isUser] decide on your access level here.
  onRun: ->
    #a nice place for any page level analytics
    this.next()
    return


#template..........................
_.extend Template.<%= fileName %>,

  rendered: ->
    #called when the dom is rendered..
    console.log "<%= fileName %> is rendered"
    return
