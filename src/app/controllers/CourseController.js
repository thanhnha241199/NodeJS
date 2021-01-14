const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController{
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('course/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    create(req, res) {
        res.render('course/create');
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
        .then((course) =>
            res.render('course/edit', {
                course: mongooseToObject(course),
            }),
        )
        .catch(next);
    }

    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/course'))
        .catch(next);
    }

    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    store(req, res, next) {
        const formdata = req.body;
        formdata.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formdata);
        course.save()
           .then(() => res.redirect("/"))
           .catch((error) => {});
    }
}

module.exports = new CourseController;