const axios = require("axios");

const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`${URL}${id}`);
    if (response.status === 200) {
      const data = response.data;
      if (data) {
        const character = {
          id: data.id,
          name: data.name,
          gender: data.gender,
          species: data.species,
          origin: data.origin.name,
          image: data.image,
          status: data.status,
        };
        return res.status(200).json(character);
      } else {
        return res.status(404).json({ message: "Not found" });
      }
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = getCharById;
