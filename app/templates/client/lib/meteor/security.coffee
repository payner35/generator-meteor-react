###
Filters are used in every controller to manage which roles have access to the route.
Security can and should also be controlled in server publish
###

filters =
	security_isUser: ->
    #check for a user
		if !Meteor.loggingIn() && !Meteor.user() #make sure we have a valid user
			Router.go('home') #go back home if we have a problem
		else
			this.next()
		return

	security_isAdmin: ->
    #check for an admin role
		if Meteor.user()
			if !Roles.userIsInRole Meteor.user()._id, ['admin']
				console.log "Security: No access..."
				Router.go('home') #go back home if we have a problem
			else
				this.next()
		return


	security_isContent: ->
    #chck for a content role... maybe you require a content administrator? :)
		if Meteor.user()
			if !Roles.userIsInRole Meteor.user()._id, ['content']
				console.log "Security: No access..."
				Router.go('home') #go back home if we have a problem
			else
				this.next()
		return

@filters = filters #make global var
