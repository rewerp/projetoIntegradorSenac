var LoginUser = require("../models/loginUser");
var Cookie = require("../helpers/cookie");

var LoginUserController = {
  index: function (req, res, next) {
    var erro = req.query.erro;
    if (erro === undefined) {
      erro = "";
    }
    res.render("./loginUser/index", { erro: erro });
  },
  autenticar: function (req, res, next) {
    var login = new LoginUser();
    login.login = req.body.login;
    login.senha = req.body.senha;
    login.autenticar(function (retorno) {
      if (retorno.erro) {
        var erro = retorno.mensagem;
        if (erro === undefined) {
          erro = "";
        }
        res.render("./loginUser/index", { erro: erro });
      } else {
        Cookie.set(res, "usuario", retorno.data);
        res.redirect("/usuarios");
      }
    });
  },
  deslogar: function (req, res, next) {
    Cookie.remove(res, "usuario");
    res.redirect("/");
  },
};

module.exports = LoginUserController;
