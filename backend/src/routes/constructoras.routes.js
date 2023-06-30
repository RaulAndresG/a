import {Router} from "express";
import { methodsHTTP as categoriaController} from "../controllers/constructoras.controles.js";
const router = Router();

router.get("/",categoriaController.getConstructora);
router.post("/",categoriaController.addConstructoras); 
// la rua recibe un parametro  
router.get("/:id",categoriaController.getConstructorasId ); 
// la ruta debe recibir como prametro el id de la categoria a eliminar
router.delete("/:id",categoriaController.deleteConstructora ); 

//
router.put("/:id",categoriaController.updateConstructora); 






export default router;