import express from 'express'
import { 
  suma,
  getUsers,
  getUser
 } from './controladores/control.js'
import { Sequelize, DataTypes, Op } from 'sequelize'
import  db from './db/connection.js'
import bodyParser from 'body-parser'

const app = express()
const port = 3000
const rawBodySaver =  (req, res, buf, encoding) =>{
  if (buf && buf.length) {
    req.body = buf.toString(encoding || 'utf8');
  }
}

const options = {
  verify: rawBodySaver
};

app.use(bodyParser.json(options));

app.get('/users', getUsers);
app.get('/user', getUser)
app.post('/user', getUser)


  // // await User.create({ name:"Jane" })
  // let resultado = await User.findAll() // SELECT *from
  // resultado.forEach(function(usuario){
  //   const { id, name } = usuario.dataValues
  //   console.log("id: ", id)
  //   console.log("name: ", name)
  // })

  // let unoSolo = await User.findAll({
  //   where: {
  //     id: 2
  // }}) 

  // let eliminado = await User.destroy({
  //   where: {
  //     id: {
  //       [Op.or]: [13, 14]
  //     }
  //   }
  // });

  // await User.update({ name: "Fran" }, {
  //   where: {
  //     name: 'Pepe'
  //   }
  // });
  // CRUD
  // Create, Read, Update, Delete
  // const fran = await User.create({ name: "Fran" })
  // console.log(fran.name) // Fran
  // fran.name = 'Pepe'// hasta este punto no está en BD
  // await fran.save() // aqui si está en Base de datos

// console.log("eliminado", eliminado)
  // console.log("unoSolo", unoSolo)
  // console.log( JSON.stringify(resultado, null, 2) )
//   res.json(resultado)
// })

app.post('/usuarios', (req, res) => { // rutas
    console.log("Entrando por metodo post")
    console.log("Creando usuario...")
    let objeto = {
        id: "1234",
        nombre: "Fran"
    }
    res.json(objeto)
  })

app.listen(port, async () => {
  await db.sequelize
  console.log(`Example app listening on port ${port}`)
})