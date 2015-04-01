'use strict'
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  // calling NamedBase allows us to retrieve the name argument associated with
  // yo meteor:component name, and set it to this.name *magic*
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../templates/component'));
  //set the new src template path


  this.cameledName = this._.camelize(this.name);


  console.log('Creating a new React Component for ' + this.name + '');
};

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);


ComponentGenerator.prototype.createComponentFiles = function createComponentFiles() {

  var context = {
    fileName: this.name.toLowerCase(),
    classedName: this._.classify(this.name)
  }



  this.fs.copyTpl(
    this.templatePath('test.txt'),
    this.destinationPath(
      path.join(
        'client/components',
        this.name.toLowerCase(),
        this.name.toLowerCase() + '.jsx')
    ),
    context
  );


};




