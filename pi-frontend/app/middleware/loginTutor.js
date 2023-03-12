const Cookie = require("../helpers/cookie");

module.exports = (req, res, next) => {
  let tutor = Cookie.get(req, "tutor");
  tutor = unescape(tutor);
  if (!tutor || tutor === "undefined") return res.redirect("/loginTutor");

  try {
    tutor = JSON.parse(tutor);
  } catch (e) {
    return res.redirect("/loginTutor");
  }

  req.usuarioLogado = tutor;
  next();
};
