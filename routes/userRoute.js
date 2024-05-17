const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;
