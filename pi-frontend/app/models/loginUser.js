var Base = require("./base");

var LoginUser = function (loginUser) {
  this.restName = "loginUser";

  if (loginUser != undefined) {
    this.login = loginUser.login;
    this.senha = loginUser.senha;
  } else {
    this.login = "";
    this.senha = "";
  }
};

LoginUser.prototype = new Base();

module.exports = LoginUser;
