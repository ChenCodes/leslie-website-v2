"use client";

import Link from "next/link";
import { Video, Phone, BatteryCharging, Lock } from "lucide-react";

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
    className: "h-5 w-5 text-[#25D366]",
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
      className="group relative flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50 p-4 md:p-5"
    >
      <div className="absolute right-3 top-3">
        <CaseByteIcon slug={item.slug} />
      </div>
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1 pr-6">
        {item.name}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 pr-6">
        {item.title}
      </p>
    </Link>
  );
}
