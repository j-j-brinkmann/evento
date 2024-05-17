import SearchForm from "@/components/SearchForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="heading1 lg:text-6xl">Find events around you</h1>
      <p className="mb-12 mt7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">
          10.000 events
        </span>{" "}
        in in your area
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular: </p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/berlin">Berlin</Link>
          <Link href="/events/hamburg">Hamburg</Link>
        </div>
      </section>
    </main>
  );
}
