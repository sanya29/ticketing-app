import { Publisher, Subjects, TicketCreatedEvent } from '@git-tix-ss/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
