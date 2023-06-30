import {Router} from "express";
import { methodsHTTP as categoriaController} from "../controllers/empleados.controllers.js";
const router = Router();

router.get("/",categoriaController.getEmpleado);
router.post("/",categoriaController.addEmpleado); 
// la rua recibe un parametro  
router.get("/:id",categoriaController.getEmpleadoID ); 
// la ruta debe recibir como prametro el id de la categoria a eliminar
router.delete("/:id",categoriaController.deleteEmpleado ); 

//
router.put("/:id",categoriaController.updateEmpleado); 






export default router;