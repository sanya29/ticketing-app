import { ExpirationCompleteEvent, Publisher, Subjects } from '@git-tix-ss/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete
}