const { Router } = require("express");

const router = Router();


// GET => QUE ME RESPONDA CON TODOS LOS PAISES Y/O BUSQUE
router.get("/", (req, res) => {
  res.send("Not implemented yet: get all countries or search by name"); 
});

// GET => QUE ME TRAIGA EL DETALLE DE UN PAÍS POR ID
router.get("/:id", (req, res) => {
  res.send("Not implemented yet: get country by id");
});



module.exports = router;