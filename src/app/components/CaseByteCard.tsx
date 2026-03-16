"use client";

import Link from "next/link";

export type CaseByteItem = {
  name: string;
  title: string;
  slug: string;
};

type CaseByteCardProps = {
  item: CaseByteItem;
};

export default function CaseByteCard({ item }: CaseByteCardProps) {
  return (
    <Link
      href={`/case-bytes/${item.slug}`}
      data-cursor-label="View case byte"
      className="group flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50 p-4 md:p-5"
    >
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
        {item.name}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {item.title}
      </p>
    </Link>
  );
}
