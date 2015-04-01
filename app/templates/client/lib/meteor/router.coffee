if Meteor.isClient

	Router.configure
		notFoundTemplate: '404'
		layoutTemplate: 'layoutFull'
		loadingTemplate: 'loading'


	Router.onBeforeAction ->
		$('body').scrollTop 0  #scroll to the top of the page on route
		this.next()
		return

