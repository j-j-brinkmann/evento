import React from "react";
import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./PaginationControls";

type EventListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: EventListProps) => {
  const { events, totalCount } = await getEvents(city, page);

  const prevPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 9 * page ? `/events/${city}?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls prevPath={prevPath} nextPath={nextPath} />
    </section>
  );
};

export default EventsList;
