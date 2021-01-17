const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

function route(app) {
    app.use('/course', urlencodedParser, courseRouter);
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter);
}

module.exports = route;