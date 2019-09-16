
let conex = require('../database.js');

function getUsuarios(req, res){
    sql = 'SELECT usuario FROM usuarios';
            
    conex.query(sql, function(error, resultado, fields){
        if (error) {
            console.log("Ha ocurrido un error en la consulta", error.message);
            return res.status(404).send("Ha ocurrido un error en la consulta");
        }

        res.render('usuario/all-usuario', {resultado, layout: 'main'});

    });
}

module.exports = {
    getUsuarios,
};

