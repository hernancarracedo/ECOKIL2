const express = require('express');
const router = express.Router();

// controlador
const issueController = require('../controllers/issue');

// Helpers
//const { isAuthenticated } = require('../helpers/auth');


router.get('/issue', issueController.getIssues);
router.get('/issue/add', issueController.issueRender);
router.post('/issue/new-issue', issueController.newIssue);
router.get('/issue/edit/:id', issueController.issueEditRender);
router.put('/issue/edit-issue/:id', issueController.issueEdit);

/*
router.get('/servprod/add', isAuthenticated,  servprodController.servprodRender);
router.post('/servprod/new-servprod', isAuthenticated, servprodController.newServprod);
router.get('/servprod', isAuthenticated, servprodController.getServprod);
router.get('/servprod/edit/:id', isAuthenticated, servprodController.servprodEditRender);
router.put('/servprod/edit-servprod/:id', isAuthenticated, servprodController.servprodEdit);
router.delete('/servprod/delete/:id', isAuthenticated, servprodController.servprodDelete);
*/

module.exports = router;
