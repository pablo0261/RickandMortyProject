const axios = require('axios');

const URL = `https://rickandmortyapi.com/api/character/`

const getCharById = (req, res) =>{
    const {id} = req.params;

axios.get(`${URL}${id}`) // o s epuede poner URL + id

    .then((response) => {
        if(response.status === 200){
            const data = response.data; //!podria ir esto, verificar si funciona
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
        return res.status(404).json({ message: 'Not found' });
    }
} else {
    return res.status(500).json({ message: 'Internal Server Error' });
}
})
.catch((err) => {
res.status(500).json({ message: err.message });
});
};

module.exports = getCharById;