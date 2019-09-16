const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
//const session = require('express-session');
const flash = require('connect-flash');
//const passport = require('passport');

const app = express();

//require('./config/passport');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));
/*
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});
*/

//app.use(require('./routes'));
app.use(require('./routes/usuario'));
app.use(require('./routes/issue'));

/*
app.use(require('./routes'));
app.use(require('./routes/users'));
app.use(require('./routes/cliente'));
app.use(require('./routes/asset'));
app.use(require('./routes/assetEstados'));
app.use(require('./routes/eso'));
app.use(require('./routes/servprod'));
app.use(require('./routes/conexion'));
app.use(require('./routes/tipotrabajo'));
app.use(require('./routes/ot'));
*/

app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () => {
  console.log('Escuchando en Puerto', app.get('port'));
});
