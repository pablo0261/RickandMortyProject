// const http = require("http");
const url = require("url");
const getCharById = require('./controllers/getCharById')
const axios = require('axios');
const express = require('express');
const server = express();
const PORT = 3001;

server.getCharById('/rickandmorty/character/:id', (req, res) => {
  let id = req.params.id;
  const URL = "`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}";

  axios.get(URL)
  .then(({data}) => {
    if(data.id){
      const character = {
        id: data.id, 
        status: data.status, 
        name: data.name, 
        species: data.species, 
        origin: data.origin, 
        image: data.image, 
        gender: data.gender
      }
    res.status(200).json(character)
  } else {
    res.status(404).json({message: 'Not found'})
  }
})
  .catch((error) =>{
    res.status(500).json({message: error})
  })

})






//* EXPLICACION PARSE =>url.parse(urlString, [parseQueryString], [slashesDenoteHost])
//*  urlString (String): Esta es la URL

//* parseQueryString (Boolean) [Opcional]: parámetros de consulta de la URL

//* slashesDenoteHost (Boolean) [Opcional]:Si se establece en true, la función considerará la parte anterior a las barras dobles como el nombre de host.

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     const {url} = req;

//     if(url.includes(`/rickandmorty/character`)){
//       const id = url.split('/').pop();
//       getCharById(res, id)
//     }

//     // if (URL.href.includes("/rickandmorty/character")) {
//     //   const id = URL.pathname.split("/").pop();
//     //   const characterId = Number(id);

//     //   const character = data.find((character) => character.id === characterId);

//       // if (character) {
//       //   res.writeHead(200, { "Content-Type": "application/json" });
//       //   return res.end(JSON.stringify(character));
//       // }
//     //*   EXPLICACION DE .stringfy()
//     //   JSON.stringify() es utilizado para serializar un objeto JavaScript en una cadena JSON para que pueda ser transmitido a través de HTTP
//     // }
//   })

  // .listen(3001, "localhost");
  server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
 });