const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query; //!cambiar esto a body cuando modifique App.js del cliente

  const matcherUser = users.find((user) => user.email === email && user.password === password);

  matcherUser
    ? res.status(200).json({ access: true })
    : res.status(404).json({ access: false });
};

module.exports = login;
