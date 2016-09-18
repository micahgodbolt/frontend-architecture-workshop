'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Webrh') + ' generator!'
    ));

    var prompts = [
      {
        type: 'list',
        name: 'type',
        message: 'What would you like to create?',
        choices: ['component', 'container', 'pattern']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What will this be called (i.e. \'Awesome Video\')',
      },
      {
        type: 'input',
        name: 'elements',
        message: 'What elements will this have? (i.e. \'my-el, my-other-el\')',
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));

  },

  writing: {
    app: function () {

      this.props.name_dash = this.props.name.replace(/ /g,"-").replace(/_/g,"-").toLowerCase();
      this.props.name_underscore = this.props.name.replace(/ /g,"_").replace(/-/g,"_").toLowerCase();

      this.props.elements_dash = this.props.elements.replace(/ /g,"").replace(/_/g,"-").toLowerCase();
      this.props.elements_underscore = this.props.elements.replace(/ /g,"").replace(/-/g,"_").toLowerCase();

      switch (this.props.type) {
        case "component":
          var path = "library/components/" + this.props.name_underscore;
          break;
        case "container":
          var path = "library/containers/" + this.props.name_underscore;
          break;
        case "pattern":
          var path = "library/patterns/" + this.props.name_underscore;
          break;
      }

      this.fs.copyTpl(
        this.templatePath('/_component.hbs'),
        this.destinationPath( path  + this.props.name_underscore + '.hbs'),
        {props: this.props}
      );
      this.fs.copyTpl(
        this.templatePath('/docs/_component.docs.md'),
        this.destinationPath( path + this.props.name_underscore + '.docs.md'),
        {props: this.props}
      );
      this.fs.copyTpl(
        this.templatePath('/tests/_component.tests.js'),
        this.destinationPath( path  + this.props.name_underscore + '.tests.js'),
        {props: this.props}
      );
      if (this.props.type == 'component' || this.props.type == 'container') {
        this.fs.copyTpl(
          this.templatePath('/styles/_component.scss'),
          this.destinationPath( path  + this.props.name_underscore + '.scss'),
          {props: this.props}
        );
      }
    }
  },

  install: function () {

  }
});
