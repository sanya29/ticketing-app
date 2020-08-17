import { Publisher, Subjects, OrderCancelledEvent } from '@git-tix-ss/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled
}