const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id,  name, origin, status, image, species, gender } = req.body;
    
    // console.log(req.body);

    if ( !id || !name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ messege: "Faltan datos" });
    } 

    await Favorite.findOrCreate({
        where: {id, name, origin, status, image, species, gender },
      });
      const allFavorites = await Favorite.findAll();
      // console.log(allFavorites)
      res.status(200).json({ allFavorites });
    
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error:error.message });
  }
};

module.exports = postFav ;