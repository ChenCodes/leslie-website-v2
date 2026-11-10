import {
  BellOff,
  Building2,
  ClipboardList,
  Crosshair,
  FileSearch,
  GitBranch,
  Layers,
  LayoutGrid,
  Megaphone,
  MessagesSquare,
  Puzzle,
  Scale,
  Search,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
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
  Screen,
  SectionHeading,
  StatsPanel,
  type IconPoint,
} from "@/app/components/case-study/blocks";

export const aiCommunicationsPlaybookSections: CaseStudySection[] = [
  { id: "in-short", title: "In short" },
  { id: "challenges", title: "The challenges" },
  { id: "solution", title: "The solution: A playbook for intentional design" },
  { id: "investigation", title: "The investigation: Auditing all existing comms" },
  { id: "strategy", title: "The strategy: Silence as the default" },
  { id: "principles", title: "The three principles" },
  { id: "deliverables", title: "Main deliverables" },
  { id: "review-process", title: "Review and buy-in" },
  { id: "bottom-line", title: "The bottom line" },
];

const challengePoints: IconPoint[] = [
  {
    Icon: Layers,
    label: "Cluttered experience and drop-off",
    text: "Message volume led to user frustration and abandonment.",
  },
  {
    Icon: MessagesSquare,
    label: "Repetitive team arguments",
    text: "Debates over messaging components and frequency produced inconsistent experiences.",
  },
  {
    Icon: Puzzle,
    label: "Missing frameworks and components",
    text: "There was no basic framework, and no design library components for new AI messages.",
  },
];

const auditPoints: IconPoint[] = [
  {
    Icon: Search,
    label: "Building the foundation",
    text: "I reviewed designs for AI image generation, private chat experiences, and core AI tools to note which components worked best for which messages.",
  },
  {
    Icon: FileSearch,
    label: "Spotting inconsistencies",
    text: "Different teams were often creating custom UI treatments for the exact same type of privacy disclosure.",
  },
];

const silencePoints: IconPoint[] = [
  {
    Icon: Users,
    label: "Global app surveys",
    text: "People valued WhatsApp specifically for its lack of clutter.",
  },
  {
    Icon: Target,
    label: "Feature-specific UXR deep dives",
    text: "People said they felt interrupted by new AI prompts when they were just trying to send a message.",
    quotes: ["Interrupted"],
  },
  {
    Icon: Building2,
    label: "Internal feedback",
    text: "Even our employees flagged that the app was starting to feel noisy.",
    quotes: ["Noisy"],
  },
];

const principles = [
  {
    title: "Be rigorously simple",
    text: "Only interrupt people if their safety or success depends on it. If a message doesn't help them complete a task or protect their data, it doesn't belong on screen.",
  },
  {
    title: "Be relevant",
    text: "Deliver information exactly when it's useful, never sooner. We replaced general announcements with moment-based triggers.",
  },
  {
    title: "Be transparent",
    text: "Build trust by being bold and clear about how AI data is used. Transparency isn't legal fine print; it's making sure people feel in control.",
  },
];

const reviewPoints: IconPoint[] = [
  {
    Icon: Scale,
    label: "Cross-functional alignment",
    text: "Legal and marketing confirmed the in-app rules complied with privacy regulations, and go-to-market teams made sure in-app messaging felt like a seamless extension of our external brand.",
  },
  {
    Icon: Crosshair,
    label: "Expert stress-testing",
    text: "I presented the playbook to every lead product and content designer in the AI org, so the rules held up across surfaces from AI image generation to complex agentic experiences.",
  },
];

const bottomLineStats = [
  { value: "Zero", label: "decision time: no more “Groundhog Day” meetings, just instant alignment" },
  { value: "1", label: "unified library with AI-specific components for every new scenario" },
  { value: "2B+", label: "people who see only what's necessary" },
];

function PlaybookIllustration() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-auto" aria-hidden>
      {/* Branches */}
      <path
        d="M120 64v14M120 78c0 10-54 6-54 20M120 78c0 10 54 6 54 20M66 122c0 10-24 6-24 18M66 122c0 10 24 6 24 18M174 122c0 10-24 6-24 18M174 122c0 10 24 6 24 18"
        fill="none"
        stroke="#18181b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Gatekeeper question */}
      <rect x="62" y="30" width="116" height="34" rx="17" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
      <path d="M88 47h50" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
      <circle cx="152" cy="47" r="6" className="fill-emerald-500" stroke="#18181b" strokeWidth="2" />
      {/* Questions */}
      <rect x="36" y="98" width="60" height="24" rx="8" className="fill-emerald-200" stroke="#18181b" strokeWidth="3" />
      <rect x="144" y="98" width="60" height="24" rx="8" className="fill-emerald-200" stroke="#18181b" strokeWidth="3" />
      {/* Components */}
      {[30, 78, 138, 186].map((x) => (
        <rect key={x} x={x} y="140" width="24" height="24" rx="12" fill="#faf5ec" stroke="#18181b" strokeWidth="3" />
      ))}
      {/* Sparkle */}
      <path
        d="M206 20c2 10 5 13 15 15-10 2-13 5-15 15-2-10-5-13-15-15 10-2 13-5 15-15z"
        className="fill-emerald-500"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heroTags = [
  { Icon: BellOff, label: "Silence by default", className: "left-0 top-0" },
  { Icon: GitBranch, label: "Decision tree", className: "right-0 top-1/2 -translate-y-1/2" },
  { Icon: LayoutGrid, label: "Component library", className: "left-2 -bottom-2" },
];

export function AICommunicationsPlaybookHero() {
  return (
    <CaseStudyHero
      eyebrow="Case study · WhatsApp"
      title={
        <>
          AI communications <HeroAccent>playbook</HeroAccent>
        </>
      }
      subtitle="An org-wide framework for design consistency and faster decision making."
      tags={["Framework owner", "Meta AI on WhatsApp", "2B+ users"]}
      illustration={<PlaybookIllustration />}
      floatingTags={heroTags}
    />
  );
}

export default function AICommunicationsPlaybookContent() {
  return (
    <article>
      <SectionHeading id="in-short">In short</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <InShortCard label="The problems">
          <p className="text-zinc-700 dark:text-zinc-300">
            Too many Meta AI feature messages cluttered WhatsApp, and the teams
            who owned them were stuck in repetitive debates about which alerts
            people needed and how to design them.
          </p>
        </InShortCard>
        <InShortCard label="The solution">
          <p className="text-zinc-700 dark:text-zinc-300">
            A reusable communications playbook with a logic-based decision tree
            that settles how and when we message people.
          </p>
        </InShortCard>
        <InShortCard label="My role">
          <p className="text-zinc-700 dark:text-zinc-300">
            I led the Figma-wide audit of AI promotions, set the principles and
            guardrails, and secured global alignment from design, legal,
            marketing, and go-to-market leads.
          </p>
        </InShortCard>
        <InShortCard label="The impact">
          <p className="text-4xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
            2B+
          </p>
          <p className="mt-1 text-zinc-700 dark:text-zinc-300">
            people kept in a clean, simple app, with no more wasted discussion
            time for Meta AI teams.
          </p>
        </InShortCard>
      </div>

      <Divider />

      <SectionHeading id="challenges">The challenges</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Clutter, conflict, and missing designs.
      </p>
      <IconPoints points={challengePoints} />

      <Divider />

      <SectionHeading id="solution">The solution: A playbook for intentional design</SectionHeading>
      <GoalPanel
        Icon={Target}
        headline={
          <>
            Empower teams to make <Accent>instant, principled</Accent> decisions.
          </>
        }
      >
        Reduce meeting time, and make sure every message is:
      </GoalPanel>
      <Chips items={["Predictable", "Transparent", "Necessary"]} />

      <Divider />

      <SectionHeading id="investigation">The investigation: Auditing all existing comms</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        To set baseline rules and keep what was working, I audited Figma
        libraries and hundreds of design files.
      </p>
      <IconPoints points={auditPoints} />

      <Divider />

      <SectionHeading id="strategy">The strategy: Silence as the default</SectionHeading>
      <GoalPanel
        Icon={BellOff}
        eyebrow="Our core philosophy"
        headline={
          <>
            Only message when it <Accent>truly matters</Accent>.
          </>
        }
      >
        Too many messages dilute impact and make it harder to hold attention
        when it counts.
      </GoalPanel>
      <h3 className="text-lg font-semibold mt-6 mb-2">Rationale for silence</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The shift was data-driven, drawing on performance metrics for group
        notifications. A &ldquo;signal of disturbance&rdquo; recurred across
        three layers of feedback:
      </p>
      <IconPoints points={silencePoints} />

      <Divider />

      <SectionHeading id="principles">The three principles</SectionHeading>
      <div className="space-y-6">
        {principles.map((principle, i) => (
          <div key={principle.title}>
            <NumberedLabel index={i + 1} part="Principle" title={principle.title} size="lg" />
            <p className="pl-11 text-zinc-600 dark:text-zinc-400">{principle.text}</p>
          </div>
        ))}
      </div>

      <Divider />

      <SectionHeading id="deliverables">Main deliverables</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Three tools moved our workflow from subjective debate to standardized
        execution.
      </p>

      <div className="mt-6">
        <NumberedLabel index={1} part="Real-world guidance" title="The decision tree" size="lg" />
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          The centerpiece of the playbook. When a team is stuck choosing between
          components that serve similar functions, the tree adds structure and
          context for real-world decisions.
        </p>
        <GoalPanel
          Icon={Sparkles}
          eyebrow="The gatekeeper question"
          subtle
          headline={
            <>
              &ldquo;Do we really need to <Accent>bother the user</Accent> at
              all?&rdquo;
            </>
          }
        />
        <div className="mb-8">
          <Screen
            src="/work/ai-communications-playbook/decision-tree.png"
            alt="Flow chart for when to show or hide information: gatekeeper question on user safety and control, branching to intro bottom sheet, tooltip, mid card, system message, or rely on the design"
            width={1024}
            height={682}
          />
        </div>
      </div>

      <div className="mt-10">
        <NumberedLabel index={2} part="The strategic overview" title="The roles and responsibilities chart" size="lg" />
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          A broad, simple overview that maps message types, like privacy
          disclosures, new feature releases, and educational tips, to their
          approved design treatments.
        </p>
        <div className="mb-8">
          <Screen
            src="/work/ai-communications-playbook/roles-responsibilities-chart.png"
            alt="Roles & Responsibilities for User Messaging: system message, bottom sheet, in-line text, tooltip, and mid-card with goals, use cases, and examples"
            width={1024}
            height={682}
          />
        </div>
      </div>

      <div className="mt-10">
        <NumberedLabel index={3} part="Proven success" title="The “In the wild” gallery" size="lg" />
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          High-fidelity examples of each treatment working in production. Seeing
          components in their intended context proved they were already
          successfully serving users, moving the playbook from theory to
          reality.
        </p>
      </div>

      <Divider />

      <SectionHeading id="review-process">Review and buy-in</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        I put the deliverables through a rigorous review so the playbook
        resonated with every AI team at WhatsApp and would hold up under a
        global launch.
      </p>
      <IconPoints points={reviewPoints} />
      <div className="mt-8">
        <GoalPanel
          Icon={Megaphone}
          eyebrow="Executive enforcement"
          headline={
            <>
              The official <Accent>source of truth</Accent> for AI in-app
              communication at WhatsApp.
            </>
          }
        >
          A playbook is only as strong as the people who follow it. Once I
          published it as a Google Slides deck, my director and I asked every
          design and product executive to point their reports to it.
        </GoalPanel>
      </div>

      <Divider />

      <SectionHeading id="bottom-line">The bottom line</SectionHeading>
      <StatsPanel Icon={ClipboardList} eyebrow="The guardrail against noise" stats={bottomLineStats}>
        <p className="text-sm text-zinc-400">
          The playbook ended repetitive discussions, gave every team a
          prescribed treatment for new scenarios, and preserved the simple
          experience that makes WhatsApp a world-leading tool.
        </p>
      </StatsPanel>
    </article>
  );
}
