import {Router} from "express";
import { methodsHTTP as categoriaController} from "../controllers/productos.controllers.js";
const router = Router();

router.get("/",categoriaController.getproductos);
router.post("/",categoriaController.addproductos); 
// la rua recibe un parametro  
router.get("/:id",categoriaController.getproductosID ); 
// la ruta debe recibir como prametro el id de la categoria a eliminar
router.delete("/:id",categoriaController.deleteproductos ); 

//
router.put("/:id",categoriaController.updateproductos); 




export default router;