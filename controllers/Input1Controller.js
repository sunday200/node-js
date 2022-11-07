const { Router } = require("express")
const m$todo = require('../modules/input1.modules')
const response = require('../helpers/response')

const TodoController = Router()


TodoController.get('/', async (req, res, next) => {
     const add = await m$todo.listSensor()

     response.sendResponse(res, add)
})

module.exports = TodoController