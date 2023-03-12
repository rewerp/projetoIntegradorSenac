var Base = require("./base");

var LoginTutor = function (loginTutor) {
  this.restName = "loginTutor";

  if (loginTutor != undefined) {
    this.login = loginTutor.login;
    this.senha = loginTutor.senha;
  } else {
    this.login = "";
    this.senha = "";
  }
};

LoginTutor.prototype = new Base();

module.exports = LoginTutor;
