import express from "express"
import * as controller from "./controller"
import { Request, Response } from 'express'
const routes = express.Router()

routes.route('/').get((req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to Quick Backend',
  })
})

const restRoutes = express.Router()

//Id refers to timestamp
restRoutes.route('/blockchain/blocks/:id').get(controller.getBlockHash)

//Id refers to bashId
restRoutes.route('/blockchain/:id').get(controller.getBlockHashTransaction)

export default restRoutes;