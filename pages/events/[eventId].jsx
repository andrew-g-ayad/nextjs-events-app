import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventDetail from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import EventSummary from "../../components/event-detail/event-summary";
const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No Event found! </p>;
  } else {
    return (
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    );
  }
};

export default EventDetailPage;