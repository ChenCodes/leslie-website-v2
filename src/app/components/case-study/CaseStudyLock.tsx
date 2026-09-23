"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import PasswordDialog from "../PasswordDialog";
import { unlockCaseStudy } from "@/app/work/actions";

type CaseStudyLockProps = {
  slug: string;
  projectName: string;
};

export default function CaseStudyLock({ slug, projectName }: CaseStudyLockProps) {
  const router = useRouter();
  const unlockedRef = useRef(false);

  const handleSubmit = async (password: string) => {
    const success = await unlockCaseStudy(slug, password);
    if (success) {
      unlockedRef.current = true;
      router.refresh();
    }
    return success;
  };

  return (
    <>
      <p className="text-zinc-600 dark:text-zinc-400">
        This case study is password protected.
      </p>
      <PasswordDialog
        open
        onClose={() => {
          if (!unlockedRef.current) router.push("/");
        }}
        projectName={projectName}
        onSubmit={handleSubmit}
      />
    </>
  );
}
