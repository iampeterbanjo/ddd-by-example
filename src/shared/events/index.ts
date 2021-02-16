import EventEmitter from 'eventemitter3';
import { getUniqueId } from '../utils/getUniqueId';

type EventTypes = 'TICKET_PURCHASED';

interface IDispatchEvent {
  (type: EventTypes): void;
}

const events = new EventEmitter();

class Event {
  date: Date;
  type: string;
  eventId: string;

  // private constructor to only expose static methods
  // to restrict the types of events that can be created
  private constructor(type: EventTypes) {
    this.date = new Date();
    this.type = type;
    this.eventId = getUniqueId();
  }

  // every new event type will have a static method
  // this way if we wanted to add rules around
  // an event we can. e.g. tickets cannot be purchased
  // outside business hours
  public static creatTicketPurchasedEvent() {
    return new Event('TICKET_PURCHASED');
  }
}

export const dispatchEvent: IDispatchEvent = (type: EventTypes) => {
  events.emit(type, Event.creatTicketPurchasedEvent());
};
