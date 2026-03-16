"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PasswordDialog from "./PasswordDialog";

export type WorkProject = {
  name: string;
  project: string;
  status: string;
  slug: string;
  passwordProtected?: boolean;
  password?: string;
  /** Preview image or GIF path (e.g. /work/whatsapp-polls/polls-lunch-club.png). Use a .gif file for animation. */
  previewImage?: string;
};

type WorkCardProps = {
  project: WorkProject;
};

export default function WorkCard({ project }: WorkCardProps) {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);
  const isProtected = project.passwordProtected === true;

  const handleCardClick = () => {
    if (isProtected) {
      setDialogOpen(true);
    } else {
      router.push(`/work/${project.slug}`);
    }
  };

  const handlePasswordSubmit = (password: string): boolean => {
    const expected = project.password ?? "";
    if (password === expected) {
      router.push(`/work/${project.slug}`);
      return true;
    }
    return false;
  };

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        data-cursor-label="View case study"
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCardClick();
          }
        }}
        className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50"
      >
        <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
          {project.previewImage ? (
            <Image
              src={project.previewImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <span className="text-zinc-400 dark:text-zinc-500 text-sm">[GIF placeholder]</span>
          )}
          {isProtected && (
            <span
              className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700/90 text-white dark:bg-zinc-600/90"
              title="Password protected"
              aria-label="Password protected"
            >
              <LockIcon className="h-4 w-4" />
            </span>
          )}
        </div>
        <div className="p-4 md:p-5">
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
            {project.name}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
            {project.project}
          </p>
          <span
            className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${
              project.status === "Shipped"
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
                : project.status === "Concept"
                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
                  : "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
            }`}
          >
            {project.status}
          </span>
        </div>
      </article>

      <PasswordDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        projectName={project.name}
        onSubmit={handlePasswordSubmit}
      />
    </>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
