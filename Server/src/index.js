const axios = require('axios');
const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index');

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
    });

server.use(express.json());
server.use('/rickandmorty', router);

// server.get('/rickandmorty/character/:id', (req, res) => {
//   let id = req.params.id;
//   const URL = `https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`;

//   axios
//   .get(URL)
//   .then((response) => {
//     const data = response.data;
//     if (data.id) {
//       const character = {
//         id: data.id, 
//         status: data.status, 
//         name: data.name, 
//         species: data.species, 
//         origin: data.origin, 
//         image: data.image, 
//         gender: data.gender
//       }
//     res.status(200).json(character)
//   } else {
//     res.status(404).json({message: 'Not found'})
//   }
// })
//   .catch((error) =>{
//     res.status(500).json({message: error})
//   })

// })

  server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });