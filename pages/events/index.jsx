import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search.jsx";
import { getAllEvents } from "../../dummy-data";
const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={allEvents}></EventList>
    </Fragment>
  );
};

export default AllEventsPage;
