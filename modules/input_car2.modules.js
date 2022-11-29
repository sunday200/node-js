// Helper database yang dibuat
const mysql = require("../helpers/database")
// Validation input
const Joi = require('joi')

class _blog {

     listSensor  = async () => {
          try {
               const list = await mysql.query(
                    'SELECT * FROM tangkap_sensor_car_o2',
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
                    O2_adc: Joi.number().required(),
                    O2_persen: Joi.number().required()
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
                    "INSERT INTO tangkap_sensor_car_o2(O2_adc, O2_persen) VALUES (?,?)",

                    [body.O2_adc, body.O2_persen]
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
     

