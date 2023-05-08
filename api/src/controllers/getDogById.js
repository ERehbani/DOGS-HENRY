const axios = require('axios');
const URL = 'https://api.thedogapi.com/v1/breeds';


const getDogById = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios(`${URL}/${id}`)
        

            if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`)

                const character = {
                    id: data.id,
                    name: data.name,
                    image: data.image,
                    origin: data.origin
                }
    
                return res.status(200).json(character)
    }
    catch (error) {
        console.log(error.response.data.error)
    }


}

module.exports = getDogById
