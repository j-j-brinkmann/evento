import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type PaginationControlsProps = {
  prevPath: string;
  nextPath: string;
};

const btnStyles =
  "flex items-center text-white gap-x-2 px-5 py-3 bg-white/5 hover:bg-white/25 transition duration-300 ease-in-out rounded-md opacity-75";

const PaginationControls = ({
  prevPath,
  nextPath,
}: PaginationControlsProps) => {
  return (
    <section className="flex justify-between w-full">
      {prevPath ? (
        <Link className={btnStyles} href={prevPath}>
          <ArrowLeftIcon /> Prev
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link className={btnStyles} href={nextPath}>
          Next <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
