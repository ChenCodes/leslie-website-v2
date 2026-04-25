import type { ReactNode } from "react";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import CaseStudyToc from "./CaseStudyToc";
import type { CaseStudySection } from "./types";

type CaseStudyLayoutProps = {
  title: string;
  backHref: string;
  backLabel: string;
  sections?: CaseStudySection[];
  children: ReactNode;
};

export default function CaseStudyLayout({
  title,
  backHref,
  backLabel,
  sections = [],
  children,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 px-6 md:px-10 max-w-6xl mx-auto pb-16 w-full">
        <Link
          href={backHref}
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-6 inline-block"
        >
          {backLabel}
        </Link>
        <h1 className="text-2xl font-semibold mb-8">{title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <section className="lg:col-span-8 min-w-0">{children}</section>
          <CaseStudyToc sections={sections} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
