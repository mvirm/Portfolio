const server =  require("./src/app");
const port = "3001";

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
