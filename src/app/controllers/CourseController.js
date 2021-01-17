const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
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
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/course'))
            .catch(next);
    }

    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    forcedelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
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
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    formaction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                req.json({ message: "Action is invalid" });
        }
    }
    formactiondestroydelete(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.deleteMany({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                req.json({ message: "Action is invalid" });
        }
    }
}

module.exports = new CourseController;