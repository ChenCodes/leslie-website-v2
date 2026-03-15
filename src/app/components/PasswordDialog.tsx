"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type PasswordDialogProps = {
  open: boolean;
  onClose: () => void;
  projectName: string;
  onSubmit: (password: string) => boolean;
};

export default function PasswordDialog({
  open,
  onClose,
  projectName,
  onSubmit,
}: PasswordDialogProps) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) setError("");
  }, [open]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const password = (form.elements.namedItem("password") as HTMLInputElement)?.value ?? "";
    const success = onSubmit(password);
    if (success) {
      form.reset();
      onClose();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <LockIcon className="h-5 w-5 shrink-0" />
            <span className="text-sm font-medium">Password protected</span>
          </div>
          <DialogTitle className="text-lg">{projectName}</DialogTitle>
          <DialogDescription>
            Enter the password to view this work.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="sr-only">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              aria-invalid={!!error}
              aria-describedby={error ? "password-error" : undefined}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
            />
            {error && (
              <p id="password-error" className="mt-1.5 text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
          </label>
          <DialogFooter className="gap-2 sm:gap-0">
            <DialogClose
              className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
            >
              Cancel
            </DialogClose>
            <Button type="submit">View</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
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
