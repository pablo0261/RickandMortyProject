  const { server } = require("./app");
  const  {conn}  = require("./DB_connection")
  
  const PORT = 3001;
  conn
    .sync({ alter: false })
    .then(() => {

      server.listen(PORT, () => {
        console.log("Server raised in port: " + PORT); 
      });
    })
    .catch((error) => { 
      console.error("Error syncing with database: ", error);
    });
