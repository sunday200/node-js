const alat1Controller = require('./controllers/Input1Controller')
const alat2Controller = require('./controllers/Input2Controller')
const BuzzerController = require('./controllers/BuzzerController')
const InputAll1Controller = require('./controllers/InputAll1Controller')
const Input1adcController = require('./controllers/Input1adcController')
const InputAll2RealController = require('./controllers/InputAll2RealController')
const KlasifikasiController = require('./controllers/KlasifikasiController')



// Define url API in Here
const _routes = [
     ['/alat-1', alat1Controller], // untuk alat 1
     ['/alat-2', alat2Controller], // untuk alat 2
     ['/buzzer-1', BuzzerController], // untuk buzzer
     ['/alat-1-all', InputAll1Controller], // untuk alat-1 semua nilai
     ['/hasil-1', KlasifikasiController], // untuk coba coba
     ['/alat-1-adc', Input1adcController], // untuk alat 1 adc resistansi dan ppm (sementara dipakai untuk ambil dataset)
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