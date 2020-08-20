import { PaymentCreatedEvent, Publisher, Subjects } from "@git-tix-ss/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated
}