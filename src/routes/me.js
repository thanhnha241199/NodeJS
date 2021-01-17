const express = require('express');
const router = express.Router();
const mecontroller = require('../app/controllers/MeController');

router.get('/stored/course', mecontroller.storecourse);
router.get('/trash/course', mecontroller.trash);

module.exports = router;