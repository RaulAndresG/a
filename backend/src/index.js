import app from "./app.js";
const main = () =>{
    app.listen(app.get("port"));
    console.log(`The Compay Server is Running on port ${app.get("port")}`);
}


main();