import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list.jsx";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";
const FilteredEventsPage = (props) => {
  const router = useRouter();

  const year = +router.query.slug[0];
  const month = +router.query.slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return <ErrorAlert>Invalid filter!</ErrorAlert>;
  }
  const events = getFilteredEvents({ year, month });
  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>No events found!</ErrorAlert>
        <div className="center">
          <Button link="/events">Back To All Events Page</Button>
        </div>
      </Fragment>
    );
  }
  return <EventList items={events} />;
};

export default FilteredEventsPage;
