'use strict'
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  // calling NamedBase allows us to retrieve the name argument associated with
  // yo meteor:component name, and set it to this.name *magic*
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../templates/view'));
  //set the new src template path

  console.log('Creating a new View for ' + this.name + '');
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);


ViewGenerator.prototype.createViewFiles = function createViewFiles() {

  var context = {
    fileName: this.name.toLowerCase(),
    classedName: this._.classify(this.name),
    cameledName: this._.camelize(this.name)
  }



  console.log(this.templatePath('view.coffee'));
  console.log(this.destinationPath(
    path.join(
      'client/views',
      this.name.toLowerCase(),
      this.name.toLowerCase() + '.coffee')
  ));


  this.fs.copyTpl(
    this.templatePath('view.coffee'),
    this.destinationPath(
      path.join(
        'client/views',
        this.name.toLowerCase(),
        this.name.toLowerCase() + '.coffee')
    ),
    context
  );

  this.fs.copyTpl(
    this.templatePath('view.html'),
    this.destinationPath(
      path.join(
        'client/views',
        this.name.toLowerCase(),
        this.name.toLowerCase() + '.html')
    ),
    context
  );

  this.fs.copyTpl(
    this.templatePath('view.styl'),
    this.destinationPath(
      path.join(
        'client/views',
        this.name.toLowerCase(),
        this.name.toLowerCase() + '.styl')
    ),
    context
  );


};




