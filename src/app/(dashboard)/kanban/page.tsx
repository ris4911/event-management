"use client";
import { Kanban } from "@/app/(dashboard)/kanban/components/Kanban";
import { SearchBar } from "@/components/dashboard/SearchBar";
import { useState } from "react";

export default function KanbanPage() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <SearchBar
        placeholder="Search by Name, Note, Department"
        onSearch={(query) => setSearchQuery(query)}
      />
      <div className="border border-border-color rounded-[8px] p-6 bg-gray-f7f8f9">
        <Kanban searchQuery={searchQuery} />
      </div>
    </>
  );
}
