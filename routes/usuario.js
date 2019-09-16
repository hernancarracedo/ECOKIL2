const express = require('express');
const router = express.Router();

// controlador
const usuarioController = require('../controllers/usuario');

// Helpers
//const { isAuthenticated } = require('../helpers/auth');


router.get('/usuario', usuarioController.getUsuarios);
/*
router.get('/servprod/add', isAuthenticated,  servprodController.servprodRender);
router.post('/servprod/new-servprod', isAuthenticated, servprodController.newServprod);
router.get('/servprod', isAuthenticated, servprodController.getServprod);
router.get('/servprod/edit/:id', isAuthenticated, servprodController.servprodEditRender);
router.put('/servprod/edit-servprod/:id', isAuthenticated, servprodController.servprodEdit);
router.delete('/servprod/delete/:id', isAuthenticated, servprodController.servprodDelete);
*/

module.exports = router;
