import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'
import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'

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

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.all('*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app };