import nats from 'node-nats-streaming'
import { TicketCreatedPublisher } from './events/ticket-created-publisher'

console.clear()

const stan = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
}) // aka client

stan.on('connect', async () => {
    console.log('Publisher connected to NATS')

    const publisher = new TicketCreatedPublisher(stan)

    try {
        await publisher.publish({
            id: '123',
            title: 'concert',
            price: 20,
            userId: 'laskhjdfls'
        })
    } catch (err) {
        console.error(err)
    }
    

    // const data = JSON.stringify({
    //     id: '123',
    //     title: 'concert',
    //     price: 20
    // }) // nats can only accept json strings, not objects straight up

    // // this "event" is referred to as a message in nats docs
    // stan.publish('ticket:created', data, () => {
    //     console.log('Event published')
    // })
})
