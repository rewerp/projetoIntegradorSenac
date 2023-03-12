var Tutor = require("../models/tutor");
var Token = require("../models/token");

var TutoresController = {
    head: function(req, res, next){
        new Token().criar(function(retorno){
            res.header('auth_token',retorno.token);
            res.status(204).send("");            
        }); 
    },
    todos: function(req, res, next) {
        if(req.query.nome != undefined){
            Tutor.buscaPorNome(req.query.nome, function(retorno){
                if(retorno.erro){
                    res.status(500).send({
                        erro: 'erro ao buscar tutores por nome (' + req.query.nome + ') - ('+ retorno.mensagem +')'
                    });
                }
                else{
                    res.status(200).send(retorno.tutores);
                }
            }); 
        }
        else{
            Tutor.todos(function(retorno){
                if(retorno.erro){
                    res.status(500).send({
                        erro: 'erro ao buscar tutores por nome('+ retorno.mensagem +')'
                    });
                }
                else{
                    res.status(200).send(retorno.tutores);
                }
            }); 
        }
    },

    porId: function(req, res, next){
        if(req.params.id !== undefined){
            Tutor.buscaPorId(req.params.id, function(retorno){
                if(retorno.erro){
                    res.status(500).send({
                        erro: 'erro ao buscar tutores por id ('+ retorno.mensagem +')'
                    });
                }
                else{
                    if(retorno.tutor.nome !== undefined  ){
                        res.status(200).send(retorno.tutor);
                    }
                    else{
                        res.status(404).send({ mensagem: "Tutor nao encontrado"});
                    }
                }
            }); 
        }
    },

    criar: function(req, res, next){
        var token = req.headers.auth_token;
        Token.verificaToken(token, function(retorno){
            if(retorno.tokenValidado){

                Token.apagarToken(token); 
                
                if(req.body.nome === undefined){
                    res.status(400).send({
                        erro: 'erro ao cadastrar tutor, nome de usuário precisa estar preenchido'
                    });
                    return;
                }
        
                if(req.body.login === undefined){
                    res.status(400).send({
                        erro: 'erro ao cadastrar tutor, login de usuário precisa estar preenchido'
                    });
                    return;
                }
        
                if(req.body.senha === undefined){
                    res.status(400).send({
                        erro: 'erro ao cadastrar tutor, senha de usuário precisa estar preenchido'
                    });
                    return;
                }
                if(req.body.email === undefined){
                    res.status(400).send({
                        erro: 'erro ao cadastrar tutor, email de usuário precisa estar preenchido'
                    });
                    return;
                }

                var tutor = new Tutor();
                tutor.nome = req.body.nome;
                tutor.login = req.body.login;
                tutor.senha = req.body.senha;
                tutor.email = req.body.email; 
                tutor.salvar(function(retorno){
                    if(retorno.erro){
                        res.status(500).send({
                            erro: 'erro ao cadastrar tutor ('+ retorno.mensagem +')'
                        });
                    }
                    else{
                        res.status(201).send({ mensagem: "Tutor criado com sucesso"});
                    }                        
                }); 
            }
            else{
                res.status(401).send({
                    erro: 'Token inválido, você não tem autorização de acessar esta API'
                });
            }
        });                
    },

    atualizar: function(req, res, next){

        var token = req.headers.auth_token;
        Token.verificaToken(token, function(retorno){
            if(retorno.tokenValidado){

                Token.apagarToken(token); 

                Tutor.buscaPorId(req.body.id, function(retorno){
                    if(retorno.tutor.id === undefined){
                        res.status(400).send({
                            erro: 'Erro ao atualizar, id de tutor não encontrado'
                        });
                    }
                    else{
                        var tutor = new Tutor();
                        tutor.id = req.body.id;
                        tutor.nome = req.body.nome;
                        tutor.login = req.body.login;
                        tutor.senha = req.body.senha;
                        tutor.email = req.body.email; 
                        tutor.salvar(function(retorno1){
                            if(retorno1.erro){
                                res.status(500).send({
                                    erro: 'erro ao atualizar tutor ('+ retorno1.mensagem +')'
                                });
                            }
                            else{
                                res.status(200).send({ mensagem: "Tutor atualizado com sucesso"});
                            }          
                        });         
                    } 
                });
            } 
            else{
                res.status(401).send({
                    erro: 'Token inválido, você não tem autorização de acessar esta API'
                });
            }
        });  
                
    },

    atualizarPorPatch: function(req, res, next){
        res.header("Access-Control-Allow-Origin", process.env.DATABASE_URL);        
        res.header("Access-Control-Allow-Methods", 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
        res.header("Access-Control-Allow-Headers", "Content-Type");

        var token = req.headers.auth_token;
        Token.verificaToken(token, function(retorno){
            if(retorno.tokenValidado){

                Token.apagarToken(token); 
                
                Tutor.buscaPorId(req.params.id, function(retorno){
                    if(retorno.tutor.id === undefined){
                        res.status(400).send({
                            erro: 'Erro ao atualizar, id de tutor não encontrado'
                        });
                    }
                    else{
                        var tutor = new Tutor(retorno.tutor);
        
                        if(req.body.nome !== undefined && req.body.nome !== "" ){
                            tutor.nome = req.body.nome;
                        }
                        if(req.body.login !== undefined && req.body.login !== "" ){
                            tutor.login = req.body.login;
                        }
                        if(req.body.senha !== undefined && req.body.senha !== "" ){
                            tutor.senha = req.body.senha;
                        }
                        if(req.body.email !== undefined && req.body.email !== "" ){
                            tutor.email = req.body.email;
                        }
        
                        tutor.salvar(function(retorno1){
                            if(retorno1.erro){
                                res.status(500).send({
                                    erro: 'erro ao atualizar tutor ('+ retorno1.mensagem +')'
                                });
                            }
                            else{
                                res.status(200).send({ mensagem: "Nome atualizado por patch"});
                            }          
                        });         
                    } 
                }); 
            } 
            else{
                res.status(401).send({
                    erro: 'Token inválido, você não tem autorização de acessar esta API'
                });
            }
        });  
    },

    excluirUsuario: function(req, res, next){
        var token = req.headers.auth_token;
        Token.verificaToken(token, function(retorno){
            if(retorno.tokenValidado){

                Token.apagarToken(token);
                
                Tutor.excluirPorId(req.params.id, function(retorno){
                    if(retorno.erro){
                        res.status(500).send({
                            erro: 'erro ao excluir o tutor ('+ retorno.mensagem +')'
                        });
                    }
                    else{
                        res.status(204).send("");
                    }           
                }); 
            } 
            else{
                res.status(401).send({
                    erro: 'Token inválido, você não tem autorização de acessar esta API'
                });
            }
        });
        
    },

    options: function(req, res, next){
        res.header("Access-Control-Allow-Origin", "*");        
        res.header("Access-Control-Allow-Methods", 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.status(204).send(""); 
    }
   
};

module.exports = TutoresController;