const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const controller = require('./admins.controller');

router.get('/logout', auth, controller.logoutAdmin);
router.get('/logoutAll', auth, controller.logoutAllAdmin);
router.get('/', auth, controller.getAdmin);
router.get('/:id', auth , controller.getAdminById);
router.post('/login', controller.loginAdmin);
router.post('/',controller.saveAdmin);
router.put('/:id', auth, controller.updateAdmin);
router.delete('/:id', auth, controller.deleteAdmin);

module.exports = router;