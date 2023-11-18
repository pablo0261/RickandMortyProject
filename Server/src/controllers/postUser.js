const {User} = require("../DB_connection");

const postUser = async(req, res) => {
  try {
    console.log('Entró en postUser'); 
    const { email, password } = req.body;

    if (!email || !password){
      console.log('Datos faltantes'); 
      return res.status(400).json({ message: "Faltan datos" });
    }

    const [user, created] = await User.findOrCreate({
      where: { email: email},
      defaults:{
        password
      }
    });
    console.log('Usuario creado o encontrado:', user); 
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error en postUser:', error); 
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;


