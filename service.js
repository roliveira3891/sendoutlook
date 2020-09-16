require('dotenv').config();
const axios = require('axios')
const URL = process.env.URL

async function dadosClientes(tecnologia){
    const url = `${URL}?tecnologia=${tecnologia}`
    const response = await axios.get(url)
    return response.data
} 

module.exports = {
    dadosClientes
}