const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const checkRole = require('../../middleware/role');
const controller = require('./schools.controller');

router.get('/', auth, checkRole("SUP_ADMIN"), controller.getSchool);
router.get('/:id', auth, checkRole("SUP_ADMIN"), controller.getSchoolById);
router.post('/', auth, checkRole("SUP_ADMIN"), controller.saveSchool);
router.put('/:id', auth, checkRole("SUP_ADMIN"), controller.updateSchool);
router.delete('/:id', auth, checkRole("SUP_ADMIN"), controller.deleteSchool);

module.exports = router;