import {
  ArrowUpRight,
  Briefcase,
  Flag,
  GraduationCap,
  Hand,
  ListChecks,
  MessageCircle,
  MessagesSquare,
  PenLine,
  ShieldCheck,
  Smile,
  Sparkles,
  Sticker,
  Users,
  Wand2,
} from "lucide-react";
import type { CaseStudySection } from "@/app/components/case-study/types";
import {
  Accent,
  CaseStudyHero,
  Divider,
  GoalPanel,
  HeroAccent,
  IconPoints,
  InShortCard,
  Screen,
  SectionHeading,
  SplitWithScreen,
  StatsPanel,
  type IconPoint,
} from "@/app/components/case-study/blocks";

export const aiStickersWhatsAppSections: CaseStudySection[] = [
  { id: "in-short", title: "In short" },
  { id: "problem", title: "Understanding the problem" },
  { id: "audience", title: "Understanding the audience" },
  { id: "key-user-needs", title: "Key user needs" },
  { id: "content-strategy", title: "Content strategy" },
  { id: "goal-1", title: "Goal 1: Sell and educate the feature" },
  { id: "goal-2", title: "Goal 2: Guide users through sticker creation" },
  { id: "goal-3", title: "Goal 3: Enable sticker reporting" },
  { id: "impact", title: "The impact" },
];

const audiencePoints: IconPoint[] = [
  {
    Icon: Users,
    label: "A wide range of digital literacy",
    text: "WhatsApp serves a global audience whose digital literacy is often lower than on Instagram, Messenger, or Facebook.",
  },
  {
    Icon: GraduationCap,
    label: "AI was unfamiliar",
    text: "In moderated research sessions, many participants didn't know what AI was, or how it could generate images in real time.",
  },
];

const userNeedPoints: IconPoint[] = [
  {
    Icon: PenLine,
    label: "Writing effective prompts",
    text: "People struggled to know what description would make a good sticker. They needed guidance on describing an object, an action, and a scene.",
  },
  {
    Icon: Smile,
    label: "Learning how the feature works",
    text: "People needed reassurance that creating an AI sticker was simple and approachable. Messaging had to reduce intimidation, explain the process clearly, and build confidence to try it.",
  },
  {
    Icon: Flag,
    label: "Reporting harmful content",
    text: "Because stickers are generated on the fly, people needed a clear way to report offensive images. Reports also help train Meta's AI to avoid policy-violating content.",
  },
];

const businessGoalPoints: IconPoint[] = [
  {
    Icon: MessagesSquare,
    label: "Engagement",
    text: "Increase sticker sends and overall messaging engagement.",
  },
  { Icon: Sticker, label: "Expression", text: "Expand the expressive tools available to people." },
  {
    Icon: ShieldCheck,
    label: "Integrity",
    text: "Maintain platform integrity through reporting.",
  },
];

const tonePoints: IconPoint[] = [
  {
    Icon: MessageCircle,
    label: "Conversational and plain",
    text: "To reduce intimidation around AI.",
  },
  {
    Icon: Sparkles,
    label: "Encouraging and empowering",
    text: "To highlight the creative possibilities of generating your own stickers.",
  },
];

const bannerPoints: IconPoint[] = [
  {
    Icon: PenLine,
    label: "“Describe”",
    text: "Tested well internally because it signals that making a sticker is simple, quick, and low effort.",
    quotes: ["Describe the sticker you want, and AI creates it."],
  },
  {
    Icon: Wand2,
    label: "“Create”",
    text: "Earlier research showed people were excited about creating their own stickers, so the copy leans into creativity and possibility, reinforcing complete creative control.",
    quotes: ["Turn any idea into a sticker."],
  },
];

const sheetPoints: IconPoint[] = [
  {
    Icon: ListChecks,
    label: "What it explains",
    text: "After tapping the banner, people see a sheet that covers:",
    chips: ["How it works", "Privacy implications", "The value of AI stickers"],
  },
  {
    Icon: Sticker,
    label: "Find the perfect sticker",
    text: "Generate a sticker that fits the conversation.",
    quotes: ["Just right for your chat"],
  },
  {
    Icon: Sparkles,
    label: "Express your creativity",
    text: "Bring stickers to life with your own descriptions.",
  },
];

const creationPoints: IconPoint[] = [
  {
    Icon: Sparkles,
    label: "Prompt examples",
    text: "The creation screen shows an example prompt with the sticker it made. I wrote a rotating set, each with an object, an action, and a scene, so people learn how to structure descriptions.",
    quotes: ["A cat dancing in a disco"],
  },
  {
    Icon: PenLine,
    label: "Clear instructions",
    text: "The placeholder originally read “Describe a new sticker.” Research showed people thought they were searching for existing AI stickers. Adding “to generate” made it clear stickers are created in real time.",
    quotes: ["Describe new sticker to generate"],
  },
  {
    Icon: Hand,
    label: "Sending the sticker",
    text: "Once options appear, a short hint tells people to tap a sticker to send it, so the next step is obvious.",
  },
];

const heroTags = [
  { Icon: PenLine, label: "Describe", className: "left-0 top-4" },
  { Icon: Wand2, label: "Create", className: "right-0 top-1/2 -translate-y-1/2" },
  { Icon: Flag, label: "Report to Meta", className: "left-2 bottom-2" },
];

function StickerIllustration() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-auto" aria-hidden>
      {/* Prompt bar */}
      <rect x="28" y="20" width="184" height="36" rx="18" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
      <path
        d="M50 30c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9z"
        className="fill-emerald-500"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M70 38h96" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
      <path d="M174 38h18" stroke="#d4d4d8" strokeWidth="4" strokeLinecap="round" />
      {/* Die-cut sticker with a peeling corner */}
      <path
        d="M78 76h74a28 28 0 0 1 28 28v34l-28 28H78a28 28 0 0 1-28-28v-34a28 28 0 0 1 28-28z"
        className="fill-emerald-200"
        stroke="#18181b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M180 138h-16a12 12 0 0 0-12 12v16z" fill="#ffffff" stroke="#18181b" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="114" r="5" fill="#18181b" />
      <circle cx="130" cy="114" r="5" fill="#18181b" />
      <path d="M98 132c8 10 26 10 34 0" fill="none" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
      {/* Sparkles */}
      <path
        d="M206 78c2 10 5 13 15 15-10 2-13 5-15 15-2-10-5-13-15-15 10-2 13-5 15-15z"
        fill="#ffffff"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AIStickersWhatsAppHero() {
  return (
    <CaseStudyHero
      eyebrow="Case study · WhatsApp"
      title={
        <>
          AI <HeroAccent>Stickers</HeroAccent> on WhatsApp
        </>
      }
      subtitle="Driving awareness and early adoption."
      tags={["Content strategy owner", "Global launch", "Generative AI"]}
      illustration={<StickerIllustration />}
      floatingTags={heroTags}
    />
  );
}

export default function AISickersWhatsAppContent() {
  return (
    <article>
      <SectionHeading id="in-short">In short</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <InShortCard label="The problem">
          <p className="text-zinc-700 dark:text-zinc-300">
            People found existing sticker packs irrelevant, childish, or
            culturally mismatched, and many were unfamiliar with generative AI.
          </p>
        </InShortCard>
        <InShortCard label="The goal">
          <p className="text-zinc-700 dark:text-zinc-300">
            Drive awareness, understanding, and adoption of AI stickers across a
            global audience with varying digital literacy.
          </p>
        </InShortCard>
        <InShortCard label="My role">
          <p className="text-zinc-900 dark:text-zinc-100 font-semibold mb-2">Content strategy owner</p>
          <p className="text-zinc-700 dark:text-zinc-300">
            I owned the end-to-end content strategy for the launch: educational
            messaging, prompt guidance, and reporting flows.
          </p>
        </InShortCard>
        <InShortCard label="The impact">
          <p className="text-4xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
            100K+
          </p>
          <p className="mt-1 text-zinc-700 dark:text-zinc-300">
            daily active users, making messaging more expressive with
            personalized stickers.
          </p>
        </InShortCard>
      </div>

      <Divider />

      <SectionHeading id="problem">Understanding the problem</SectionHeading>
      <GoalPanel
        Icon={Sticker}
        eyebrow="Users wanted better stickers"
        headline={
          <>
            Stickers that fit their exact <Accent>mood, moment, and culture</Accent>.
          </>
        }
      >
        In 2023, Meta&apos;s apps launched AI stickers: type a short description
        and get any sticker you can imagine. On WhatsApp, I owned the content
        strategy for education and adoption.
      </GoalPanel>
      <p className="text-zinc-600 dark:text-zinc-400 mb-3">
        In annual research, WhatsApp users consistently described existing
        stickers as:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-1.5 text-zinc-600 dark:text-zinc-400 marker:text-zinc-900 dark:marker:text-white">
        {[
          "Irrelevant to their conversations",
          "Too childish",
          "Visually complex",
          "Overly colorful",
          "Culturally or personally mismatched",
        ].map((complaint) => (
          <li key={complaint}>{complaint}</li>
        ))}
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Instead of searching limited packs, AI stickers let people generate the
        perfect sticker for their situation.
      </p>

      <Divider />

      <SectionHeading id="audience">Understanding the audience</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        WhatsApp users needed education about AI.
      </p>
      <IconPoints points={audiencePoints} />
      <div className="mt-8">
        <GoalPanel
          Icon={Sparkles}
          eyebrow="The insight that shaped our strategy"
          subtle
          headline={
            <>
              Some testers thought &ldquo;AI&rdquo; was a support agent named{" "}
              <Accent>&ldquo;AL.&rdquo;</Accent>
            </>
          }
        >
          The feature wouldn&apos;t succeed unless people clearly understood
          what the AI was doing and how to use it.
        </GoalPanel>
      </div>
      <div className="mb-8">
        <Screen
          src="/work/ai-stickers-whatsapp/evolving-approach-to-ai.png"
          alt="Evolving approach to AI: There's a learning curve with AI tools — trial and error, improved prompts, learning to co-create"
          width={1024}
          height={575}
        />
      </div>

      <Divider />

      <SectionHeading id="key-user-needs">Key user needs</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Research revealed three major usability gaps.
      </p>
      <IconPoints points={userNeedPoints} />

      <Divider />

      <SectionHeading id="content-strategy">Content strategy</SectionHeading>
      <GoalPanel
        Icon={Briefcase}
        eyebrow="Business goals"
        headline={
          <>
            Give people <Accent>creative control</Accent>, so they make the
            exact sticker that fits the moment.
          </>
        }
      />
      <IconPoints points={businessGoalPoints} columns={2} />

      <h3 className="text-lg font-semibold mt-10 mb-4">Three content goals</h3>
      <ol className="mb-8 grid gap-3 sm:grid-cols-3">
        {[
          "Sell the feature and educate users",
          "Guide users through sticker creation",
          "Enable safe reporting of harmful stickers",
        ].map((goal, i) => (
          <li
            key={goal}
            className="flex gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-4 text-sm text-zinc-700 dark:text-zinc-300"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 text-xs font-semibold text-white dark:text-zinc-900">
              {i + 1}
            </span>
            {goal}
          </li>
        ))}
      </ol>

      <h3 className="text-lg font-semibold mt-6 mb-4">Voice and tone</h3>
      <IconPoints points={tonePoints} columns={2} />
      <p className="mt-6 text-zinc-600 dark:text-zinc-400">
        The goal: an experience that feels simple, exciting, and accessible.
      </p>

      <Divider />

      <SectionHeading id="goal-1">Goal 1: Sell and educate the feature</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The first touchpoint was an in-app announcement banner. To keep the
        feature approachable, I explained the core action simply and chose
        every word deliberately.
      </p>
      <IconPoints points={bannerPoints} />

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: The sticker tray banner</h3>
      <div className="mb-8 max-w-60">
        <Screen
          src="/work/ai-stickers-whatsapp/promotional-banner-sticker-tray.png"
          alt="WhatsApp chat with sticker tray open showing AI sticker banner: Create stickers by describing them! Turn any idea into a sticker with AI."
          width={362}
          height={802}
          caption="Final content for the promotional banner in the sticker tray."
        />
      </div>

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: The promotional sheet</h3>
      <SplitWithScreen
        screen={
          <Screen
            src="/work/ai-stickers-whatsapp/promotional-bottom-sheet.png"
            alt="Promotional bottom sheet: Generate stickers with AI — turn ideas into stickers, try different descriptions, privacy statement, Continue button"
            width={360}
            height={624}
            caption="Final content and design for the promotional sheet."
          />
        }
      >
        <IconPoints points={sheetPoints} />
      </SplitWithScreen>

      <Divider />

      <SectionHeading id="goal-2">Goal 2: Guide users through sticker creation</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        I aligned the UX language with patterns across generative AI products.
        Industry conventions prompt people to &ldquo;Type a description&rdquo;
        and show examples of good prompts. Given our users&apos; need for
        guidance, we did both.
      </p>
      <div className="mb-8 max-w-md">
        <Screen
          src="/work/ai-stickers-whatsapp/competitor-benchmarking.png"
          alt="Competitor benchmarking for sticker creation and prompt patterns"
          width={1008}
          height={1024}
          caption="My competitor benchmarking."
        />
      </div>
      <IconPoints points={creationPoints} />

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: The creation flow</h3>
      <div className="mb-8">
        <Screen
          src="/work/ai-stickers-whatsapp/final-user-flow-clear-instructions.png"
          alt="Four-panel user flow: describe sticker, generation in progress, generated options with tap to send hint, sticker sent in chat"
          width={1024}
          height={489}
          caption="Final user flow with clear instructions."
        />
      </div>

      <Divider />

      <SectionHeading id="goal-3">Goal 3: Enable sticker reporting</SectionHeading>
      <GoalPanel
        Icon={ShieldCheck}
        eyebrow="Trust through transparency"
        headline={
          <>
            Reporting where people <Accent>already expect it</Accent>.
          </>
        }
      >
        People already report messages and contacts through long-press and
        overflow menus, so I reused those same patterns for stickers, with a
        clear label.
      </GoalPanel>
      <IconPoints
        points={[
          {
            Icon: Flag,
            label: "A clear entry point",
            text: "Familiar interaction points made reporting easy to discover and use.",
            quotes: ["Report to Meta"],
          },
          {
            Icon: ShieldCheck,
            label: "Explaining what's shared",
            text: "The flow explains what data is shared and how reports help the AI avoid generating harmful images. The messaging was reviewed by:",
            chips: ["Legal", "Privacy", "Policy", "Communications", "Integrity"],
          },
        ]}
      />

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: The reporting flow</h3>
      <div className="mb-8 max-w-md">
        <Screen
          src="/work/ai-stickers-whatsapp/final-reporting-flow.png"
          alt="Final reporting flow and content for AI sticker reporting"
          width={1024}
          height={972}
          caption="Final reporting flow and content."
        />
      </div>

      <Divider />

      <SectionHeading id="impact">The impact</SectionHeading>
      <StatsPanel
        Icon={ArrowUpRight}
        eyebrow="A new level of expression"
        stats={[{ value: "100K+", label: "daily active users after launch" }]}
      >
        <p className="text-sm text-zinc-400">
          People consistently generated and shared custom stickers in their
          conversations. Instead of settling for generic packs, they could make
          the exact sticker they imagined, instantly, making conversations more
          personal, creative, and culturally relevant.
        </p>
      </StatsPanel>
    </article>
  );
}
