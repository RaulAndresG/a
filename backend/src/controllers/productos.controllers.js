
import getConnection from "./../db/database.js"

const getproductos = async (req,res) => {
    try {
        const connection = await getConnection();
    const result = await connection.query("SELECT id_producto , nombre_producto  ,precio_x_dia  , stock_producto ,categoria_producto FROM productos");
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}

const addproductos = async(req,res)=>{
    try {
        const { nombre_producto  ,precio_x_dia  , stock_producto ,categoria_producto} = (req.body);

        const category ={
            nombre_producto,
            precio_x_dia,
            stock_producto, 
            categoria_producto
   
        }       
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO productos SET ?",category)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}



const getproductosID = async (req,res) => {
    try {
        console.log(req.parms);
        const {id} = req.params;
        const connection = await getConnection();
    const result = await connection.query("SELECT  id_producto , nombre_producto  ,precio_x_dia  , stock_producto ,categoria_producto FROM productos WHERE  id_producto = ? ", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}


const deleteproductos = async (req,res) => {
    try {
        const {id} = req.params;
         const connection = await getConnection();
    const result = await connection.query("DELETE FROM productos WHERE id_producto = ? ", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}


const updateproductos = async(req,res)=>{
    try {
        const {id} = req.params;
        const { nombre_producto  ,precio_x_dia  , stock_producto ,categoria_producto} = (req.body);

        const category ={
            nombre_producto,
            precio_x_dia,
            stock_producto, 
            categoria_producto
   
        }       
        const connection = await getConnection();

        const result = await connection.query("UPDATE productos SET ? WHERE  id_producto = ?",[category ,id]);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
} 



export const methodsHTTP = {
    getproductos,
    addproductos,
    getproductosID,
    deleteproductos,
    updateproductos  

}   

