const { Router } = require("express")
const m$todo = require('../modules/todo.modules')
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
     const add = await m$todo.addKeluhan(req.body)

     response.sendResponse(res, add)
})

 


module.exports = TodoController