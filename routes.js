const alat1Controller = require('./controllers/Input1Controller')
const alat2Controller = require('./controllers/Input2Controller')
const BuzzerController = require('./controllers/BuzzerController')
const InputAll1Controller = require('./controllers/InputAll1Controller')
const Input1adcController = require('./controllers/Input1adcController')
const Input1resController = require('./controllers/Input1resController')
const Input1ppmController = require('./controllers/Input1ppmController')
const Input1roController = require('./controllers/Input1roController')

const Input2adcController = require('./controllers/Input2adcController')
const Input2resController = require('./controllers/Input2resController')
const Input2ppmController = require('./controllers/Input2ppmController')

const InputCar1Controller = require('./controllers/InputCar1Controller')
const InputCar2Controller = require('./controllers/InputCar2Controller')

const InputAll2RealController = require('./controllers/InputAll2RealController')
const KlasifikasiController = require('./controllers/KlasifikasiController')



// Define url API in Here
const _routes = [
     ['/alat-1', alat1Controller], // untuk alat 1
     ['/alat-2', alat2Controller], // untuk alat 2
     ['/buzzer-1', BuzzerController], // untuk buzzer
     ['/alat-1-all', InputAll1Controller], // untuk alat-1 semua nilai
     ['/hasil-1', KlasifikasiController], // untuk coba coba
     
     ['/alat-1-adc', Input1adcController], // untuk alat 1 adc (sementara dipakai untuk ambil dataset)
     ['/alat-1-res', Input1resController], // untuk alat 1 resistansi (sementara dipakai untuk ambil dataset)
     ['/alat-1-ppm', Input1ppmController], // untuk alat 1 ppm (sementara dipakai untuk ambil dataset)
     ['/alat-1-ro', Input1roController], // untuk alat 1 ro (sementara dipakai untuk ambil dataset)

     ['/alat-2-adc', Input2adcController], // untuk alat 2 adc(sementara dipakai untuk ambil dataset)
     ['/alat-2-res', Input2resController], // untuk alat 2 resistansi(sementara dipakai untuk ambil dataset)
     ['/alat-2-ppm', Input2ppmController], // untuk alat 2 ppm (sementara dipakai untuk ambil dataset)

     ['/alat-carCO', InputCar1Controller], // CAR CO
     ['/alat-carO2', InputCar2Controller], // CAR 02

     ['/alat-2-fix', InputAll2RealController] // untuk alat 2 adc resistansi dan ppm (sementara dipakai untuk ambil dataser)

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