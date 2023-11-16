const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      return res.status(404).send("Faltan datos");
    }
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    return user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).json({ error: "Contraseña incorrecta" });
  } catch (error) {
    return res.status(500).json({ error, message });
  }
};

module.exports = login;
