const router = require('express').Router();
const passport = require('passport');

const userController = require('../controllers/user');

router.get('/user/signup', userController.singupRender);
router.post('/user/signup', userController.singup);
router.get('/', userController.siginRender);
//router.get('/user', userController.getUsers);
router.post('/user/signin', passport.authenticate('local', {
  //successRedirect: '/home',
  successRedirect: '/issue',
  failureRedirect: '/',
  failureFlash: true
}));
//router.get('/user/logout', userController.logout );

module.exports = router;