const path = require('path');
const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const port = 8080;
const morgan = require('morgan');
var methodOverride = require('method-override')
const db = require("./config/db");
const route = require('./routes');

db.connect();

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.engine('hbs', exphbs({
  extname: '.hbs',
  helpers: {
    sum: (a ,b) =>  a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})