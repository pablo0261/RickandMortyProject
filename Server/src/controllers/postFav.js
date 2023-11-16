const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id,  name, origin, status, image, species, gender } = req.body;
    if ( !id || !name || !origin || !status || !image || !species || !gender) {
      return res(401).json({ messege: "Faltan datos" });
    } else {
      const [Favorite, created] = await Favorite.findOrCreate({
        where: { name, origin, status, image, species, gender },
      });
      const allFavorites = await Favorite.findAll();

      res.status(200).json({ favorites: allFavorites });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav ;