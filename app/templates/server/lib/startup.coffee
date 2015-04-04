if Meteor.isServer

	Meteor.startup ->
		console.log "Server Starting up..."
		#add your navigation items here...

		Navigation.remove({}) #reset the collection..

		Navigation.insert
			title: "home"
			route: "home"

		Navigation.insert
			title: "about"
			route: "about"

		return
