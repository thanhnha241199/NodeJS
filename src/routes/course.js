const express = require('express');
const router = express.Router();
const coursecontroller = require('../app/controllers/CourseController');

router.post('/store', coursecontroller.store);
router.get('/create', coursecontroller.create);
router.post('/action/destroydelete', coursecontroller.formactiondestroydelete);
router.post('/action/delete', coursecontroller.formaction);
router.get('/edit/:id', coursecontroller.edit);
router.put('/update/:id', coursecontroller.update);
router.patch('/restore/:id', coursecontroller.restore);
router.delete('/delete/:id', coursecontroller.delete);
router.delete('/forcedelete/:id', coursecontroller.forcedelete);
router.get('/:slug', coursecontroller.show);

module.exports = router;