"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import PasswordDialog from "./PasswordDialog";
import { unlockCaseStudy } from "@/app/work/actions";

export type WorkProject = {
  name: string;
  project: string;
  slug: string;
  passwordProtected?: boolean;
  /** Preview image or GIF path (e.g. /work/whatsapp-polls/polls-lunch-club.png). Use a .gif file for animation. */
  previewImage?: string;
  /** Optional CSS object-position for better thumbnail cropping (e.g. "50% 25%"). */
  previewObjectPosition?: string;
  /** Composed thumbnail; takes precedence over `previewImage`. */
  preview?: React.ReactNode;
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

  const handlePasswordSubmit = async (password: string): Promise<boolean> => {
    const success = await unlockCaseStudy(project.slug, password);
    if (success) router.push(`/work/${project.slug}`);
    return success;
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
        className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 dark:hover:border-emerald-500/30 focus-visible:outline-2 focus-visible:outline-emerald-500"
      >
        <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
          {project.preview ? (
            project.preview
          ) : project.previewImage ? (
            <Image
              src={project.previewImage}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={
                project.previewObjectPosition
                  ? { objectPosition: project.previewObjectPosition }
                  : undefined
              }
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <span className="text-zinc-400 dark:text-zinc-500 text-sm">[GIF placeholder]</span>
          )}
          {isProtected && (
            <span
              className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/85 dark:bg-zinc-900/85 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 shadow-sm backdrop-blur"
              title="Password protected"
            >
              <LockIcon className="h-3.5 w-3.5" />
              Protected
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-50 mb-1.5">
            {project.name}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {project.project}
          </p>
          <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
            View case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
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
