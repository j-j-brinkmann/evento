import EventsList from "@/components/EventsList";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props) {
  const city = params.city;

  return {
    title: city === "all" ? "All events" : `Events in ${capitalize(city)}`,
  };
}

// validierung das page eine positive zahl ist
const pageNumberSchema = z.coerce.number().int().positive().optional();

const Events = async ({ params, searchParams }: EventsPageProps) => {
  const city = params.city;

  // validierung das page
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number!");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <h1 className="heading1 lg:text-6xl mb-16">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </h1>

      {/* suspense ermöglicht es das wenn wir zb etwas fetchen nicht alles geblockt wird. wie in diesem fall wird während des fetch vorgangs schon der titel der seite angezeigt */}
      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        {/* <EventsList city={city} page={+page} /> */}
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
};

export default Events;
