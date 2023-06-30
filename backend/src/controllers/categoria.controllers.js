import getConnection from "./../db/database.js"

const getCategorias = async (req,res) => {
    try {
        const connection = await getConnection();
    const result = await connection.query("SELECT 	id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias");
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}

const addCategories = async(req,res)=>{
    try {
        const {nombre_categoria,descripcion_categoria,img_categoria} = (req.body);

        const category ={
            nombre_categoria,
            descripcion_categoria,
            img_categoria
        }       
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO categorias SET ?",category)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}



const getCategoria = async (req,res) => {
    try {
        console.log(req.parms);
        const {id} = req.params;
        const connection = await getConnection();
    const result = await connection.query("SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias WHERE  id_categoria = ? ", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}


const deleteCategoria = async (req,res) => {
    try {
        const {id} = req.params;
         const connection = await getConnection();
    const result = await connection.query("DELETE FROM categorias WHERE id_categoria = ? ", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}


const updateCategories = async(req,res)=>{
    try {
        const {id} = req.params;
        const {nombre_categoria,descripcion_categoria,img_categoria} = (req.body);

        const category ={
            nombre_categoria,
            descripcion_categoria,
            img_categoria
        }      
        const connection = await getConnection();

        const result = await connection.query("UPDATE categorias SET ? WHERE  CategoriaID = ?",[category ,id]);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
} 


export const methodsHTTP = {
    getCategorias,
     addCategories,
    getCategoria,
    deleteCategoria,
    updateCategories  

}   

