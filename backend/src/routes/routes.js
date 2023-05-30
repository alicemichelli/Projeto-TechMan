const express = require('express');
const router = express.Router();

const usuarios = require('../controllers/usuarios');
const comentarios = require('../controllers/comentarios');
const equipamentos = require('../controllers/equipamentos');
const perfis = require('../controllers/perfis');

router.get('/usuarios/read', usuarios.read);
router.post('/usuarios/create', usuarios.create);
router.post('/usuarios/login', usuarios.login);

router.get('/comentarios/read', comentarios.read);
router.post('/comentarios/create', comentarios.create);

router.get('/equipamentos/read', equipamentos.read);
router.post('/equipamentos/create', equipamentos.create);
router.delete('/equipamentos/:id', equipamentos.del);

router.get('/perfis/read', perfis.read);
router.post('/perfis/create', perfis.create);

module.exports = router;