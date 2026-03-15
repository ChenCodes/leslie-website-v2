"use client";

import { toast } from "sonner";

const EMAIL = "leslieleechen@gmail.com";

export default function Footer() {
  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success(
        "Email copied, I'm looking forward to hearing from you!"
      );
    } catch {
      toast.error("Could not copy email.");
    }
  }

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8 md:px-10 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <p className="text-sm text-zinc-500 dark:text-zinc-400 tracking-wide">
        DESIGNED with <span className="text-[#b8185d] dark:text-[#fbcfe8]">♥</span> BY LESLIE
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/leslie-lee7777/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          LinkedIn
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors cursor-pointer bg-transparent border-none p-0 font-inherit"
        >
          Email
        </button>
      </div>
    </footer>
  );
}
