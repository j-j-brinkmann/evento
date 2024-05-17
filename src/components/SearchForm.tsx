"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const [searchFieldInput, setSearchFieldInput] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchFieldInput) return;

    router.push(`/events/${searchFieldInput}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-[#a5f8397a] transition focus:ring-2 focus:bg-white/10"
        type="text"
        placeholder="Search events in any city..."
        spellCheck={false}
        value={searchFieldInput}
        onChange={(e) => setSearchFieldInput(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
