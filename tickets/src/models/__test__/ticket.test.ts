import { Ticket } from "../ticket"

it('implements optimistic concurrency control', async (done) => {
    // create an instance of a ticket
    const ticket = Ticket.build({
        title: 'concert',
        price: 5,
        userId: '123'
    })

    // save the ticket to the db
    await ticket.save()

    // fetch the ticket twice
    const firstInstance = await Ticket.findById(ticket.id)
    const secondInstance = await Ticket.findById(ticket.id)

    // make two diff changes to the tickets
    firstInstance!.set({ price: 10 })
    secondInstance!.set({ price: 15 })

    // save the first fetched ticket
    await firstInstance!.save()

    // save the second fetched ticket and expect an error
    try {
        await secondInstance!.save()
    } catch (err) {
        return done();
    }

    throw new Error('Should not reach this point')

    /* doesn't work well w jest
     *
     * expect(async () => {
     * await secondInstance!.save()
     * }).toThrow()
     */
})

it('increments the version number on multiple saves', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        userId: '123'
    })

    await ticket.save()
    expect(ticket.version).toEqual(0)
    await ticket.save()
    expect(ticket.version).toEqual(1)
    await ticket.save()
    expect(ticket.version).toEqual(2)
})