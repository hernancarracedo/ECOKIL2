var mysql = require('mysql');
var dbconfig = require('../database');
var conex = mysql.createConnection(dbconfig.connection);
conex.query('USE ' + dbconfig.database);


function singupRender(req, res){
  res.render('user/signup2', {layout:'layout2'});
}

async function singup(req, res){
    let errors = [];
    const { username, email, password, confirm_password } = req.body;
    if(password != confirm_password) {
      errors.push({text: 'No coinciden las contraseñas'});
    }
    if(password.length < 4) {
      errors.push({text: 'Mínimo 4 Carácteres'})
    }
    if(errors.length > 0){
      res.render('user/signup', {errors, name, email, password, confirm_password});
    } else {
      sql = "SELECT username FROM users WHERE username = '"+username+"'";
      //console.log ('paso');        
      conex.query(sql, function(error, resultado, fields){
          if (error) {
              console.log("Ha ocurrido un error en la consulta", error.message);
              return res.status(404).send("Ha ocurrido un error en la consulta");
          }
          //console.log(sql+'\n');
          //console.log('Se encontraron: ' +  resultado.length + ' coincidencias en la tabla');
          //res.render('issue/all-issue', {resultado, layout: 'main'});
          if(resultado.length > 0) {
            req.flash('error_msg', 'El usuario ya está en uso ');
            res.redirect('/user/signup');
          } else {
            sql = "INSERT INTO users (`username`, `email`, `password`) VALUES ('" + username + "', '" + email + "', '" + password + "')";
            conex.query(sql, function(error, resultado, fields){
                if (error) {
                    console.log("Ha ocurrido un error en la consulta", error.message);
                    return res.status(404).send("Ha ocurrido un error en la consulta");
                }
            });
            req.flash('success_msg', 'Se registró el usuario');
            res.redirect('/');
          }
      });
    }
}

//Get todos los Usuarios
async function getUsers(req, res){
  const users = await User.find();
  res.render('user/all-users', { users, layout:'mainlayout' });
}

function siginRender(req, res){
  res.render('user/signin', {layout:'layout2'});
}

function logout(req, res) {
  req.logout();
  req.flash('success_msg', 'Se deslogueó correctamente');
  res.redirect('/');
}

module.exports = {
    singupRender,
    singup,
    siginRender,
    getUsers,
    logout
}