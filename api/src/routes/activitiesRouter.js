const { Router } = require('express')
const router = Router();
const { Activity, Country } = require('../db.js');
const { getActivities } = require('../controller/getApiInfo')


// POST => QUE ME CREE UNA ACTIVIDAD NUEVA
// router.post("/", (req, res) => {
  //console.log(req.body);
//   const { name, difficulty, duration, season, countryId } = req.body
//   res.send("Not implemented yet: create new activity"); 
// });

router.post('/', async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body
  const createActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countryId,
  })
  const countries = await Country.findAll({
      where: {
          id: countryId,
      }
  })
  createActivity.addCountries(countries)
  res.status(200).send(createActivity)

})

// GET => QUE ME RESPONDA CON TODAS LAS ACTIVIDADES
// router.get("/", (req, res) => {
//   res.send("Not implemented yet: get all activities");
// });

// /activities

router.get('/', async(req, res) => {
  const activities = await getActivities();
  return res.status(200).send(activities)
});


module.exports = router;