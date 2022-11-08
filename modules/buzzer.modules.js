// Helper database yang dibuat
const mysql = require("../helpers/database")
// Validation input
const Joi = require('joi')

class _blog {

     listSensor  = async () => {
          try {
               const list = await mysql.query(
                    // 'SELECT * FROM tangkap_sensor_industry_2',
                    'select * from `klasifikasi_industry` order by id desc limit 1',
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
                    sensor1: Joi.number().required(),
                    sensor2: Joi.number().required(),
                    sensor3: Joi.number().required(),
                    sensor4: Joi.number().required(),
                    sensor5: Joi.number().required(),
                    sensor6: Joi.number().required(),




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
                    "INSERT INTO tangkap_sensor_industry_2(sensor1, sensor2, sensor3, sensor4, sensor5, sensor6) VALUES (?, ?, ?, ?, ?, ?)",

                    [body.sensor1, body.sensor2, body.sensor3, body.sensor4, body.sensor5, body.sensor6]
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
     

