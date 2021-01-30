"use strict";
var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");
var yoHelper = require("yeoman-generator-helper");

require("@jswork/next-registry-choices");

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        "Welcome to the striking " +
          chalk.red("generator-slate-plugin") +
          " generator!"
      )
    );

    var prompts = [
      {
        type: "scope",
        name: "scope",
        message: "Your scope (eg: @babel )?",
        default: "jswork",
      },
      {
        type: "list",
        name: "registry",
        message: "Your registry",
        choices: nx.RegistryChoices.gets(),
      },
      {
        type: "input",
        name: "project_name",
        message: "Your project_name?",
        default: yoHelper.discoverRoot,
      },
      {
        type: "input",
        name: "description",
        message: "Your project description?",
      },
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath("{.*,*,src/*}"),
      this.destinationPath("."),
      this.props
    );
  }
});
