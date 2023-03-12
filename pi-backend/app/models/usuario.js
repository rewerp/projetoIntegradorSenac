var db = require('../../config/db.js');

var Usuario = function(usuario){

    if(usuario != undefined){
        this.id = usuario.id;
        this.nome = usuario.nome;
        this.login = usuario.login;
        this.senha = usuario.senha;
        this.email = usuario.email;
    }
    else{
        this.id = 0;
        this.nome = "";
        this.login = "";
        this.senha = "";
        this.email = "";
    }
    

    this.salvar = function(callback){
        if(this.nome == ""){
            console.log("[Modelo:Usuario] Nome de usuário obrigatorio");
            return;
        }

        if(this.login == ""){
            console.log("[Modelo:Usuario] Nome de login obrigatorio");
            return;
        }

        if(this.senha == ""){
            console.log("[Modelo:Usuario] Nome de senha obrigatorio");
            return;
        }

        var query = "";
        if(this.id == 0 || this.id == "" || this.id == undefined){            
            query = "INSERT INTO `pi_backend`.Usuarios (nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "');";
            db.cnn.exec(query, function(rows, err ){
                if(err !== undefined && err !== null){
                    callback.call(null, {erro: true, mensagem: err.message});
                }
                else{
                    callback.call(null, {erro: false});
                }
            });
        }
        else {
            query = "UPDATE `pi_backend`.Usuarios SET nome = '" + this.nome + "', login = '" + this.login + "', senha = '" + this.senha + "', email = '" + this.email + "' WHERE (id = '" + this.id + "');";
            db.cnn.exec(query, function(rows, err ){
                if(err !== undefined && err !== null){
                    callback.call(null, {erro: true, mensagem: err.message});
                }
                else{
                    callback.call(null, {erro: false});
                }
            });
        }
    };
};

Usuario.excluirTodos = function(callback){
    query = "delete from Usuarios";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {erro: true, mensagem: err.message});
        }
        else{
            callback.call(null, {erro: false});
        }
    });

};

Usuario.truncateTable = function(callback){
    query = "truncate `pi_backend`.Usuarios";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {erro: true, mensagem: err.message});
        }
        else{
            callback.call(null, {erro: false});
        }
    });

};

Usuario.todos = function(callback){
    query = "select * from Usuarios";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                usuarios: []
            });
        }
        else{
            callback.call(null, {
                erro: false, 
                usuarios: rows
            });
        }
    });
};

Usuario.buscaPorId = function(id, callback){
    query = "select * from Usuarios where id = " + id + ";";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                usuario: {}
            });
        }
        else{
            if(rows.length > 0){
                callback.call(null, {
                erro: false, 
                usuario: rows[0]
                });
            }
            else{
                callback.call(null, {
                    erro: false, 
                    usuario: {}
                });
            }                    
        }
    });
};

Usuario.excluirPorId = function(id, callback){
    query = "delete from Usuarios where id = " + id + ";";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message
            });
        }
        else{
            callback.call(null, {
                erro: false
            });
        }
            
    });
};

Usuario.buscaPorNome = function(nome, callback){
    query = "SELECT * FROM `pi_backend`.Usuarios where nome like '%" + nome + "%';";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                usuarios: []
            });
        }
        else{
            if(rows.length > 0){
                callback.call(null, {
                erro: false, 
                usuarios: rows
                });
            }
            else{
                callback.call(null, {
                    erro: false, 
                    usuarios: []
                });
            }                    
        }
    });
};


module.exports = Usuario;