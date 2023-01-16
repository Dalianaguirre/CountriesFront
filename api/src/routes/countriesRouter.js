const { Router } = require('express');
const { Country, Activity } = require('../db');
const { getDbInfo } = require('../controller/getApiInfo')

const router = Router();

// NOTA: El param me define una ruta nueva, el query no, es adicional a la misma ruta => countries?name=colombia

// GET => QUE ME RESPONDA CON TODOS LOS PAISES O BUSQUE
// router.get("/", (req, res) => {
//   const { name } = req.query;
//   if(name){     // tengo name, voy a buscarlo
//     res.send("Not implemented yet: search by name"); 
//   }else{        // no tengo name, mando todo
//     res.send("Not implemented yet: get all countries"); 
//   }
// });

// /countries?name="...":

router.get('/', async (req, res) => {
  const { name } = req.query
  let countriesTotal = await getDbInfo();
  try{
    if (name) {
      let countryName = await countriesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
      countryName.length ?
          res.status(200).send(countryName) :
          res.status(404).send('Country not found');
    } else {
      res.status(200).send(countriesTotal);          // no tengo name, mando todo
    }
  }catch (error) {
  return res.status(404).json({ message: "Country not found" })
  }
})

// GET => QUE ME TRAIGA EL DETALLE DE UN PAÍS POR ID        
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   res.send(`Not implemented yet: get country with id ${id}`);
// });

// /countries/{idPais}:

router.get('/:id', async (req, res, next) =>{
  const { id } = req.params;
  let aux = id.toUpperCase()                                // valor en mayús.. id: COL
  try{
    const countryId = await Country.findByPk(aux, {         // con el findByPk recibo un id y busco ese id
      include: Activity
    })
    res.json(countryId)
  }catch(err){
      next(err)
  }
})

module.exports = router;