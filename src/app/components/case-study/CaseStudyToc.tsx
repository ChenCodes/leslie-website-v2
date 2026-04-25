"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CaseStudySection } from "./types";

type CaseStudyTocProps = {
  sections: CaseStudySection[];
};

function TocList({ sections }: CaseStudyTocProps) {
  return (
    <ul className="space-y-2 text-sm">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className={`block text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 ${
              section.level === 3 ? "pl-4" : ""
            }`}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyToc({ sections }: CaseStudyTocProps) {
  const [open, setOpen] = useState(false);
  const hasSections = useMemo(() => sections.length > 0, [sections]);

  if (!hasSections) {
    return null;
  }

  return (
    <>
      <div className="lg:hidden mb-8">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            render={
              <Button variant="outline" size="sm">
                Jump to section
              </Button>
            }
          />
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>On this page</DialogTitle>
            </DialogHeader>
            <TocList sections={sections} />
          </DialogContent>
        </Dialog>
      </div>

      <aside className="hidden lg:block lg:col-span-4">
        <div className="sticky top-28 rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
          <p className="text-sm font-medium mb-3">On this page</p>
          <TocList sections={sections} />
        </div>
      </aside>
    </>
  );
}
