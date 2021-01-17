const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../utils/mongoose');

class MeController {
    storecourse(req, res, next) {
        Promise.all(
                [Course.find({}),
                    Course.countDocumentsDeleted()
                ]
            ).then(([course, deletedCount]) =>
                res.render('me/storecourse', {
                    deletedCount,
                    course: mutilpleMongooseToObject(course),
                }),
            )
            .catch(next);
    }

    trash(req, res, next) {
        Course.findDeleted({})
            .then((course) =>
                res.render('me/trashcourse', {
                    course: mutilpleMongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController;