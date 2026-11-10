import type { ReactNode } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

/**
 * Shared visual building blocks for case study pages.
 * Pattern: hero → "In short" cards → per section, a GoalPanel (the why),
 * IconPoints for the framework, then "In execution" screens (the what) → StatsPanel outcomes.
 */

/** Green-highlighted word for use inside headlines. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-emerald-700 dark:text-emerald-400">{children}</span>;
}

export function CaseStudyHero({
  eyebrow,
  title,
  subtitle,
  tags,
  illustration,
  floatingTags = [],
}: {
  eyebrow: string;
  /** Wrap the key word in <HeroAccent> for the gradient treatment. */
  title: ReactNode;
  subtitle: string;
  tags: string[];
  illustration: ReactNode;
  /** Small labels floated around the illustration; `className` positions each one absolutely. */
  floatingTags?: { Icon: LucideIcon; label: string; className: string }[];
}) {
  return (
    <header className="relative mb-12 overflow-hidden rounded-3xl border border-emerald-100 dark:border-emerald-500/20 bg-linear-to-br from-emerald-50 via-white to-emerald-100/60 dark:from-emerald-500/15 dark:via-zinc-950 dark:to-zinc-900 px-6 py-10 md:px-12 md:py-14">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-emerald-300/30 dark:bg-emerald-500/10 blur-3xl"
        aria-hidden
      />
      <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            {eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h1>
          <p className="mt-5 max-w-md text-lg text-zinc-600 dark:text-zinc-400">{subtitle}</p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm">
            {tags.map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 px-3 py-1 text-zinc-700 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-xs py-6">
          {illustration}
          {floatingTags.map(({ Icon, label, className }) => (
            <span
              key={label}
              className={`absolute ${className} hidden sm:flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-200 shadow-sm`}
            >
              <Icon className="size-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

export function HeroAccent({ children }: { children: ReactNode }) {
  return (
    <span className="bg-linear-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function SectionHeading({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">
      {children}
    </h2>
  );
}

export function Divider() {
  return <hr className="border-zinc-200 dark:border-zinc-800 my-8" />;
}

export function InShortCard({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}

export function Chips({
  items,
  variant = "default",
}: {
  items: string[];
  /** "struck" shows rejected options (crossed out). */
  variant?: "default" | "struck";
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={
            variant === "struck"
              ? "rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1 text-sm text-zinc-500 dark:text-zinc-400 line-through"
              : "rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function GoalPanel({
  Icon,
  eyebrow = "The goal",
  headline,
  subtle = false,
  children,
}: {
  Icon: LucideIcon;
  eyebrow?: string;
  headline: ReactNode;
  /** Quieter treatment for supporting callouts that sit under a section's main goal. */
  subtle?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={
        subtle
          ? "mb-8 border-l-2 border-emerald-500 pl-5"
          : "mb-8 rounded-2xl border border-emerald-100 dark:border-emerald-500/20 bg-linear-to-br from-emerald-50 to-white dark:from-emerald-500/10 dark:to-zinc-950 p-6"
      }
    >
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
        <Icon className="size-4" aria-hidden />
        {eyebrow}
      </p>
      <p
        className={
          subtle
            ? "text-base md:text-lg font-medium leading-snug text-zinc-900 dark:text-zinc-50"
            : "text-lg md:text-xl font-medium leading-snug text-zinc-900 dark:text-zinc-50"
        }
      >
        {headline}
      </p>
      {children && <p className="mt-3 text-zinc-600 dark:text-zinc-400">{children}</p>}
    </div>
  );
}

export type IconPoint = {
  Icon: LucideIcon;
  label: string;
  text: ReactNode;
  /** Real UI strings, shown with the green quote rule. */
  quotes?: string[];
  chips?: string[];
};

export function IconPoints({ points, columns = 1 }: { points: IconPoint[]; columns?: 1 | 2 }) {
  return (
    <ul className={columns === 2 ? "grid gap-x-8 gap-y-5 sm:grid-cols-2" : "space-y-5"}>
      {points.map(({ Icon, label, text, quotes, chips }) => (
        <li key={label} className="flex gap-4">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
            <Icon className="size-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{label}</p>
            <p className="text-zinc-600 dark:text-zinc-400">{text}</p>
            {quotes && (
              <div className="mt-3 space-y-1 border-l-2 border-emerald-500 pl-4 text-zinc-900 dark:text-zinc-100 font-medium">
                {quotes.map((quote) => (
                  <p key={quote}>&ldquo;{quote}&rdquo;</p>
                ))}
              </div>
            )}
            {chips && (
              <div className="mt-3">
                <Chips items={chips} />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Numbered eyebrow + title, used for framework parts and key moments. */
export function NumberedLabel({
  index,
  part,
  title,
  size = "sm",
}: {
  index: number;
  part: string;
  title: string;
  size?: "sm" | "lg";
}) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 font-semibold text-white dark:text-zinc-900 ${
          size === "lg" ? "size-8 text-sm" : "size-6 text-xs"
        }`}
      >
        {index}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {part}
        </p>
        <h3
          className={`font-semibold text-zinc-900 dark:text-zinc-100 ${
            size === "lg" ? "text-lg" : "text-base"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

/** Ranked list, e.g. a content hierarchy. */
export function RankedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100"
        >
          <span className="pt-px text-xs font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">
            #{i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

/** Text beside a single phone screen; stacks on small screens. */
export function SplitWithScreen({ children, screen }: { children: ReactNode; screen: ReactNode }) {
  return (
    <div className="mb-8 grid gap-8 md:grid-cols-[1fr_15rem] items-start">
      <div className="min-w-0">{children}</div>
      <div className="max-w-60 md:max-w-none">{screen}</div>
    </div>
  );
}

export function Screen({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
}) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{caption}</figcaption>
      )}
    </figure>
  );
}

export function StatsPanel({
  Icon,
  eyebrow,
  stats,
  children,
}: {
  Icon: LucideIcon;
  eyebrow: string;
  stats: { value: string; label: string }[];
  /** Footnotes, quotes, or sources shown under the numbers. */
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 rounded-2xl bg-zinc-950 dark:bg-zinc-900 border border-zinc-950 dark:border-zinc-800 p-6 md:p-8 text-white">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-6">
        <Icon className="size-4" aria-hidden />
        {eyebrow}
      </p>
      <dl className={`grid gap-6 mb-4 ${stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {stats.map((stat) => (
          <div key={stat.value}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block text-5xl md:text-6xl font-semibold tracking-tight text-emerald-400">
                {stat.value}
              </span>
              <span className="mt-2 block text-zinc-300">{stat.label}</span>
            </dd>
          </div>
        ))}
      </dl>
      {children}
    </div>
  );
}
