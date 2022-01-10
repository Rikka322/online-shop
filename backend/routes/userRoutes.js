const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddlewarw = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddlewarw, userController.auth);


module.exports = router;
