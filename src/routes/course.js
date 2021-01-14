const express = require('express');
const router = express.Router();
const coursecontroller = require('../app/controllers/CourseController');

router.post('/store', coursecontroller.store);
router.get('/create', coursecontroller.create);
router.get('/edit/:id', coursecontroller.edit);
router.put('/update/:id', coursecontroller.update);
router.delete('/delete/:id', coursecontroller.delete);
router.get('/:slug', coursecontroller.show);

module.exports = router;