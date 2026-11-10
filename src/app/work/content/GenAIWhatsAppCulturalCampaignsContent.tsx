import {
  ArrowUpRight,
  CalendarHeart,
  Globe,
  Library,
  Palette,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  Users,
  Zap,
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
  Screen,
  SectionHeading,
  SplitWithScreen,
  StatsPanel,
  type IconPoint,
} from "@/app/components/case-study/blocks";

export const genAIWhatsAppCulturalCampaignSections: CaseStudySection[] = [
  { id: "in-short", title: "In short" },
  { id: "global-local-relevance", title: "A global product with low local relevance" },
  { id: "insight-growth-lever", title: "The insight: Cultural expression as a growth lever" },
  { id: "localized-gtm-engine", title: "The strategy: The localized GTM engine" },
  { id: "ai-content-studio", title: "Building the AI Content Studio (0→1)" },
  { id: "india-campaign", title: "Our first campaign: India Independence Day" },
  { id: "scaling-model", title: "Scaling the campaign model" },
  { id: "impact", title: "The impact" },
];

const auditPoints: IconPoint[] = [
  {
    Icon: ScanSearch,
    label: "Western-centric inspiration",
    text: "A full audit of WhatsApp's GenAI experience found our “Inspiration” prompts heavily skewed toward Western events, like the Oscars.",
  },
  {
    Icon: TrendingDown,
    label: "A 4% regression outside the US",
    text: "Engagement was slipping across non-US markets.",
  },
  {
    Icon: Globe,
    label: "Key regions underperforming",
    text: "India and Indonesia, critical to WhatsApp's global footprint, lagged for lack of cultural relevance.",
  },
];

const strategyPoints: IconPoint[] = [
  {
    Icon: Target,
    label: "Market prioritization",
    text: "Deciding which markets to invest in as our primary growth engine for AI image generation.",
  },
  {
    Icon: CalendarHeart,
    label: "The cultural calendar",
    text: "In-app campaigns covering high-intent moments and holidays.",
    chips: ["Diwali", "Rakhi", "Independence Day"],
  },
  {
    Icon: Zap,
    label: "Agile execution with engineers",
    text: "Implementation timelines and launch cadences for fast, trend-responsive rollouts.",
  },
];

const studioPoints: IconPoint[] = [
  {
    Icon: Palette,
    label: "In-house creative pivot",
    text: "I negotiated a partnership with the Product Design illustration team to expand their mandate into AI generation, turning a traditional design department into a nimble, AI-native art agency.",
  },
  {
    Icon: Library,
    label: "The high-intent prompt library",
    text: "I oversaw a localized prompt architecture that moved beyond generic descriptions, so models produced high-quality, culturally nuanced outputs for regional celebrations.",
  },
  {
    Icon: ShieldCheck,
    label: "Governance and safety",
    text: "I set up a streamlined review framework with Legal, Policy, and i18n so every AI-generated asset was safe, inclusive, and globally compliant.",
  },
];

const indiaResultPoints: IconPoint[] = [
  {
    Icon: ArrowUpRight,
    label: "Instantaneous step-change",
    text: "Global DAU surged from a 1.0M baseline to 1.7M overnight, a 70% increase.",
  },
  {
    Icon: Users,
    label: "Market dominance",
    text: "We reached a peak of 1.7M DAU in India alone, proving a single localized activation could lift the entire global product metric.",
  },
];

const scaledCampaigns = [
  { name: "Diwali", value: "+175K", detail: "pDAU, and a 19% increase in media engagement" },
  { name: "Rakhi", value: "~130K+", detail: "pDAU impact through chat-based creation" },
  {
    name: "Indonesia Independence Day",
    value: "30K",
    detail: "high-intent users activated, stabilizing a declining region",
  },
];

const impactStats = [
  { value: "+70%", label: "global baseline DAU (1.0M to 1.7M) from a single-market activation" },
  { value: "+700K", label: "pDAU during India Independence Day, the largest cultural gain in product history" },
  { value: "−4% → ↑", label: "international regression reversed into sustained, repeatable growth" },
];

function CampaignIllustration() {
  // Each flag hangs from the bunting curve at its center x.
  const flags = [
    { x: 46, y: 34.1, className: "fill-amber-400" },
    { x: 80, y: 40.6, fill: "#ffffff" },
    { x: 114, y: 42.5, className: "fill-emerald-500" },
    { x: 148, y: 40.3, className: "fill-amber-400" },
    { x: 182, y: 33.5, fill: "#ffffff" },
  ];
  return (
    <svg viewBox="0 0 240 200" className="w-full h-auto" aria-hidden>
      {/* Bunting */}
      <path d="M30 26c50 22 130 22 180 0" fill="none" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
      {flags.map((flag) => (
        <path
          key={flag.x}
          d={`M${flag.x} ${flag.y}l14 0-7 18z`}
          className={flag.className}
          fill={flag.fill}
          stroke="#18181b"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      ))}
      {/* Greeting card */}
      <rect x="54" y="70" width="132" height="112" rx="16" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
      <rect x="66" y="82" width="108" height="58" rx="10" className="fill-emerald-200" />
      <circle cx="120" cy="111" r="16" className="fill-amber-300" stroke="#18181b" strokeWidth="2.5" />
      <path d="M78 156h60M78 168h36" stroke="#18181b" strokeWidth="4" strokeLinecap="round" />
      {/* Sparkles */}
      <path
        d="M206 76c2 10 5 13 15 15-10 2-13 5-15 15-2-10-5-13-15-15 10-2 13-5 15-15z"
        className="fill-emerald-500"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 120c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9z"
        fill="#ffffff"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heroTags = [
  { Icon: CalendarHeart, label: "Diwali", className: "left-0 top-1/3" },
  { Icon: Sparkles, label: "Independence Day", className: "right-0 top-1/2" },
  { Icon: Globe, label: "India · Indonesia", className: "left-2 bottom-1" },
];

export function GenAICulturalCampaignsHero() {
  return (
    <CaseStudyHero
      eyebrow="Case study · WhatsApp"
      title={
        <>
          Driving GenAI adoption with <HeroAccent>cultural campaigns</HeroAccent>
        </>
      }
      subtitle="Regional holidays, an AI Content Studio, and global GenAI growth."
      tags={["0→1 program", "GenAI images", "Global markets"]}
      illustration={<CampaignIllustration />}
      floatingTags={heroTags}
    />
  );
}

export default function GenAIWhatsAppCulturalCampaignsContent() {
  return (
    <article>
      <SectionHeading id="in-short">In short</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <InShortCard label="The problem">
          <p className="text-zinc-700 dark:text-zinc-300">
            In early 2026, GenAI image creation adoption was strong in the US,
            but international engagement was regressing. Our US-centric branding
            and promotion were failing our highest-growth markets.
          </p>
        </InShortCard>
        <InShortCard label="What I did">
          <p className="text-zinc-700 dark:text-zinc-300">
            I built a regional holiday calendar program from the ground up and
            established an AI content team to power cultural campaigns, driving
            up AI image engagement in key markets.
          </p>
        </InShortCard>
        <InShortCard label="Key impact" className="sm:col-span-2">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "+70%", label: "global baseline DAU from one market" },
              { value: "+700K", label: "pDAU on India Independence Day" },
              { value: "−4% → ↑", label: "international regression reversed" },
            ].map((stat) => (
              <div key={stat.value}>
                <p className="text-3xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </InShortCard>
      </div>

      <Divider />

      <SectionHeading id="global-local-relevance">A global product with low local relevance</SectionHeading>
      <SplitWithScreen
        screen={
          <Screen
            src="/work/whatsapp-genai-cultural-campaigns/inspiration-grid-western-centric.png"
            alt="Meta AI image creation screen showing a grid of Western-leaning inspiration prompts such as superhero chores, red carpet, and action hero themes"
            width={473}
            height={1024}
            caption="Cowboys and red carpet events are definitely not universally relevant concepts."
          />
        }
      >
        <IconPoints points={auditPoints} />
      </SplitWithScreen>

      <Divider />

      <SectionHeading id="insight-growth-lever">The insight: Cultural expression as a growth lever</SectionHeading>
      <GoalPanel
        Icon={Sparkles}
        eyebrow="The insight"
        headline={
          <>
            In high-growth markets, people used GenAI for{" "}
            <Accent>cultural celebration</Accent>, not generic use cases.
          </>
        }
      >
        Working with AI Expressions user research and market analysis, I found
        people wanted to create and share these within their social circles:
      </GoalPanel>
      <Chips items={["Personalized festival greetings", "Holiday stickers", "Patriotic imagery"]} />

      <Divider />

      <SectionHeading id="localized-gtm-engine">The strategy: The localized GTM engine</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        To start this new marketing operation, I rallied cross-functional
        partners to choose viable holidays, check local relevance, screen for
        sensitive or legal risks, and plan launch timelines across design,
        marketing, translation, and engineering. We anchored the strategy on
        three pillars:
      </p>
      <IconPoints points={strategyPoints} />

      <Divider />

      <SectionHeading id="ai-content-studio">Building the AI Content Studio (0→1)</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        With no existing infrastructure for localized AI asset production, I
        built a new operating model by influencing crucial partners.
      </p>
      <IconPoints points={studioPoints} />

      <Divider />

      <SectionHeading id="india-campaign">Our first campaign: India Independence Day</SectionHeading>
      <GoalPanel
        Icon={Zap}
        eyebrow="The pilot"
        headline={
          <>
            A <Accent>24-hour</Accent> cross-functional sprint to catch a viral
            trend.
          </>
        }
      >
        Our social media team signaled a viral trend in patriotic content in
        India. We shipped Independence Day AI image content so people could
        celebrate in their WhatsApp statuses and chats.
      </GoalPanel>

      <h3 className="text-lg font-semibold mt-6 mb-4">In execution: Independence Day in WhatsApp</h3>
      <SplitWithScreen
        screen={
          <Screen
            src="/work/whatsapp-genai-cultural-campaigns/genai-cultural-campaigns-thumbnail.png"
            alt="Create with Meta AI screen in WhatsApp showing a generated Happy Independence Day image with the Indian flag, plus alternate image options"
            width={473}
            height={1024}
            caption="Creating an Independence Day image with Meta AI."
          />
        }
      >
        <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">The result</p>
        <IconPoints points={indiaResultPoints} />
      </SplitWithScreen>

      <Divider />

      <SectionHeading id="scaling-model">Scaling the campaign model</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        I codified the approach into a repeatable global playbook, leading to
        sustained gains across the 2026 calendar.
      </p>
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {scaledCampaigns.map((campaign) => (
          <InShortCard key={campaign.name} label={campaign.name}>
            <p className="text-3xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
              {campaign.value}
            </p>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{campaign.detail}</p>
          </InShortCard>
        ))}
      </div>

      <Divider />

      <SectionHeading id="impact">The impact</SectionHeading>
      <StatsPanel Icon={ArrowUpRight} eyebrow="A new growth trajectory" stats={impactStats}>
        <p className="text-sm text-zinc-400">
          Moving from a centralized, static model to a localized, high-velocity
          GTM engine turned content into a primary conversion lever. It turned
          a regression into a sustained global growth engine, and set a new
          framework for how AI products can achieve true global resonance.
        </p>
      </StatsPanel>
    </article>
  );
}
