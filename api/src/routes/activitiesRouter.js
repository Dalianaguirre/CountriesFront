const { Router } = require("express");

const router = Router();


// POST => QUE ME CREE UNA ACTIVIDAD NUEVA
router.post("/", (req, res) => {
  res.send("Not implemented yet: create new activity"); 
});

// GET => QUE ME RESPONDA CON TODAS LAS ACTIVIDADES
router.get("/", (req, res) => {
  res.send("Not implemented yet: get all activities");
});



module.exports = router;