import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError, currentUser } from '@git-tix-ss/common'

import { deleteOrderRouter } from './routes/delete'
import { indexOrderRouter } from './routes/index'
import { newOrderRouter } from './routes/new'
import { showOrderRouter } from './routes/show'

const app = express()
// traffic is going to be proxied here through ingress-nginx and we want
// express to trust it
app.set('trust proxy', true)
app.use(json());
app.use(
    cookieSession({
        signed: false, // disable encryption cause JWT is already tamper-resistant
        //secure: true // to only be used if https connection
        secure: process.env.NODE_ENV !== 'test' //true in all env's except test
    })
)

app.use(currentUser)
app.use(deleteOrderRouter)
app.use(indexOrderRouter)
app.use(newOrderRouter)
app.use(showOrderRouter)

app.all('*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app };