import { getEvent } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: EventPageProps) {
  const slug = params.slug;

  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

const EventPage = async ({ params }: EventPageProps) => {
  const slug = params.slug;
  const event = await getEvent(slug);

  return (
    <main>
      <section className="relative flex overflow-hidden justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="z-10 flex flex-col relative gap-6 lg:gap-16 lg:flex-row">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <h1 className="heading1 lg:text-6xl mb-2 mt-1 whitespace-nowrap lg: text-5xl">
              {event.name}
            </h1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto w-[95vw] sm:w-full py-2 rounded-md border-white/10 border-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-16 min-h-[75vh]">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
};

export default EventPage;

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}
function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </h2>
  );
}
