const alat1Controller = require('./controllers/Input1Controller')
const alat2Controller = require('./controllers/Input2Controller')
const BuzzerController = require('./controllers/BuzzerController')


// Define url API in Here
const _routes = [
     ['/alat-1', alat1Controller],
     ['/alat-2', alat2Controller],
     ['/buzzer-1', BuzzerController]

]

// https://localhost:5001/tes

const routes = (app) => {
     _routes.forEach((route) => {
          const [ url, controller ] = route
          app.use(`${url}`, controller)
     })
}

module.exports = routes 

// kalo class exports nya harus pake new