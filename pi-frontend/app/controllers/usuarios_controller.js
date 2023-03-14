var Tutor = require("../models/tutor");

var UsuariosController = {
  index: function (req, res, next) {
    Tutor.todos(function (tutores) {
      res.render("./tutores/index", {
        title: "trazer os dados da API",
        tutores: tutores,
      });
    });
  },

  novo: function (req, res, next) {
    var erro = req.query.erro;
    if (erro === undefined) {
      erro = "";
    }
    res.render("tutores/novo", { erro: erro });
  },

  cadastrar: function (req, res, next) {
    var tutor = new Tutor();
    tutor.nome = req.body.nome;
    tutor.login = req.body.login;
    tutor.senha = req.body.senha;
    tutor.email = req.body.email;
    tutor.salvar(function (retorno) {
      if (retorno.erro) {
        res.redirect("/tutores/novo?erro=" + retorno.mensagem);
      } else {
        res.redirect("/tutores");
      }
    });
  },

  editar: function (req, res, next) {
    new Tutor({ id: req.params.id }).buscar(function (tutor) {
      if (tutor.erro !== undefined) {
        res.redirect("/tutores/alterar?erro=" + tutor.mensagem);
      } else {
        res.render("tutores/alterar", { tutor: tutor });
      }
    });
  },

  atualizar: function (req, res, next) {
    var tutor = new Tutor();
    tutor.id = req.params.id;
    tutor.nome = req.body.nome;
    tutor.login = req.body.login;
    tutor.senha = req.body.senha;
    tutor.email = req.body.email;
    tutor.salvar(function (retorno) {
      if (retorno.erro) {
        res.redirect("/tutores/novo?erro=" + retorno.mensagem);
      } else {
        res.redirect("/tutores");
      }
    });
  },

  excluir: function (req, res, next) {
    var tutor = new Tutor();
    tutor.id = req.params.id;
    tutor.excluir(function (retorno) {
      if (retorno.erro) {
        res.redirect("/tutores/novo?erro=" + retorno.mensagem);
      } else {
        res.redirect("/tutores");
      }
    });
  },
};

module.exports = UsuariosController;