// Helper database yang dibuat
const mysql = require("../helpers/database")
// Validation input
const Joi = require('joi')

class _blog {

     listSensor  = async () => {
          try {
               const list = await mysql.query(
                    'SELECT * FROM tangkap_sensor_2_res',
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
                    sensor1_res: Joi.number().required(),
                    sensor2_res: Joi.number().required(),
                    sensor3_res: Joi.number().required(),
                    sensor4_res: Joi.number().required(),
                    sensor5_res: Joi.number().required(),
                    sensor6_res: Joi.number().required()
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
                    "INSERT INTO tangkap_sensor_2_res(sensor1_res, sensor2_res, sensor3_res, sensor4_res, sensor5_res, sensor6_res) VALUES (?,?,?,?,?,?)",

                    [body.sensor1_res, body.sensor2_res, body.sensor3_res, body.sensor4_res, body.sensor5_res, body.sensor6_res]
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
     

