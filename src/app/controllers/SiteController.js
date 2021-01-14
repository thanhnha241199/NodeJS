const Course = require('../models/Course');
const { mutilpleMongooseToObject } = require('../../utils/mongoose');

class SiteController{
    index(req, res, next) {
        Course.find({})
            .then((course) => {
                res.render('home', {
                    course: mutilpleMongooseToObject(course),
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;