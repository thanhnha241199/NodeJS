const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../utils/mongoose');

class MeController{
    storecourse(req, res, next) {
        Course.find({})
            .then((course) =>
                res.render('me/storecourse', {
                    course: mutilpleMongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController;