import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError, currentUser } from '@git-tix-ss/common'
import { createTicketRouter } from './routes/new'
import { showTicketRouter } from './routes/show'
import { indexTicketRouter } from './routes/index'
import { updateTicketRouter } from './routes/update'

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
app.use(createTicketRouter)
app.use(showTicketRouter)
app.use(indexTicketRouter)
app.use(updateTicketRouter)

app.all('*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app };