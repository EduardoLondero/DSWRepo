import 'reflect-metadata'
import express from 'express'
import { neigbourhoodRouter } from './user/neighbourhood.routes.js'
import { localityRouter } from './user/locality.routes.js'
import { userRouter } from './user/user.routes.js'
import { membershipRouter } from './user/membership.routes.js'
import { membershipTypeRouter } from './user/membershipType.routes.js'
import { paymentRouter } from './user/payment.routes.js'
import { sportRouter } from './user/sport.routes.js'
import { orm } from './shared/db/orm.js'
import { RequestContext } from '@mikro-orm/core'


const app = express()
app.use(express.json())

//luego de los middlewares base
app.use((req, res, next) => {
  RequestContext.create(orm.em, next)
})
//antes de las rutas y middlewares de negocio
app.use('/api/user/sport', sportRouter)
app.use('/api/user/payment', paymentRouter)
app.use('/api/user/membershipType', membershipTypeRouter)
app.use('/api/user/membership', membershipRouter)
app.use('/api/user/neighbourhood', neigbourhoodRouter) 
app.use('/api/user/locality', localityRouter)
app.use('/api/user', userRouter )


//app.use('/api/items', itemRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

//await syncSchema() //never in production
 
app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})