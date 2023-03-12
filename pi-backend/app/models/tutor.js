var db = require('../../config/db.js');

var Tutor = function(tutor){

    if(tutor != undefined){
        this.id = tutor.id;
        this.nome = tutor.nome;
        this.login = tutor.login;
        this.senha = tutor.senha;
        this.email = tutor.email;
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
            console.log("[Modelo:Tutor] Nome de tutor obrigatorio");
            return;
        }

        if(this.login == ""){
            console.log("[Modelo:Tutor] Nome de login obrigatorio");
            return;
        }

        if(this.senha == ""){
            console.log("[Modelo:Tutor] Nome de senha obrigatorio");
            return;
        }

        var query = "";
        if(this.id == 0 || this.id == "" || this.id == undefined){
            query = "INSERT INTO `pi_backend`.Tutores (nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "');";
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
            query = "UPDATE `pi_backend`.Tutores SET nome = '" + this.nome + "', login = '" + this.login + "', senha = '" + this.senha + "', email = '" + this.email + "' WHERE (id = '" + this.id + "');";
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

Tutor.excluirTodos = function(callback){
    query = "delete from Tutores";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {erro: true, mensagem: err.message});
        }
        else{
            callback.call(null, {erro: false});
        }
    });

};

Tutor.truncateTable = function(callback){
    query = "truncate `pi_backend`.Tutores";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {erro: true, mensagem: err.message});
        }
        else{
            callback.call(null, {erro: false});
        }
    });

};

Tutor.todos = function(callback){
    query = "select * from Tutores";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                tutores: []
            });
        }
        else{
            callback.call(null, {
                erro: false, 
                tutores: rows
            });
        }
    });
};

Tutor.buscaPorId = function(id, callback){
    query = "select * from Tutores where id = " + id + ";";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                tutor: {}
            });
        }
        else{
            if(rows.length > 0){
                callback.call(null, {
                erro: false, 
                tutor: rows[0]
                });
            }
            else{
                callback.call(null, {
                    erro: false, 
                    tutor: {}
                });
            }                    
        }
    });
};

Tutor.excluirPorId = function(id, callback){
    query = "delete from Tutores where id = " + id + ";";
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

Tutor.buscaPorNome = function(nome, callback){
    query = "SELECT * FROM `pi_backend`.Tutores where nome like '%" + nome + "%';";
    db.cnn.exec(query, function(rows, err ){
        if(err !== undefined && err !== null){
            callback.call(null, {
                erro: true, 
                mensagem: err.message, 
                tutores: []
            });
        }
        else{
            if(rows.length > 0){
                callback.call(null, {
                erro: false, 
                tutores: rows
                });
            }
            else{
                callback.call(null, {
                    erro: false, 
                    tutores: []
                });
            }                    
        }
    });
};


module.exports = Tutor;