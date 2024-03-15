const server =  require("./src/app");
const port = "3001";

//levanto el servidor
server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
