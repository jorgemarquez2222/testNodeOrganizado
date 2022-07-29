// import { conn } from '../db/connection.js'
import { User } from '../db/models/User.js'

export var suma = (a, b) => a + b;

export const getUsers = async (req, res) => { // rutas - routes
    console.log("req", req.query.id)
    console.log("Listar usuarios")
    let data = await User.findAll() 
    if(data.length<=0){
    res.json({
        data: "",
        msg: 'No se encontraron datos'
    })
    return
    }
    res.json(data)
}

export const getUser = async (req, res) => { // rutas - routes
    console.log("req", req.query.id)
    console.log("req.body", req.body.idBody)

    console.log("Listar usuarios")
    let data = await User.findAll({
        where: { id: req.body.idBody }
    }) 
    if(data.length<=0){
    res.json({
        data: "",
        msg: 'No se encontraron datos'
    })
    return
    }
    res.json(data)
}
