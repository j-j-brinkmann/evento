import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventModel, Prisma, PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function getEvents(city: string, page = 1) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );

  // const events: EventModel[] = await response.json();

  const events =
    city === "all"
      ? await prisma.eventModel.findMany({
          orderBy: {
            date: "asc",
          },
          take: 9,
          skip: (page - 1) * 9,
        })
      : await prisma.eventModel.findMany({
          where: {
            city: capitalize(city),
          },
          orderBy: {
            date: "asc",
          },
          take: 9,
        });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.eventModel.count();
  } else {
    totalCount = await prisma.eventModel.count({
      where: {
        city: capitalize(city),
      },
    });
  }
  return { events, totalCount };
}

export async function getEvent(slug: string) {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const event: EventModel = await response.json();

  const event = await prisma.eventModel.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    // mit der nextJS internen notFound() kann unsere custom not-found.tsx aufgerufen werden
    return notFound();
  }

  return event;
}
