import { Publisher, OrderCreatedEvent, Subjects } from '@git-tix-ss/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated 
}