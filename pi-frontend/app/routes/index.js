var express = require('express');
var HomeController = require('../controllers/home_controller');
var LoginUserController = require('../controllers/loginUser_controller');
var LoginTutorController = require('../controllers/loginTutor_controller');
var UsuariosController = require('../controllers/usuarios_controller');
var TutoresController = require('../controllers/tutores_controller');
var router = express.Router();
var LoginUserMiddleware = require("../middleware/loginUser");
var LoginTutorMiddleware = require("../middleware/loginTutor");

/* Rotas home page. */
router.get('/', HomeController.index);

/* Rotas User Login page. */
router.get('/loginUser',  LoginUserController.index);
router.post('/loginUser', LoginUserController.autenticar);
router.get('/logoutUser',  LoginUserController.deslogar);

/* Rotas Tutor Login page. */
router.get('/loginTutor', LoginTutorController.index);
router.post('/loginTutor', LoginTutorController.autenticar);
router.get('/logoutTutor', LoginTutorController.deslogar);

/* Rotas Usuarios */
router.get('/usuarios', LoginUserMiddleware, UsuariosController.index);
router.get('/usuarios/novo', LoginUserMiddleware, UsuariosController.novo);
router.post('/usuarios/cadastrar', LoginUserMiddleware, UsuariosController.cadastrar);
router.get('/usuarios/:id/editar', LoginUserMiddleware, UsuariosController.editar);
router.post('/usuarios/:id/atualizar', LoginUserMiddleware, UsuariosController.atualizar);
router.get('/usuarios/:id/excluir', LoginUserMiddleware, UsuariosController.excluir);

/* Rotas Tutores */
router.get('/tutores', LoginTutorMiddleware, TutoresController.index);
router.get('/tutores/novo', TutoresController.novo);
router.post('/tutores/cadastrar', TutoresController.cadastrar);
router.get('/tutores/:id/editar', TutoresController.editar);
router.post('/tutores/:id/atualizar', TutoresController.atualizar);
router.get('/tutores/:id/excluir', TutoresController.excluir);

module.exports = router;
