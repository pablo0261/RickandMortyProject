const { server } = require("./app");
const { conn } = require("./DB_connection");
//import server from "./app";

conn
  .sync({ force: false })
  .then(() => {
    const PORT = 3001;

    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT); // puede ser tambien ${PORT}
    });
  })
  .catch((error) => {
    console.error("Error syncing with database: ", error);
  });
