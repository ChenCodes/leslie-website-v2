import {
  ArrowUpRight,
  BellRing,
  Brain,
  CheckCheck,
  Crosshair,
  Globe,
  Inbox,
  Languages,
  Layers,
  ListOrdered,
  MessageCircleQuestion,
  MessagesSquare,
  Scale,
  Scissors,
  Search,
  Smartphone,
  Sparkles,
  Target,
  TextCursorInput,
  Users,
  Zap,
} from "lucide-react";
import pollsLunchClub from "../../images/polls-lunch-club.gif";
import type { CaseStudySection } from "@/app/components/case-study/types";
import {
  Accent,
  CaseStudyHero,
  Chips,
  Divider,
  GoalPanel,
  HeroAccent,
  IconPoints,
  InShortCard,
  NumberedLabel,
  RankedList,
  Screen,
  SectionHeading,
  SplitWithScreen,
  StatsPanel,
  type IconPoint,
} from "@/app/components/case-study/blocks";

export const whatsappPollsSections: CaseStudySection[] = [
  { id: "in-short", title: "In short" },
  { id: "group-chat-friction", title: "The problem: Group chat friction" },
  { id: "our-goal", title: "Our goal" },
  { id: "recognizable-intuitive-design", title: "Recognizable and intuitive design" },
  { id: "testing-localization-approvals", title: "Testing, localization, and approvals" },
  { id: "tone-framework-strategy", title: "Tone framework and strategy" },
  { id: "key-content-design-moments", title: "Key content design moments" },
  { id: "impact", title: "The impact" },
];

const frictionPoints: IconPoint[] = [
  {
    Icon: MessagesSquare,
    label: "Hard to track",
    text: "Simple, routine questions triggered a flurry of disorganized messages in large group chats.",
  },
  {
    Icon: ListOrdered,
    label: "Impossible to aggregate",
    text: "There was no quick way to tally where the group landed.",
  },
  {
    Icon: Inbox,
    label: "Notification fatigue",
    text: "Every reply was another ping, and important messages got missed.",
  },
];

const goalEvidencePoints: IconPoint[] = [
  {
    Icon: Users,
    label: "Users asked for it",
    text: "This wasn't just a corporate hypothesis. People explicitly requested polls many times in UXR sessions.",
  },
  {
    Icon: Sparkles,
    label: "A messaging staple",
    text: "Most of our messaging competitors offered polls, as did our app counterpart, Messenger.",
  },
];

const designPrinciplePoints: IconPoint[] = [
  {
    Icon: Search,
    label: "Audited competitors",
    text: "I studied existing design and content patterns in competing products.",
  },
  {
    Icon: Smartphone,
    label: "Native to each platform",
    text: "I studied the specific system languages of Android and iOS.",
  },
  {
    Icon: Brain,
    label: "Recognition over recall",
    text: "I recommended hint text that tells people what to do, like our competitors, and input fields that feel visually similar to Messenger's polls. The goal: so familiar that people could onboard without having to think.",
  },
  {
    Icon: TextCursorInput,
    label: "Words paired with affordances",
    text: "With my product designer, I defined interaction behaviors so each word matched its affordance. The blinking cursor starts at the hint text, so people immediately know where to go and what to do: write a poll question.",
    quotes: ["Ask question"],
  },
];

const reviewPoints: IconPoint[] = [
  {
    Icon: Languages,
    label: "UXR and localization",
    text: "After each iteration, we tested designs with participants from our most important global markets. My focus was immediate understanding of every core concept, across cultures and languages:",
    chips: ["polls", "votes", "options", "Allow multiple votes"],
  },
  {
    Icon: Scale,
    label: "Legal and other reviews",
    text: "Once testing refined the UX copy, I was the primary point of contact for cross-functional alignment, securing formal approvals from product, legal, and design stakeholders so the content met our rigorous standards.",
  },
];

const tonePrinciples: IconPoint[] = [
  { Icon: Crosshair, label: "Directness", text: "Get straight to the point without unnecessary fluff." },
  {
    Icon: Zap,
    label: "Clarity",
    text: "Crisp, unambiguous language that says exactly what it needs to, in the fewest words.",
  },
  { Icon: Globe, label: "Accessibility", text: "Easy-to-understand phrases that resonate with a global audience." },
  {
    Icon: Scissors,
    label: "Brevity",
    text: "Shorthand when necessary, so people don't need to digest full, complex sentences.",
  },
  { Icon: Layers, label: "Hierarchy", text: "Progressive disclosure keeps the interface clean." },
];

const notificationPoints: IconPoint[] = [
  {
    Icon: BellRing,
    label: "Thoughtful trigger logic",
    text: "Every new vote triggered a silent notification. Instead of a fresh ping per participant, the lock-screen banner updated quietly, and retracted votes updated it too, for real-time accuracy.",
  },
  {
    Icon: CheckCheck,
    label: "Clarity of activity",
    text: "The word “new” makes it clear these are recent votes, not the total since your last notification.",
    quotes: ["[Number] new vote[s]"],
  },
  {
    Icon: MessageCircleQuestion,
    label: "Maximum context in limited space",
    text: "Ruling out names and longer sentences kept the character count minimal, so the poll title stays visible and people can tell polls apart across multiple chats.",
  },
];

const impactStats = [
  { value: "2.2M", label: "people cast votes in the first 30 days" },
  { value: "~700K", label: "people created polls in the first 30 days" },
  { value: "2.5%", label: "Android participation rate, on a rapid growth path" },
];

function PollIllustration() {
  const options = [
    { width: 112, checked: true },
    { width: 64, checked: false },
    { width: 36, checked: false },
  ];
  return (
    <svg viewBox="0 0 240 200" className="w-full h-auto" aria-hidden>
      <rect x="28" y="18" width="184" height="164" rx="24" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
      {/* Question line */}
      <path d="M50 46h104" stroke="#18181b" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 62h64" stroke="#d4d4d8" strokeWidth="4" strokeLinecap="round" />
      {options.map((option, i) => {
        const y = 92 + i * 30;
        return (
          <g key={y}>
            <circle
              cx="58"
              cy={y}
              r="8"
              className={option.checked ? "fill-emerald-500" : undefined}
              fill={option.checked ? undefined : "#ffffff"}
              stroke="#18181b"
              strokeWidth="2.5"
            />
            {option.checked && (
              <path d="M54 92l3 3 6-6" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            )}
            <rect x="74" y={y - 5} width="118" height="10" rx="5" fill="#f4f4f5" />
            <rect x="74" y={y - 5} width={option.width} height="10" rx="5" className="fill-emerald-300" />
          </g>
        );
      })}
      {/* Voter avatars */}
      <circle cx="176" cy="76" r="7" className="fill-emerald-200" stroke="#18181b" strokeWidth="2" />
      <circle cx="188" cy="76" r="7" fill="#faf5ec" stroke="#18181b" strokeWidth="2" />
      {/* Sparkles */}
      <path
        d="M206 4c2 10 5 13 15 15-10 2-13 5-15 15-2-10-5-13-15-15 10-2 13-5 15-15z"
        className="fill-emerald-500"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heroTags = [
  { Icon: TextCursorInput, label: "Ask question", className: "left-0 top-4" },
  { Icon: CheckCheck, label: "Allow multiple votes", className: "right-0 top-1/2 -translate-y-1/2" },
  { Icon: BellRing, label: "3 new votes", className: "left-4 bottom-2" },
];

export function WhatsAppPollsHero() {
  return (
    <CaseStudyHero
      eyebrow="Case study · WhatsApp"
      title={
        <>
          WhatsApp <HeroAccent>Polls</HeroAccent>
        </>
      }
      subtitle="Designing a faster way to make plans for millions."
      tags={["Content Designer", "Android · iOS", "UXR · Localization"]}
      illustration={<PollIllustration />}
      floatingTags={heroTags}
    />
  );
}

export default function WhatsAppPollsContent() {
  return (
    <article>
      <SectionHeading id="in-short">In short</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <InShortCard label="The problem">
          <p className="text-zinc-700 dark:text-zinc-300">
            Group decisions were chaotic, leading to messy chats and missed
            messages.
          </p>
        </InShortCard>
        <InShortCard label="The solution">
          <p className="text-zinc-700 dark:text-zinc-300">
            An intuitive polling feature for Android and iOS, with clear,
            minimal instructions.
          </p>
        </InShortCard>
        <InShortCard label="My role">
          <p className="text-zinc-900 dark:text-zinc-100 font-semibold mb-2">Content Designer</p>
          <p className="text-zinc-700 dark:text-zinc-300">
            I led the content strategy, notification logic, and global testing
            to make polls easy to use.
          </p>
        </InShortCard>
        <InShortCard label="The impact">
          <p className="text-4xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
            2.2M
          </p>
          <p className="mt-1 text-zinc-700 dark:text-zinc-300">
            votes on newly launched polls within 30 days.
          </p>
        </InShortCard>
      </div>

      <Divider />

      <SectionHeading id="group-chat-friction">The problem: Group chat friction</SectionHeading>
      <GoalPanel
        Icon={MessagesSquare}
        eyebrow="Sound familiar?"
        headline={<>&ldquo;Where should we meet?&rdquo;</>}
      >
        In large WhatsApp group chats, routine questions like this one spiraled.
        WhatsApp recognized a critical need to help people reach agreement
        quickly.
      </GoalPanel>
      <IconPoints points={frictionPoints} />

      <Divider />

      <SectionHeading id="our-goal">Our goal</SectionHeading>
      <GoalPanel
        Icon={Target}
        headline={
          <>
            A simple, native flow to <Accent>create a poll</Accent> others can
            vote on, quickly.
          </>
        }
      />
      <IconPoints points={goalEvidencePoints} />

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: Polls in WhatsApp</h3>
      <div className="mb-8 grid grid-cols-2 gap-6 max-w-lg">
        <figure>
          <video
            controls
            playsInline
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
          >
            <source src="/work/whatsapp-polls/polls-recording.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <figcaption className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Creating a poll, end to end.
          </figcaption>
        </figure>
        <figure>
          {/* GIF: voting interaction in Lunch Club poll — unoptimized so it animates */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pollsLunchClub.src}
            alt="WhatsApp poll in Lunch Club: cursor moves over options, progress bars and vote counts update"
            width={287}
            height={512}
            className="w-full h-auto rounded-lg border border-zinc-200 dark:border-zinc-800"
          />
          <figcaption className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Voting in a group chat.
          </figcaption>
        </figure>
      </div>

      <Divider />

      <SectionHeading id="recognizable-intuitive-design">Recognizable and intuitive design</SectionHeading>
      <GoalPanel
        Icon={Brain}
        eyebrow="My role"
        headline={
          <>
            Make the end-to-end experience feel <Accent>intuitive</Accent> and
            easy.
          </>
        }
      >
        To do that, the content had to be clear, informative, and minimal at
        the same time.
      </GoalPanel>

      <h3 className="text-lg font-semibold mt-6 mb-4">The framework</h3>
      <IconPoints points={designPrinciplePoints} />

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: Benchmarks that shaped the design</h3>
      <div className="mb-8 grid grid-cols-2 gap-6 max-w-md">
        <Screen
          src="/work/whatsapp-polls/messenger-competitor.png"
          alt="Messenger competitor poll UI: chat with poll overlay showing options, subject, and send"
          width={473}
          height={1024}
          caption="Messenger"
        />
        <Screen
          src="/work/whatsapp-polls/apple-competitor.png"
          alt="Apple competitor poll creation screen: Poll question and Add option fields, Create poll button"
          width={473}
          height={1024}
          caption="Apple"
        />
      </div>

      <Divider />

      <SectionHeading id="testing-localization-approvals">Testing, localization, and approvals</SectionHeading>
      <GoalPanel
        Icon={Globe}
        headline={
          <>
            Every term <Accent>instantly understood</Accent>, in every market.
          </>
        }
      >
        I partnered with our UXR and localization teams to validate each term
        for our global user base.
      </GoalPanel>
      <IconPoints points={reviewPoints} />

      <Divider />

      <SectionHeading id="tone-framework-strategy">Tone framework and strategy</SectionHeading>
      <GoalPanel
        Icon={Sparkles}
        eyebrow="The tone"
        headline={
          <>
            <Accent>Informative</Accent>, so wrangling a large group feels
            simple, efficient, and easy.
          </>
        }
      >
        People needed to feel supported in a hectic situation, so the copy
        directs them through the task.
      </GoalPanel>
      <h3 className="text-lg font-semibold mt-6 mb-4">The content strategy</h3>
      <IconPoints points={tonePrinciples} columns={2} />

      <Divider />

      <SectionHeading id="key-content-design-moments">Key content design moments</SectionHeading>

      <div className="mt-6">
        <NumberedLabel index={1} part="Moment" title="Instructive scannability" size="lg" />
        <SplitWithScreen
          screen={
            <Screen
              src="/work/whatsapp-polls/short-phrase-example.png"
              alt="Create Poll screen with minimal Question and Options labels and input fields"
              width={290}
              height={512}
            />
          }
        >
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            A heavily instructive tone enables the speediest possible actions.
            I advocated removing anything that didn&apos;t serve the immediate
            goal, including filler phrases in the titles that made the
            experience feel &ldquo;heavy&rdquo;:
          </p>
          <div className="mb-3">
            <Chips items={["Ask your poll question", "Add options for your poll"]} variant="struck" />
          </div>
          <div className="mb-4">
            <Chips items={["Question", "Options"]} />
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            Removing articles and keeping instructions to one or two words kept
            the UI clean and quick to scan.
          </p>
        </SplitWithScreen>
      </div>

      <div className="mt-10">
        <NumberedLabel index={2} part="Moment" title="Progressive disclosure in action" size="lg" />
        <SplitWithScreen
          screen={
            <Screen
              src="/work/whatsapp-polls/error-message.png"
              alt="Create Poll screen showing inline error when duplicate option is entered: This is already an option."
              width={288}
              height={512}
            />
          }
        >
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            My product designer suggested telling people about constraints
            upfront. I pushed back on a &ldquo;wall of text&rdquo; and advised
            showing each one inline, only at the most relevant moment:
          </p>
          <ul className="space-y-2 mb-4 text-zinc-600 dark:text-zinc-400">
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">The twelve-option limit:</strong>{" "}
              shown only when someone approaches it.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">Duplicate options:</strong>{" "}
              shown only when someone accidentally creates &ldquo;twin&rdquo; options.
            </li>
          </ul>
          <p className="text-zinc-600 dark:text-zinc-400">
            Instructions stayed contextual rather than overwhelming.
          </p>
        </SplitWithScreen>
      </div>

      <div className="mt-10">
        <NumberedLabel index={3} part="Moment" title="Turning feedback into information architecture" size="lg" />
        <SplitWithScreen
          screen={
            <Screen
              src="/work/whatsapp-polls/poll-details-page.png"
              alt="Poll Details screen showing leading option, vote counts, and list of voters per option"
              width={480}
              height={1024}
            />
          }
        >
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Initial UXR showed a basic poll wasn&apos;t enough. Admins and
            creators felt &ldquo;blind&rdquo; to their decision&apos;s progress:
            they struggled to see the leading option and who voted, the two
            most critical factors for moving a group to action. I stack-ranked
            the poll details page by user priority:
          </p>
          <div className="mb-4">
            <RankedList
              items={[
                <>
                  <strong>The winner at a glance:</strong> the leading option
                  and total participation sit at the very top, so admins can
                  confirm a &ldquo;majority rule&rdquo; in seconds instead of
                  hunting through chat history.
                </>,
                <>
                  <strong>Social proof and accountability:</strong> creators
                  need to know who to follow up with, so the voter list sits
                  directly under each option.
                </>,
                <>
                  <strong>Logical nesting:</strong> a clean, scannable hierarchy
                  that feels like a natural extension of the chat, not a heavy
                  data report.
                </>,
              ]}
            />
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            The result: a list of names became a functional decision-making
            tool.
          </p>
        </SplitWithScreen>
      </div>

      <div className="mt-10">
        <NumberedLabel index={4} part="Moment" title="Notification content and logic" size="lg" />
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          I defined how and when people were notified of poll activity. Early
          testers wanted a timely reminder to check on a poll, especially once
          most people had voted, but we had to avoid creating noise.
        </p>
        <IconPoints points={notificationPoints} />
        <div className="mt-6 mb-8">
          <Screen
            src="/work/whatsapp-polls/polls-vote-notification.png"
            alt="Three Android lock-screen notifications showing WhatsApp poll vote updates with 1, 2, and 10 new votes"
            width={1024}
            height={665}
          />
        </div>
      </div>

      <Divider />

      <SectionHeading id="impact">The impact</SectionHeading>
      <StatsPanel Icon={ArrowUpRight} eyebrow="An immediate success" stats={impactStats}>
        <p className="text-sm text-zinc-400">
          We also hit our participation rate targets on iOS. Social media
          signals showed a warm reception even before the data science team
          confirmed the numbers.
        </p>
      </StatsPanel>

      <h3 className="text-lg font-semibold mt-6 mb-4">In the wild</h3>
      <div className="max-w-sm">
        <Screen
          src="/work/whatsapp-polls/polls-impact.png"
          alt="Social media posts showing positive reception of WhatsApp polls feature"
          width={975}
          height={1024}
        />
      </div>
    </article>
  );
}
