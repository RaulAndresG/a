import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js"
import constructorasRoutes from "./routes/constructoras.routes.js"
import empleadosRoutes from "./routes/empleados.routes.js"
import productosRoutes from "./routes/productos.routes.js" 

const app = express();
console.log(app);

//Middleware
app.set("port", 5000);

app.use(express.json());

//Routes
app.use("/api/categorias",categoriaRoutes);
app.use("/api/constructoras",constructorasRoutes);
app.use("/api/empleados",empleadosRoutes);
app.use("/api/productos",productosRoutes); 


export default app;