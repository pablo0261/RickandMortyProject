const axios = require('axios');

const getCharById = (res, id) =>{

axios.get(`https://rym2.up.railway.app/api/character/${id}`)
    //*sin destructoring
    // .then(({response})=>{
    //     const data = response.data;
    //     const character = {
    //     id: data.id,
    //     name: data.name,
    //     gender: data.gender,
    //     specie: data.specie,
    //     origin: data.origin,
    //     image: data.image,
    //     status: data.status
    // };
    .then(({data}) => {
        const {name, gender, specie, origin, image, status} = data;
        const character = {id, name, gender, specie, origin, image, status}

    // res.status(200).json(character) // Se utiliza con Express
    res.writeHead(200,{'Content-type':'application/json'})
    return res.end(JSON.stringify(character))
})
.catch((err) =>{
    res.writeHead(500, {'Conten-Type': 'text-plane'})
    return res.end(err.message)
})
}

module.exports = getCharById;