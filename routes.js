const Buzzer1Controller = require('./controllers/Buzzer1Controller')
const Buzzer2Controller = require('./controllers/Buzzer2Controller')

const Input1adcController = require('./controllers/Input1adcController')
const Input1resController = require('./controllers/Input1resController')
const Input1ppmController = require('./controllers/Input1ppmController')
const Input1roController = require('./controllers/Input1roController')

const Input2adcController = require('./controllers/Input2adcController')
const Input2resController = require('./controllers/Input2resController')
const Input2ppmController = require('./controllers/Input2ppmController')
const Input2roController = require('./controllers/Input2roController')

const Input1ALKOHOLadcController = require('./controllers/Input1ALKOHOLadcController')
const Input1ALKOHOLresController = require('./controllers/Input1ALKOHOLresController')
const Input1ALKOHOLppmController = require('./controllers/Input1ALKOHOLppmController')
const Input1ALKOHOLroController = require('./controllers/Input1ALKOHOLroController')

const Input2ALKOHOLadcController = require('./controllers/Input2ALKOHOLadcController')
const Input2ALKOHOLresController = require('./controllers/Input2ALKOHOLresController')
const Input2ALKOHOLppmController = require('./controllers/Input2ALKOHOLppmController')
const Input2ALKOHOLroController = require('./controllers/Input2ALKOHOLroController')

const InputCar1Controller = require('./controllers/InputCar1Controller')
const InputCar2Controller = require('./controllers/InputCar2Controller')


// Define url API in Here
const _routes = [
     ['/buzzer-1', Buzzer1Controller], // untuk buzzer alat 1
     ['/buzzer-2', Buzzer2Controller], // untuk buzzer alat 2

     ['/alat-1-adc', Input1adcController], // untuk alat 1 adc 
     ['/alat-1-res', Input1resController], // untuk alat 1 resistansi 
     ['/alat-1-ppm', Input1ppmController], // untuk alat 1 ppm 
     ['/alat-1-ro', Input1roController], // untuk alat 1 ro 

     ['/alat-2-adc', Input2adcController], // untuk alat 2 adc
     ['/alat-2-res', Input2resController], // untuk alat 2 resistansi
     ['/alat-2-ppm', Input2ppmController], // untuk alat 2 ppm
     ['/alat-2-ro', Input2roController], // untuk alat 2 ro 

     ['/1-alkohol-adc', Input1ALKOHOLadcController], // untuk ambil dataset
     ['/1-alkohol-res', Input1ALKOHOLresController], // untuk ambil dataset
     ['/1-alkohol-ppm', Input1ALKOHOLppmController], // untuk ambil dataset
     ['/1-alkohol-ro', Input1ALKOHOLroController], // untuk ambil dataset

     ['/2-alkohol-adc', Input2ALKOHOLadcController], // untuk ambil dataset
     ['/2-alkohol-res', Input2ALKOHOLresController], // untuk ambil dataset
     ['/2-alkohol-ppm', Input2ALKOHOLppmController], // untuk ambil dataset
     ['/2-alkohol-ro', Input2ALKOHOLroController], // untuk ambil dataset


     ['/alat-carCO', InputCar1Controller], // CAR CO untuk pengambilan dataser Enose For Car
     ['/alat-carO2', InputCar2Controller], // CAR 02 untuk pengambilan dataset Enose For Car
]

// https://localhost:5001/tes

const routes = (app) => {
     _routes.forEach((route) => {
          const [ url, controller ] = route
          app.use(`${url}`, controller)
     })
}

module.exports = routes 

