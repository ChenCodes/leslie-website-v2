"use client";

import Link from "next/link";
import { Video, Phone, BatteryCharging, Lock, ArrowUpRight } from "lucide-react";

export type CaseByteItem = {
  name: string;
  title: string;
  slug: string;
};

type CaseByteCardProps = {
  item: CaseByteItem;
};

function CaseByteIcon({ slug }: { slug: string }) {
  const commonProps = {
    className: "h-4 w-4",
    "aria-hidden": true,
  } as const;

  if (slug === "whatsapp-video-messages") {
    return <Video {...commonProps} />;
  }
  if (slug === "end-call-survey-redesign") {
    return <Phone {...commonProps} />;
  }
  if (slug === "battery-restriction-dialog") {
    return <BatteryCharging {...commonProps} />;
  }
  if (slug === "messenger-e2e-security-checks") {
    return <Lock {...commonProps} />;
  }
  return null;
}

export default function CaseByteCard({ item }: CaseByteCardProps) {
  return (
    <Link
      href={`/case-bytes/${item.slug}`}
      data-cursor-label="View case byte"
      className="group relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 md:p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 dark:hover:border-emerald-500/30"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
          <CaseByteIcon slug={item.slug} />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-zinc-300 dark:text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
          aria-hidden
        />
      </div>
      <h3 className="font-semibold leading-snug text-zinc-900 dark:text-zinc-50 mb-1">
        {item.name}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.title}</p>
    </Link>
  );
}
