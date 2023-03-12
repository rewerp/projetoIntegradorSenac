const Cookie = require("../helpers/cookie");

module.exports = (req, res, next) => {
  let usuario = Cookie.get(req, "usuario");
  usuario = unescape(usuario);  
  if (!usuario || usuario === "undefined") return res.redirect("/loginUser");
  
  try {
    usuario = JSON.parse(usuario);
  } catch (e) {
    return res.redirect("/loginUser");
  }

  req.usuarioLogado = usuario;
  next();
};
