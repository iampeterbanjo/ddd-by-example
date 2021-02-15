# Use cases

From our domain storytelling we have the following relationships which we can discuss as use cases:

1. A movie-goer buys tickets from a cashier.
2. A movie-goer can buy snacks and drinks from a concession stand.
3. A movie-goer shows their ticket to an usher.
4. When shown a ticket the usher checks the ticket and grants access to the movie-goer who showed the ticket.
5. A projectionist starts a movie.
6. A movie-goer watches a movie started by the projectionist.

## Events

At the heart of our application we will use events to decouple concerns. This means when something happens an event MUST be emitted to notify any piece of our application that needs to respond. To keep things simple, we'll use [NodeJS EventEmitter](https://nodejs.org/api/events.html#events_events).

Taking the first use case we can tell this story -

> Given a movie-goer and a cashier
> When they buy a ticket
> Then a TICKET_PURCHASE event is emitted
