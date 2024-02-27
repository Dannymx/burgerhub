"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";

export const SearchBox = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query.length) {
      params.set("q", query);
    } else {
      params.delete("q");
    }

    replace(`/?${params.toString()}`);
  }, 1000);

  return (
    <>
      <Search className="absolute left-2 text-muted-foreground" size={20} />
      <Input
        className="pl-8 text-md"
        placeholder="Type to search"
        size={18}
        onChange={(e) => handleSearch(e.target.value.trim())}
      />
    </>
  );
};
