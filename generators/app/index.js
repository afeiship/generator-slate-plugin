'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const prompts = require('./prompts');

module.exports = class extends (
  Generator
) {
  prompting() {
    this.log(yosay(`Welcome to the striking ${chalk.red('generator-slate-plugin')} generator!`));
    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('{.*,*,src/*}'), this.destinationPath('.'), this.props);
  }
};
