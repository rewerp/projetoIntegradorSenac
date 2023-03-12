var Base = require("./base");

var Tutor = function (tutor) {
  this.restName = "tutores";

  if (tutor != undefined) {
    this.id = tutor.id;
    this.nome = tutor.nome;
    this.login = tutor.login;
    this.senha = tutor.senha;
    this.email = tutor.email;
  } else {
    this.id = 0;
    this.nome = "";
    this.login = "";
    this.senha = "";
    this.email = "";
  }
};

Tutor.prototype = new Base();

Tutor.todos = function (callback) {
  new Tutor().todos(callback);
};

module.exports = Tutor;
