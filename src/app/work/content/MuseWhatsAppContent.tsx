import Image from "next/image";
import {
  ArrowLeftRight,
  BookOpen,
  CalendarCheck,
  Mail,
  Tag,
  ArrowUpRight,
  Lightbulb,
  MapPin,
  MessageCircleHeart,
  Eye,
  History,
  Lock,
  Megaphone,
  Repeat,
  Scale,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import type { CaseStudySection } from "@/app/components/case-study/types";
import {
  CaseStudyHero,
  GoalPanel,
  HeroAccent,
  IconPoints,
  NumberedLabel,
  type IconPoint,
} from "@/app/components/case-study/blocks";

export const museWhatsAppSections: CaseStudySection[] = [
  { id: "in-short", title: "In short" },
  { id: "promotional-content", title: "Promotional content strategy" },
  { id: "activation-onboarding", title: "Privacy language that reassures users" },
  { id: "outcomes", title: "Outcomes" },
];

const flowScreens = [
  {
    step: "Step 1",
    caption: "People discover Agents in WhatsApp Settings.",
    src: "/work/muse-whatsapp/settings-agents-entry.png",
    alt: "WhatsApp Settings list with an Agents row between Notifications and Storage and data",
  },
  {
    step: "Step 2",
    caption: "The Agents page explains what Muse does and why to try it.",
    src: "/work/muse-whatsapp/agents-page.png",
    alt: "WhatsApp Agents page: Chat with your agents directly on WhatsApp, an Add an agent button, and a Miffy agent card with a Reconnect button",
  },
];

const inShortWorkstreams = [
  { name: "Promotion", goal: "Get people to try Muse across WhatsApp." },
  { name: "Activation", goal: "Build trust as people connect Muse to WhatsApp." },
];

const solutionFoundations = [
  "Locked brand taxonomy",
  "Data-backed variant testing",
  "Capability hierarchy",
  "Transparent privacy promises",
];

const launchPoints: IconPoint[] = [
  {
    Icon: Megaphone,
    label: "Where",
    text: "Our first major promotion ran in the official WhatsApp chat, where we announce notable new features.",
  },
  {
    Icon: Eye,
    label: "Why there",
    text: "We use it selectively. People open it on purpose to learn what's new, so a promotion there doesn't interrupt their workflow or an in-progress task.",
  },
  {
    Icon: Sparkles,
    label: "What it led with",
    text: "The framework above in practice: Muse's strongest value proposition, handing off everyday tasks like managing email, booking reservations, and tracking prices.",
  },
];

const agentsPagePoints: IconPoint[] = [
  {
    Icon: Settings,
    label: "Where",
    text: "The Agents page in WhatsApp Settings, where people discover they can add agents to WhatsApp.",
  },
  {
    Icon: BookOpen,
    label: "Explain before selling",
    text: "The page gives a reason to download Muse and a plain explanation of what this new kind of AI actually does. Our global user base likes to understand a feature before engaging with it, so the explanation comes first.",
  },
  {
    Icon: Zap,
    label: "What sets Muse apart",
    text: "It doesn't just answer questions. It handles tasks by connecting to your email and to sites that book reservations.",
    quotes: ["Hand off tasks like managing emails and booking tables"],
  },
];

const privacyPoints: IconPoint[] = [
  {
    Icon: Lock,
    label: "Private by default",
    text: "WhatsApp users had voiced unease about Muse knowing everything about them. Upfront disclaimers reassure them that their chat history and contacts stay isolated and private.",
    quotes: [
      "Muse cannot read your other WhatsApp chats or see your contacts unless you have taken additional action to share them.",
    ],
  },
  {
    Icon: ArrowLeftRight,
    label: "Honest about account switches",
    text: "Account-switching copy sets explicit expectations about message history when Muse moves to a new channel, keeping people informed and in control.",
    quotes: [
      "Miffy already uses another WhatsApp account...",
      "Your previous messages with Miffy won't appear in the new chat.",
    ],
  },
];

const accountSwitchPoints: IconPoint[] = [
  {
    Icon: Repeat,
    label: "When it appears",
    text: "When someone who has already chatted with Muse on one WhatsApp account connects it to a different account.",
  },
  {
    Icon: History,
    label: "What it makes clear",
    text: "That Muse is switching accounts, and that their previous messages won't carry over to the new chat.",
  },
  {
    Icon: ShieldCheck,
    label: "Consistent reassurance",
    text: "The privacy line is the same one people see the first time they activate Muse, confirming their conversations and contacts stay private from Muse.",
  },
];

const indiaFieldPoints: IconPoint[] = [
  {
    Icon: MapPin,
    label: "Meta's biggest AI and messaging market",
    text: "Our UX researchers went into the field in India to hear directly from Muse users.",
  },
  {
    Icon: MessageCircleHeart,
    label: "\u201cSo useful\u201d",
    text: "People constantly brought up how useful Muse is in their everyday lives.",
  },
  {
    Icon: Lightbulb,
    label: "Value, understood instantly",
    text: "They told researchers they understood what Muse could do for them right away, from these promotions.",
  },
];

const launchStats = [
  { value: "10M+", label: "people set up Muse personal agents in just six weeks" },
  { value: "~25%", label: "of people who set up Muse now use it daily" },
];

const bannedTerms = ["assistant", "bot", "companion", "copilot"];

const hookTerritories = [
  { name: "Task offloading and agentic delegation", winner: true },
  { name: "Administrative relief", winner: false },
  { name: "Customization", winner: false },
];

const capabilityRanking = [
  "Managing email and inbox",
  "Booking reservations",
  "Tracking prices and deals",
];

const ctaVariants = ["Try Muse", "Get Muse", "Get started", "Try it"];

function CopySample({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 rounded-lg border-l-2 border-emerald-500 bg-white dark:bg-zinc-950 px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">
      {children}
    </p>
  );
}

function WinnerBadge() {
  return (
    <span className="shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
      Winner
    </span>
  );
}

const heroTasks = [
  { Icon: Mail, label: "Managing email", className: "left-0 top-6" },
  { Icon: CalendarCheck, label: "Booking reservations", className: "right-0 top-1/2 -translate-y-1/2" },
  { Icon: Tag, label: "Tracking prices", className: "left-4 bottom-4" },
];

function HeroIllustration() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-auto" aria-hidden>
      {/* Muse bubble */}
      <path
        d="M58 30h62a38 38 0 0 1 0 76H62a38 38 0 0 1-38-38V22z"
        className="fill-emerald-200 dark:fill-emerald-300"
        stroke="#18181b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="74" cy="66" r="7" fill="none" stroke="#18181b" strokeWidth="3" />
      <circle cx="104" cy="66" r="7" fill="none" stroke="#18181b" strokeWidth="3" />
      {/* Reply bubble */}
      <path
        d="M128 92h56l26-8-10 24v26a38 38 0 0 1-38 38h-34a38 38 0 0 1 0-76z"
        fill="#faf5ec"
        stroke="#18181b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M118 124h62M118 144h34" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
      {/* Sparkles */}
      <path
        d="M168 14c2 12 6 16 18 18-12 2-16 6-18 18-2-12-6-16-18-18 12-2 16-6 18-18z"
        className="fill-emerald-500"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M200 48c1 7 4 10 11 11-7 1-10 4-11 11-1-7-4-10-11-11 7-1 10-4 11-11z"
        fill="#ffffff"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MuseWhatsAppHero() {
  return (
    <CaseStudyHero
      eyebrow="Case study · WhatsApp"
      title={
        <>
          Growing <HeroAccent>Muse</HeroAccent> on WhatsApp
        </>
      }
      subtitle="Data-backed upsells and trust-first onboarding for a personal AI agent."
      tags={["Content Design Lead", "Muse Tiger Team", "Promotion · Privacy"]}
      illustration={<HeroIllustration />}
      floatingTags={heroTasks}
    />
  );
}

export default function MuseWhatsAppContent() {
  return (
    <article>
      <h2 id="in-short" className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">In short</h2>
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            The context
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            Mark Zuckerberg tasked WhatsApp&apos;s Muse Tiger Team with growing
            the standalone Muse app.
          </p>
          <ol className="space-y-3">
            {inShortWorkstreams.map((area, i) => (
              <li key={area.name} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-xs font-semibold text-white dark:text-zinc-900">
                  {i + 1}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong className="text-zinc-900 dark:text-zinc-100">{area.name}:</strong>{" "}
                  {area.goal}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            My role
          </p>
          <p className="text-zinc-900 dark:text-zinc-100 font-semibold mb-2">Content Design Lead</p>
          <p className="text-zinc-700 dark:text-zinc-300">
            I owned the content strategy for promotion and activation, and partnered with
            legal counsel on privacy copy.
          </p>
        </div>
        <div className="sm:col-span-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
            The solution
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            One end-to-end content framework that built trust at every step,
            from first promotion to setup.
          </p>
          <ul className="flex flex-wrap gap-2">
            {solutionFoundations.map((item) => (
              <li
                key={item}
                className="rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 id="promotional-content" className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">
        Promotional content strategy
      </h2>
      <GoalPanel
        Icon={Target}
        headline={
          <>
            Make promotions feel{" "}
            <span className="text-emerald-700 dark:text-emerald-400">native</span>,
            not like intrusive marketing pop-ups.
          </>
        }
      >
        I designed the end-to-end strategy for how we upsell Muse across
        WhatsApp touchpoints, driving discovery and acquisition.
      </GoalPanel>

      <h3 className="text-lg font-semibold mt-6 mb-2">The framework</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Every promotion was built from four parts, each grounded in brand rules
        or test data:
      </p>
      <ol className="space-y-4 mb-6">
        {/* 1. Header */}
        <li className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
          <NumberedLabel index={1} part="Announcement header" title="Canonical taxonomy" />
          <CopySample>New: Meet Muse, your personal AI agent</CopySample>
          <dl className="grid gap-3 sm:grid-cols-2 text-sm mb-4">
            <div>
              <dt className="text-zinc-500 dark:text-zinc-400 mb-1">Locked brand descriptor</dt>
              <dd className="text-zinc-900 dark:text-zinc-100">&ldquo;Muse, your personal AI agent&rdquo;</dd>
            </div>
            <div>
              <dt className="text-zinc-500 dark:text-zinc-400 mb-1">Tested first-touch winner</dt>
              <dd className="text-zinc-900 dark:text-zinc-100">&ldquo;Meet Muse, your personal AI agent&rdquo;</dd>
            </div>
          </dl>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
            Strict guardrails: Muse is always referred to as{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">&ldquo;it&rdquo;</strong>, never as:
          </p>
          <ul className="flex flex-wrap gap-2">
            {bannedTerms.map((term) => (
              <li
                key={term}
                className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1 text-sm text-zinc-500 dark:text-zinc-400 line-through"
              >
                {term}
              </li>
            ))}
          </ul>
        </li>

        {/* 2. Leading line */}
        <li className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
          <NumberedLabel index={2} part="Leading line" title="Task-offloading hook" />
          <CopySample>Hand off everyday tasks&hellip;</CopySample>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
            I partnered with Data Science and Product Growth to test messaging
            across multiple territories. Leading with task offloading and agentic
            delegation (managing email, booking reservations, tracking prices)
            significantly outperformed the other hooks.
          </p>
          <ul className="space-y-2 text-sm">
            {hookTerritories.map((hook) => (
              <li key={hook.name} className="flex items-center justify-between gap-3">
                <span className={hook.winner ? "font-medium text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400"}>
                  {hook.name}
                </span>
                {hook.winner ? <WinnerBadge /> : <span className="text-xs text-zinc-400 dark:text-zinc-500">Underperformed</span>}
              </li>
            ))}
          </ul>
        </li>

        {/* 3. Body copy */}
        <li className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
          <NumberedLabel index={3} part="Body copy" title="Capability hierarchy" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
            Body copy follows the top-performing capabilities from cross-Meta
            testing, in this order:
          </p>
          <ol className="space-y-2 mb-3">
            {capabilityRanking.map((capability, i) => (
              <li
                key={capability}
                className="flex items-center gap-3 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100"
              >
                <span className="text-xs font-semibold tabular-nums text-zinc-400 dark:text-zinc-500">
                  #{i + 1}
                </span>
                {capability}
              </li>
            ))}
          </ol>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Secondary features were intentionally demoted to keep promotional
            screens high-converting.
          </p>
        </li>

        {/* 4. CTA */}
        <li className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-5">
          <NumberedLabel index={4} part="Primary CTA" title="CTA optimization" />
          <ul className="flex flex-wrap gap-2 mb-3">
            {ctaVariants.map((cta) => (
              <li
                key={cta}
                className={
                  cta === "Try Muse"
                    ? "rounded-full bg-emerald-600 dark:bg-emerald-500 px-3 py-1 text-sm font-medium text-white dark:text-zinc-950"
                    : "rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1 text-sm text-zinc-500 dark:text-zinc-400"
                }
              >
                {cta}
              </li>
            ))}
          </ul>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Of four variants, I selected{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">&ldquo;Try Muse&rdquo;</strong>{" "}
            as the incumbent top performer. The data showed it struck the best
            balance of brand clarity and low friction on in-product upsell cards.
          </p>
        </li>
      </ol>

      <h3 className="text-lg font-semibold mt-8 mb-4">In execution: Launching in the official WhatsApp chat</h3>
      <div className="mb-8 grid gap-8 md:grid-cols-[1fr_15rem] items-start">
        <IconPoints points={launchPoints} />
        <figure className="max-w-60 md:max-w-none">
          <Image
            src="/work/muse-whatsapp/muse-announcement.jpg"
            alt="Official WhatsApp chat message: New: Meet Muse, your personal AI agent. Hand off everyday tasks like managing your email, booking reservations, and tracking prices right from WhatsApp. Includes a Try Muse button."
            width={1170}
            height={2185}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
          />
        </figure>
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">In execution: The Agents page in Settings</h3>
      <IconPoints points={agentsPagePoints} />
      <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
        {flowScreens.map((screen) => (
          <figure key={screen.src}>
            <Image
              src={screen.src}
              alt={screen.alt}
              width={1170}
              height={2532}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
            />
            <figcaption className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              <strong className="text-zinc-700 dark:text-zinc-300">{screen.step}:</strong>{" "}
              {screen.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 id="activation-onboarding" className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">
        Privacy language that reassures users
      </h2>
      <GoalPanel
        Icon={ShieldCheck}
        headline={
          <>
            Build{" "}
            <span className="text-emerald-700 dark:text-emerald-400">trust</span>{" "}
            at every step of setting up Muse.
          </>
        }
      >
        Once people clicked to try Muse, I shifted to the activation flow:
        clear, reassuring onboarding copy for setting up a Muse messaging
        channel inside WhatsApp.
      </GoalPanel>

      <h3 className="text-lg font-semibold mt-6 mb-4">The framework</h3>
      <GoalPanel
        Icon={Scale}
        eyebrow="Collaborative legal and privacy framework"
        subtle
        headline={
          <>
            Partnered with{" "}
            <span className="text-emerald-700 dark:text-emerald-400">legal counsel</span>{" "}
            to remove hesitation about data security.
          </>
        }
      >
        Together we designed explicit privacy copy that tells people exactly
        what Muse can and can&apos;t access.
      </GoalPanel>
      <IconPoints points={privacyPoints} />

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: Switching Muse to a new WhatsApp account</h3>
      <div className="mb-8 grid gap-8 md:grid-cols-[1fr_15rem] items-start">
        <IconPoints points={accountSwitchPoints} />
        <figure className="max-w-60 md:max-w-none">
          <Image
            src="/work/muse-whatsapp/account-switch-sheet.png"
            alt="Bottom sheet titled Chat with Miffy on a new WhatsApp account, explaining the account switch and that Muse cannot read other chats or see contacts, with Continue and Cancel buttons"
            width={1170}
            height={2532}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
          />
        </figure>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 id="outcomes" className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">
        Outcomes
      </h2>

      <div className="mb-10 rounded-2xl bg-zinc-950 dark:bg-zinc-900 border border-zinc-950 dark:border-zinc-800 p-6 md:p-8 text-white">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-6">
          <ArrowUpRight className="size-4" aria-hidden />
          Muse took off
        </p>
        <dl className="grid gap-6 sm:grid-cols-2 mb-4">
          {launchStats.map((stat) => (
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
        <p className="mb-8 text-sm text-zinc-400">
          Totals across all Meta apps. With its sheer number of users, WhatsApp
          is known to be a primary driver of Meta&apos;s AI metrics.
        </p>
        <blockquote className="border-l-2 border-emerald-400 pl-4">
          <p className="text-lg md:text-xl font-medium leading-snug">
            &ldquo;In just a month and a half, more than 10 million people in
            the U.S. and Canada have set up Muse personal agents.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-zinc-400">
            Mark Zuckerberg, Meta Q3 2026 earnings call, October 21, 2026. Reported
            by TechCrunch:{" "}
            <a
              href="https://techcrunch.com/2026/10/21/meta-wants-to-pay-for-its-broad-ai-buildout-with-a-newly-created-class-of-stock/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              quote
            </a>
            ,{" "}
            <a
              href="https://techcrunch.com/2026/10/21/meta-says-muse-has-over-10m-users-with-shopping-a-top-activity/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white"
            >
              daily use
            </a>
            .
          </footer>
        </blockquote>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-4">In the field: India</h3>
      <IconPoints points={indiaFieldPoints} />
    </article>
  );
}
