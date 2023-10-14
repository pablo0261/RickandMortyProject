const http = require("http");
const url = require("url");
const data = require("./utils/data.js");

//* EXPLICACION PARSE =>url.parse(urlString, [parseQueryString], [slashesDenoteHost])
//*  urlString (String): Esta es la URL

//* parseQueryString (Boolean) [Opcional]: parámetros de consulta de la URL

//* slashesDenoteHost (Boolean) [Opcional]:Si se establece en true, la función considerará la parte anterior a las barras dobles como el nombre de host.

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const URL = url.parse(req.url, true);

    if (URL.href.includes("/rickandmorty/character")) {
      const id = URL.pathname.split("/").pop();
      const characterId = Number(id);

      const character = data.find((character) => character.id === characterId);

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character));
      }
    //*   EXPLICACION DE .stringfy()
    //   JSON.stringify() es utilizado para serializar un objeto JavaScript en una cadena JSON para que pueda ser transmitido a través de HTTP
    }
  })

  .listen(3001, "localhost");
