const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./countriesRouter.js')
const activitiesRouter = require('./activitiesRouter.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRouter)     // cuando venga una request a /countries lo mando al countriesRouter
router.use('/activities', activitiesRouter)

router.use('/', (req, res, next) => {
    res.status(200).json('Todo en orden')
})

module.exports = router;
