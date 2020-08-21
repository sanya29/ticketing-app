import request from 'supertest'
import { app } from '../../app'
import mongoose from 'mongoose'
import { Order } from '../../models/order'
import { OrderStatus } from '@git-tix-ss/common'
import { stripe } from '../../stripe'
import { Payment } from '../../models/payment'

// jest.mock('../../stripe')

it('returns a 404 when purchasing an order that does not exist', () => {
    // await request(app)
    // .post('/api/payments')
    // .set('Cookie', global.signin())
    // .send({
    //     token: 'aslkdfh',
    //     orderId: mongoose.Types.ObjectId().toHexString()
    // })
    // .expect(404)
})

it('returns a 401 when purchasing an order that doesn\'t belong to the user',  () => {
    // const order = Order.build({
    //     id: mongoose.Types.ObjectId().toHexString(),
    //     userId: mongoose.Types.ObjectId().toHexString(),
    //     version: 0,
    //     price: 20,
    //     status: OrderStatus.Created
    // })
    // await order.save()

    // await request(app)
    // .post('/api/payments')
    // .set('Cookie', global.signin())
    // .send({
    //     token: 'aslkdfh',
    //     orderId: order.id
    // })
    // .expect(401)
})

it('returns a 400 when purchasing a cancelled order', () => {
    // const userId = mongoose.Types.ObjectId().toHexString()
    // const order = Order.build({
    //     id: mongoose.Types.ObjectId().toHexString(),
    //     userId,
    //     version: 0,
    //     price: 20,
    //     status: OrderStatus.Cancelled
    // })
    // await order.save()

    // await request(app)
    // .post('/api/payments')
    // .set('Cookie', global.signin(userId))
    // .send({
    //     orderId: order.id,
    //     token: 'alksjfh'
    // })
    // .expect(400)
})

// it('returns a 201 with valid inputs', async () => {
//     const userId = mongoose.Types.ObjectId().toHexString()
//     const price = Math.floor(Math.random() * 100000)
//     const order = Order.build({
//         id: mongoose.Types.ObjectId().toHexString(),
//         userId,
//         version: 0,
//         price,
//         status: OrderStatus.Created
//     })
//     await order.save()

//     await request(app)
//     .post('/api/payments')
//     .set('Cookie', global.signin(userId))
//     .send({
//         token: 'tok_visa',
//         orderId: order.id
//     })
//     .expect(201)

//     const stripeCharges = await stripe.charges.list({ limit: 50 })
//     const stripeCharge = stripeCharges.data.find(charge => {
//         return charge.amount === price * 100
//     })

//     expect(stripeCharge).toBeDefined()
//     expect(stripeCharge!.currency).toEqual('usd')

//     const payment = await Payment.findOne({
//         orderId: order.id,
//         stripeId: stripeCharge!.id
//     })
//     expect(payment).not.toBeNull()

//     // mock method expectations:

//     // const chargeOptions = (stripe.charges.create as jest.Mock).mock.calls[0][0]
//     // expect(chargeOptions.source).toEqual('tok_visa')
//     // expect(chargeOptions.amount).toEqual(20 * 100)
//     // expect(chargeOptions.currency).toEqual('usd')

// })