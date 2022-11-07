const { Router } = require("express")
const m$todo = require('../modules/input1.modules')
const response = require('../helpers/response')

const TodoController = Router()


/**
 * Add Todo
 * @param {string} title
 * @param {string} description 
 */

TodoController.get('/', async (req, res, next) => {
     const add = await m$todo.listSensor()

     response.sendResponse(res, add)
})

TodoController.post("/", async (req, res, next) => {
     const add = await m$todo.addSensor(req.body)

     response.sendResponse(res, add)
})


module.exports = TodoController