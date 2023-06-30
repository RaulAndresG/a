
import getConnection from "./../db/database.js"

const getConstructora = async (req,res) => {
    try {
        const connection = await getConnection();
    const result = await connection.query("SELECT id_constructora , nombre_constructora, nit_constructora, nombre_representante ,email_contacto, telefono_contacto FROM  constructoras");
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}

const addConstructoras = async(req,res)=>{
    try {
        const {nombre_constructora, nit_constructora, nombre_representante  ,email_contacto , telefono_contacto} = (req.body);

        const category ={
            nombre_constructora,
            nit_constructora,
            nombre_representante,
            email_contacto,
            telefono_contacto

        }       
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO constructoras SET ?",category)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}



const getConstructorasId = async (req,res) => {
    try {
        console.log(req.parms);
        const {id} = req.params;
        const connection = await getConnection();
    const result = await connection.query("SELECT id_constructora , nombre_constructora, nit_constructora, nombre_representante ,email_contacto, telefono_contacto FROM constructoras WHERE  id_constructora = ? ", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}


const deleteConstructora = async (req,res) => {
    try {
        const {id} = req.params;
         const connection = await getConnection();
    const result = await connection.query("DELETE FROM constructoras WHERE id_constructora = ? ", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}


const updateConstructora = async(req,res)=>{
    try {
        const {id} = req.params;
        const {nombre_constructora, nit_constructora, nombre_representante  ,email_contacto , telefono_contacto} = (req.body);

        const category ={
            nombre_constructora,
            nit_constructora,
            nombre_representante,
            email_contacto,
            telefono_contacto

        }      
        const connection = await getConnection();

        const result = await connection.query("UPDATE constructoras SET ? WHERE  id_constructora = ?",[category ,id]);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
} 


export const methodsHTTP = {
    getConstructora,
    addConstructoras,
    getConstructorasId,
    deleteConstructora,
    updateConstructora  

}   

