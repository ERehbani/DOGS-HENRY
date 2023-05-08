const { Router } = require('express');
const { getDogByid } = require('../controllers/getDogById');
const { default: axios } = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getDogs = async () => {
    const url = await axios.get('https://api.thedogapi.com/v1/breeds')
    const info = await url.data.map(dog => {
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            height: dog.height.metric,
            weight: dog.weight.metric,
            life_span: dog.life_span
        }
        return info;
    })
}

router.get("/breeds/:id", (req, res) => {
    getDogByid(req, res)
})
module.exports = router;
