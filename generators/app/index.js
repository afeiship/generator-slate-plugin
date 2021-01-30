'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');

require('@jswork/next-registry-choices');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the striking ' + chalk.red('generator-slate-plugin') + ' generator!')
    );

    const prompts = [
      {
        type: 'scope',
        name: 'scope',
        message: 'Your scope (eg: @babel )?',
        default: 'jswork'
      },
      {
        type: 'list',
        name: 'registry',
        message: 'Your registry',
        choices: nx.RegistryChoices.gets()
      },
      {
        type: 'input',
        name: 'project_name',
        message: 'Your project_name?',
        default: yoHelper.discoverRoot
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description?'
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('{.*,*,src/*}'), this.destinationPath('.'), this.props);
  }
};
