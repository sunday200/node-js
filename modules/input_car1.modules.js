// Helper database yang dibuat
const mysql = require("../helpers/database")
// Validation input
const Joi = require('joi')

class _blog {

     listSensor  = async () => {
          try {
               const list = await mysql.query(
                    'SELECT * FROM tangkap_sensor_car_co',
                    []
               )
     
               return {
                    status : true,
                    data: list
               }
          }  catch (error) {
               console.error("list data sensor Error", error)
               
               return {
                    status : false,
                    error
               }
          }}

     addSensor = async (body) => {
          try {
               const schema = Joi.object({
                    CO_adc: Joi.number().required(),
                    CO_rs: Joi.number().required(),
                    CO_ro: Joi.number().required(),
                    CO_ppm: Joi.number().required()
               })

               const validation = schema.validate(body)

               if(validation.error) {
                    const errorDetails = validation.error.details.map(detail => detail.message)
                    
                    return {
                         status: false,
                         code: 422,
                         error: errorDetails.join(", ")
                    }
               }
          
               const add = await mysql.query(
                    "INSERT INTO tangkap_sensor_car_co(CO_adc, CO_rs, CO_ro, CO_ppm) VALUES (?,?,?,?)",

                    [body.CO_adc, body.CO_rs, body.CO_ro, body.CO_ppm]
               )
               return{
                    status : true,
                    data: add
               }

          } catch (error) {
               console.error("addnilai sensor module Error: ", error)

               return {
                    status: false,
                    error
               }

          }
     }


}

module.exports = new _blog()
     

