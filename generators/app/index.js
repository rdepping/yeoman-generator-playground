"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  initializing() {
    this.log(`initializing just ran`);
    this.log(`destinationPath: ${this.destinationPath()}`);
    this.log(`contextRoot: ${this.contextRoot}`);
    this.log(`templatePath: ${this.templatePath()}`);
    this.log(`sourceRoot: ${this.sourceRoot()}`);
  }

  composing() {
    this.log("composing just ran");
  }

  method1() {
    this.log("method 1 just ran");
  }

  method2() {
    this.log("method 2 just ran");
    this.log(
      `methods: ${JSON.stringify(Object.getPrototypeOf(Generator), null, 4)}`
    );
  }

  prompting() {
    this.log("prompting just ran");
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the spectacular ${chalk.red(
          "generator-ralphd-test"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.log(`prompt promise ${JSON.stringify(props)}`);
      this.props = props;
    });
  }

  writing() {
    this.log("writing just ran");
    this.log(`prompt someAnswer: ${this.props.someAnswer}`);
    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt")
    );

    this.config.save();
  }

  install() {
    this.log("install dependencies just ran");
    this.installDependencies({
      npm: true,
      yarn: false,
      bower: false
    });
  }
};
