"use client";
import { mockData } from "@/utils/mockData";
import { Accordion } from "@/app/(dashboard)/(event-list)/components/Accordion";
import { TaskTable } from "@/app/(dashboard)/(event-list)/components/TaskTable";
import { SearchBar } from "@/components/dashboard/SearchBar";
import { useState, useEffect, useCallback } from "react";
import { Column } from "@/app/constants/constant";

const SECTIONS = [
  { id: "todo", title: "To Do", status: "To Do" },
  { id: "inProgress", title: "In Progress", status: "In Progress" },
  { id: "inReview", title: "In Review", status: "In Review" },
  { id: "done", title: "Done", status: "Done" },
];

export function EventList() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    todo: true,
    inProgress: false,
    inReview: false,
    done: false,
  });

  const getFilteredTasks = useCallback(
    (status: string) => {
      return mockData.filter((task) => {
        if (task.status !== status) return false;

        if (!searchQuery) return true;

        return ["title", "description", "department"].some((field) => {
          const fieldValue = task[field as keyof typeof task];
          if (typeof fieldValue === "string") {
            return fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
          }
          if (Array.isArray(fieldValue)) {
            return fieldValue.some((item) =>
              item.toLowerCase().includes(searchQuery.toLowerCase()),
            );
          }
          return false;
        });
      });
    },
    [searchQuery],
  );

  useEffect(() => {
    if (!searchQuery) {
      setOpenSections({
        todo: true,
        inProgress: false,
        inReview: false,
        done: false,
      });
      return;
    }

    const newOpenSections = SECTIONS.reduce(
      (acc, { id, status }) => {
        acc[id] = getFilteredTasks(status).length > 0;
        return acc;
      },
      {} as Record<string, boolean>,
    );

    setOpenSections(newOpenSections);
  }, [searchQuery, getFilteredTasks]);

  return (
    <>
      <SearchBar
        placeholder="Search by Name, Note, Department"
        onSearch={setSearchQuery}
      />
      <div className="border border-border-color rounded-[8px] p-6 bg-gray-f7f8f9">
        <div className="bg-white border border-border-color rounded-lg pt-2 pb-4">
          {SECTIONS.map(({ id, title, status }) => {
            const tasks = getFilteredTasks(status);
            return (
              <Accordion
                key={id}
                title={title as Column}
                tasks={tasks}
                isOpen={openSections[id]}
                onToggle={() =>
                  setOpenSections((prev) => ({
                    ...prev,
                    [id]: !prev[id],
                  }))
                }
              >
                <TaskTable tasks={tasks} />
              </Accordion>
            );
          })}
        </div>
      </div>
    </>
  );
}
