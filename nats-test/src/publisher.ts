import nats from 'node-nats-streaming'

console.clear()

const stan = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
}) // aka client

stan.on('connect', () => {
    console.log('Publisher connected to NATS')

    const data = JSON.stringify({
        id: '123',
        title: 'concert',
        price: 20
    }) // nats can only accept json strings, not objects straight up

    // this "event" is referred to as a message in nats docs
    stan.publish('ticket:created', data, () => {
        console.log('Event published')
    })
})
