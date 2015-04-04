'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the good ' + chalk.red('MeteorReact') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.mkdir("config");
      this.mkdir("client");
      this.mkdir("client/lib");
      this.mkdir("client/lib/layout");
      this.mkdir("client/lib/meteor");
      this.mkdir("client/lib/compatibility");
      this.mkdir("client/lib/meteor");
      this.mkdir("client/views");
      this.mkdir("client/views/404");
      this.mkdir("client/views/loading");
      this.mkdir("client/views/home");
      this.mkdir("client/views/about");
      this.mkdir("client/components");
      this.mkdir("client/components/topnav");
      this.mkdir("collections");
      this.mkdir("collections/modals");
      this.mkdir("server");
      this.mkdir("server/lib");
      this.mkdir("server/modules");
      this.mkdir("server/publish");
    },

    projectfiles: function () {
      this.copy('startup.sh', 'startup.sh');
      this.copy('config/settings.json', 'config/settings.json');
      this.copy('client/lib/layout/layoutFull.html', 'client/lib/layout/layoutFull.html');
      this.copy('client/lib/meteor/router.coffee', 'client/lib/meteor/router.coffee');
      this.copy('client/lib/meteor/security.coffee', 'client/lib/meteor/security.coffee');
      this.copy('client/lib/meteor/startup.coffee', 'client/lib/meteor/startup.coffee');
      this.copy('client/views/404/404.html', 'client/views/404/404.html');
      this.copy('client/views/loading/loading.html', 'client/views/loading/loading.html');
      this.copy('client/views/loading/loading.styl', 'client/views/loading/loading.styl');
      this.copy('client/views/home/home.coffee', 'client/views/home/home.coffee');
      this.copy('client/views/home/home.html', 'client/views/home/home.html');
      this.copy('client/views/home/home.styl', 'client/views/home/home.styl');
      this.copy('client/views/about/about.coffee', 'client/views/about/about.coffee');
      this.copy('client/views/about/about.html', 'client/views/about/about.html');
      this.copy('client/views/about/about.styl', 'client/views/about/about.styl');
      this.copy('collections/modals/navigation.js', 'collections/modals/navigation.js');
      this.copy('server/lib/startup.coffee', 'server/lib/startup.coffee');
      this.copy('server/publish/navigation.js', 'server/publish/navigation.js');
      this.copy('components/topnav/topnav.jsx', 'components/topnav/topnav.jsx');
    },

    mainFile: function(){
      var context = {
        title: "some test",
        id: this._.classify("Demo Section")
      }


      this.fs.copyTpl(
        this.templatePath('_main.html'),
        this.destinationPath('main.html'),
        {title: 'Some Great Application'}
      );

    },

    standardPackages: function(){
      var packages = [
        'meteor-platform',
        'coffeescript',
        'underscore',
        'iron:router',
        'http',
        'sacha:spin',
        'stylus',
        'raix:handlebar-helpers',
        'alanning:roles',
        'momentjs:moment',
        'random',
        'zimme:iron-router-active',
        'aslagle:reactive-table',
        'semantic:ui-css',
        'reactjs:react'
      ];

      this.write('.meteor/packages', packages.join('\n'));
    }
  },

  end: function() {
    this.log('\nYeehaw! All went well!\n\nStart your Meteor app on the command line with:\n'+
        chalk.green('meteor')+'\n\n');
  }
});
