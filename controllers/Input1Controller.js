const { Router } = require("express")
const m$todo = require('../modules/input1.modules')
const response = require('../helpers/response')

const SensorController = Router()


/**
 * Add Todo
 * @param {string} title
 * @param {string} description 
 */

SensorController.get('/', async (req, res, next) => {
     const add = await m$todo.listSensor()

     response.sendResponse(res, add)
})

SensorController.post("/", async (req, res, next) => {
     const add = await m$todo.addSensor(req.body)

     response.sendResponse(res, add)
})


module.exports = SensorController