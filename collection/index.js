'use strict'
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var CollectionGenerator = module.exports = function CollectionGenerator(args, options, config) {
  // calling NamedBase allows us to retrieve the name argument associated with
  // yo meteor:component name, and set it to this.name *magic*
  yeoman.generators.NamedBase.apply(this, arguments);

  this.sourceRoot(path.join(__dirname, '../templates/collection'));
  //set the new src template path

  console.log('Creating a new Collection for ' + this.name + '');
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);


CollectionGenerator.prototype.createCollectionFiles = function createCollectionFiles() {

  var context = {
    fileName: this.name.toLowerCase(),
    classedName: this._.classify(this.name),
    cameledName: this._.camelize(this.name)
  }


  this.fs.copyTpl(
    this.templatePath('modal.txt'),
    this.destinationPath(
      path.join(
        'collections/modals',
        this.name.toLowerCase() + '.js')
    ),
    context
  );

  this.fs.copyTpl(
    this.templatePath('publish.txt'),
    this.destinationPath(
      path.join(
        'server/publish',
        this.name.toLowerCase() + '.js')
    ),
    context
  );


};




