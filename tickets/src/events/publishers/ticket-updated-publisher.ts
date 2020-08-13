import { Publisher, Subjects, TicketUpdatedEvent } from '@git-tix-ss/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
