const {User} = require("../DB_connection");

const postUser = async(req, res) => {
  try {
    console.log('Entró en postUser'); // Log de entrada
    const { email, password } = req.body;

    if (!email || !password){
      console.log('Datos faltantes'); // Log de datos faltantes
      return res.status(400).json({ message: "Faltan datos" });
    }

    const [user, created] = await User.findOrCreate({
      where: { email, password }
    });
    console.log('Usuario creado o encontrado:', user); // Log de usuario creado o encontrado
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error en postUser:', error); // Log de error
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;






//     if (email && password) {
//       //* metodo findOrCreate para buscar un usuario existente o crear uno nuevo
//       const [newUser, created] = await User.findOrCreate({
//         where: { email }, 
//         defaults: { password }, 
//       });
//       if (created) {
//         return res.status(201).json({ message: "Usuario creado con éxito", user: newUser });
//       } else {
//         return res.status(409).json({ message: "El usuario ya existe", user: newUser });
//       }
//     } else {
//       return res.status(400).json({ message: "Faltan datos" });
//     }
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Error al procesar la solicitud", error });
//   }
// };


