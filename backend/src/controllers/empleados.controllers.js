
import getConnection from "./../db/database.js"

const getEmpleado = async (req,res) => {
    try {
        const connection = await getConnection();
    const result = await connection.query("SELECT 	id_empleado, nombre_empleado ,email_empleado , celular_empleado , password_empleado FROM empleados");
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}

const addEmpleado = async(req,res)=>{
    try {
        const {nombre_empleado ,email_empleado,celular_empleado,password_empleado} = (req.body);

        const category ={
            nombre_empleado,
            email_empleado,
            celular_empleado,
            password_empleado

        }       
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO empleados SET ?",category)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}



const getEmpleadoID = async (req,res) => {
    try {
        console.log(req.parms);
        const {id} = req.params;
        const connection = await getConnection();
    const result = await connection.query("SELECT id_empleado, nombre_empleado ,email_empleado , celular_empleado , password_empleado FROM empleados WHERE  id_empleado = ? ", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}


const deleteEmpleado = async (req,res) => {
    try {
        const {id} = req.params;
         const connection = await getConnection();
    const result = await connection.query("DELETE FROM empleados WHERE id_empleado = ? ", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}


const updateEmpleado = async(req,res)=>{
    try {
        const {id} = req.params;
        const {nombre_empleado ,email_empleado,celular_empleado,password_empleado} = (req.body);

        const category ={
            nombre_empleado,
            email_empleado,
            celular_empleado,
            password_empleado

        }     
        const connection = await getConnection();

        const result = await connection.query("UPDATE empleados SET ? WHERE  id_empleado = ?",[category ,id]);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
} 


export const methodsHTTP = {
    getEmpleado,
    addEmpleado,
    getEmpleadoID,
    deleteEmpleado,
    updateEmpleado  

}   

