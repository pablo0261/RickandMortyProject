const PORT = 3001;
  const { server } = require("./app");
  const  {conn}  = require("./DB_connection")
  
  conn
    .sync({ force: true })
    .then(() => {

      server.listen(PORT, () => {
        console.log("Server raised in port: " + PORT); 
      });
    })
    .catch((dbSyncError) => {
      console.error("Error syncing with database: ", dbSyncError);
    })
    .catch((serverError) => {
      console.error("Error starting the server: ", serverError);
    });
