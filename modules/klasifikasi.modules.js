// Helper database yang dibuat
const mysql = require("../helpers/database")
// Validation input
const Joi = require('joi')

class _blog {

     listSensor  = async () => {
          try {
               const list = await mysql.query(
                    // 'SELECT * FROM tangkap_sensor_industry_2',
                    'select * from `klasifikasi_try` order by id desc limit 1',
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
                    hasil: Joi.number().required(),




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
                    "INSERT INTO klasifikasi_try(hasil) VALUES (?)",

                    [body.hasil]
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
     

