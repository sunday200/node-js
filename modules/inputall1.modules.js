// Helper database yang dibuat
const mysql = require("../helpers/database")
// Validation input
const Joi = require('joi')

class _blog {

     listSensor  = async () => {
          try {
               const list = await mysql.query(
                    'SELECT * FROM tangkap_sensor_all',
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
                    sensor1_adc: Joi.number().required(),
                    sensor2_adc: Joi.number().required(),
                    sensor3_adc: Joi.number().required(),
                    sensor4_adc: Joi.number().required(),
                    sensor5_adc: Joi.number().required(),
                    sensor6_adc: Joi.number().required(),
                    sensor1_res: Joi.number().required(),
                    sensor2_res: Joi.number().required(),
                    sensor3_res: Joi.number().required(),
                    sensor4_res: Joi.number().required(),
                    sensor5_res: Joi.number().required(),
                    sensor6_res: Joi.number().required(),
                    sensor1_ch4: Joi.number().required(),
                    sensor1_co: Joi.number().required(),
                    sensor1_h2: Joi.number().required(),
                    sensor2_co: Joi.number().required(),
                    sensor3_ch4: Joi.number().required(),
                    sensor4_nh3: Joi.number().required(),
                    sensor5_h2: Joi.number().required(),
                    sensor6_co: Joi.number().required(),
                    sensor6_h2: Joi.number().required(),
                    sensor6_c4h10: Joi.number().required()
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
                    "INSERT INTO tangkap_sensor_all(sensor1_adc, sensor2_adc, sensor3_adc, sensor4_adc, sensor5_adc, sensor6_adc, sensor1_res, sensor2_res, sensor3_res, sensor4_res, sensor5_res, sensor6_res, sensor1_ch4, sensor1_co, sensor1_h2, sensor2_co, sensor3_ch4,  sensor4_nh3, sensor5_h2, sensor6_co, sensor6_h2, sensor6_c4h10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",

                    [body.sensor1_adc, body.sensor2_adc, body.sensor3_adc, body.sensor4_adc, body.sensor5_adc, body.sensor6_adc, body.sensor1_res, body.sensor2_res, body.sensor3_res, body.sensor4_res, body.sensor5_res, body.sensor6_res, body.sensor1_ch4, body.sensor1_co, body.sensor1_h2, body.sensor2_co, body.sensor3_ch4, body.sensor4_nh3, body.sensor5_h2, body.sensor6_co, body.sensor6_h2, body.sensor6_c4h10]
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
     

