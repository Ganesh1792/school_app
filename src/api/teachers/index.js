const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const checkRole = require('../../middleware/role');
const controller = require('./teachers.controller');

router.get('/', auth, checkRole("SCH_ADMIN"), controller.getTeacher);
router.get('/:id', auth, checkRole("SCH_ADMIN"), controller.getTeacherById);
router.post('/', auth, checkRole("SCH_ADMIN"), controller.saveTeacher);
router.put('/:id', auth, checkRole("SCH_ADMIN"), controller.updateTeacher);
router.delete('/:id', auth, checkRole("SCH_ADMIN"), controller.deleteTeacher);

module.exports = router;