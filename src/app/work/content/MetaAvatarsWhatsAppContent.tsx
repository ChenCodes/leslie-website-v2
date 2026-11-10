import {
  ArrowRight,
  ArrowUpRight,
  Drama,
  Fingerprint,
  Heart,
  MessageCircle,
  Search,
  Share2,
  ShieldCheck,
  Smile,
  Sparkles,
  Sticker,
  Target,
  UserRound,
  VenetianMask,
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
  SplitWithScreen,
  StatsPanel,
  type IconPoint,
} from "@/app/components/case-study/blocks";

export const metaAvatarsWhatsAppSections: CaseStudySection[] = [
  { id: "in-short", title: "In short" },
  { id: "job-to-be-done", title: "The job to be done" },
  { id: "adapting-avatars", title: "Adapting Meta Avatars for WhatsApp" },
  { id: "challenges-solutions", title: "Navigating brand perception" },
  { id: "content-designer-role", title: "What I did as the content designer" },
  { id: "viral-growth", title: "Designing for viral growth" },
  { id: "impact", title: "The impact" },
];

const researchPoints: IconPoint[] = [
  {
    Icon: UserRound,
    label: "The “virtual self”",
    text: "People wanted to connect in a way that felt more “them” than a standard emoji.",
  },
  {
    Icon: VenetianMask,
    label: "The “privacy mask” insight",
    text: "People in large communities were often sensitive about sharing their actual face with strangers. So I positioned Avatars as a secure digital proxy: a way to mask their physical face while still engaging.",
  },
];

const promoStrategyPoints: IconPoint[] = [
  {
    Icon: Search,
    label: "Choosing the right keywords",
    text: "Slogan testing showed customization and “saying more” through stickers were the strongest hooks, and “personalize” was the word people naturally used to describe why they'd adopt an Avatar. I front-loaded these into the title and first two bullets.",
    chips: ["Customization", "Say more", "Personalize"],
  },
  {
    Icon: Smile,
    label: "An expression tool",
    text: "I positioned the Avatar as a way to show up as yourself on your profile, expressing your emotions and style without sharing a real headshot.",
    quotes: ["Show up as yourself"],
  },
  {
    Icon: ShieldCheck,
    label: "Assuring safety",
    text: "I explicitly messaged that personal messages stay secure and was transparent about data handling, for people wary of Meta branding.",
  },
  {
    Icon: Heart,
    label: "Encouraging tone",
    text: "Focusing on “your” Avatar built personal attachment, in an optimistic voice that avoided salesy jargon.",
  },
];

const bottomSheetPoints: IconPoint[] = [
  {
    Icon: MessageCircle,
    label: "When it appears",
    text: "On a person's next visit to a chat thread.",
  },
  {
    Icon: Sparkles,
    label: "Leads with the winning hooks",
    text: "The title and first two bullets carry the tested keywords.",
    quotes: [
      "Say more with Avatars now on WhatsApp",
      "Personalize your avatar's appearance",
      "Share how you feel with avatar stickers",
    ],
  },
  {
    Icon: ShieldCheck,
    label: "Reassurance up front",
    text: "Privacy copy sits right above the button, before anyone commits.",
    quotes: [
      "Your personal messages and calls are end-to-end encrypted. No one else, not even WhatsApp or Meta, can see or listen to them.",
    ],
  },
];

const viralPoints: IconPoint[] = [
  {
    Icon: Share2,
    label: "Integrated sharing flows",
    text: "Entry points built directly into the sticker page let people share the feature with friends and family in a single tap.",
  },
  {
    Icon: Sticker,
    label: "Sticker sends as an entry point",
    text: "When someone receives an Avatar sticker but hasn't made an Avatar yet, they can tap the sticker to launch the creation flow. Every message sent became an organic invitation.",
  },
];

const impactStats = [
  { value: "2.7M", label: "avatars created in the first week" },
  { value: "500K", label: "daily active users engaging with the feature" },
  { value: "38%", label: "completion rate, vs. a 15% average across other Meta apps" },
];

function AvatarIllustration() {
  return (
    <svg viewBox="0 0 240 200" className="w-full h-auto" aria-hidden>
      {/* Sticker outline */}
      <circle cx="112" cy="104" r="72" fill="#ffffff" stroke="#18181b" strokeWidth="3" />
      {/* Face */}
      <circle cx="112" cy="110" r="40" fill="#f5d0b5" stroke="#18181b" strokeWidth="3" />
      {/* Hair */}
      <path
        d="M70 112c-2-32 16-50 42-50s44 18 42 50c-6-16-20-26-36-26-6 8-18 14-30 14-8 0-14 4-18 12z"
        fill="#18181b"
        stroke="#18181b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="98" cy="108" r="4" fill="#18181b" />
      <circle cx="126" cy="108" r="4" fill="#18181b" />
      <path d="M100 124c6 7 18 7 24 0" fill="none" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="90" cy="120" r="5" fill="#fda4af" opacity="0.7" />
      <circle cx="134" cy="120" r="5" fill="#fda4af" opacity="0.7" />
      {/* Privacy shield */}
      <path
        d="M178 128l22 8v16c0 14-10 22-22 26-12-4-22-12-22-26v-16z"
        className="fill-emerald-300"
        stroke="#18181b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M170 152l6 6 11-12" fill="none" stroke="#18181b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sparkles */}
      <path
        d="M196 24c2 12 6 16 18 18-12 2-16 6-18 18-2-12-6-16-18-18 12-2 16-6 18-18z"
        className="fill-emerald-500"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 34c1 7 4 10 11 11-7 1-10 4-11 11-1-7-4-10-11-11 7-1 10-4 11-11z"
        fill="#ffffff"
        stroke="#18181b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heroTags = [
  { Icon: Fingerprint, label: "Personalize", className: "left-0 top-4" },
  { Icon: Sticker, label: "Say more", className: "right-0 top-1/3" },
  { Icon: ShieldCheck, label: "Privacy first", className: "left-2 bottom-2" },
];

export function MetaAvatarsWhatsAppHero() {
  return (
    <CaseStudyHero
      eyebrow="Case study · WhatsApp"
      title={
        <>
          Introducing Meta <HeroAccent>Avatars</HeroAccent> to WhatsApp
        </>
      }
      subtitle="Bringing Meta Avatars to WhatsApp through a privacy lens."
      tags={["Lead Content Designer", "88 languages", "Privacy-first"]}
      illustration={<AvatarIllustration />}
      floatingTags={heroTags}
    />
  );
}

export default function MetaAvatarsWhatsAppContent() {
  return (
    <article>
      <SectionHeading id="in-short">In short</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <InShortCard label="The goal">
          <p className="text-zinc-700 dark:text-zinc-300">
            Adapt a Meta-branded social media feature into a privacy-first
            identity tool that drives global adoption and self-expression on
            WhatsApp.
          </p>
        </InShortCard>
        <InShortCard label="My role">
          <p className="text-zinc-900 dark:text-zinc-100 font-semibold mb-2">Lead Content Designer</p>
          <p className="text-zinc-700 dark:text-zinc-300">
            I defined the tone framework and value proposition, turning research
            into messaging that positioned Avatars as a virtual self for
            expressing who you are and engaging in large groups safely.
          </p>
        </InShortCard>
        <InShortCard label="The impact" className="sm:col-span-2">
          <div className="flex flex-wrap items-end gap-x-10 gap-y-4">
            <div>
              <p className="text-4xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
                2.7M
              </p>
              <p className="mt-1 text-zinc-700 dark:text-zinc-300">avatars created in the first week</p>
            </div>
            <div>
              <p className="text-4xl font-semibold tracking-tight text-emerald-700 dark:text-emerald-400">
                38%
              </p>
              <p className="mt-1 text-zinc-700 dark:text-zinc-300">completion rate, over 2x the Meta average</p>
            </div>
          </div>
        </InShortCard>
      </div>

      <Divider />

      <SectionHeading id="job-to-be-done">The job to be done</SectionHeading>
      <GoalPanel
        Icon={Target}
        eyebrow="The value proposition"
        headline={
          <>
            &ldquo;WhatsApp Avatars are the best way to easily{" "}
            <Accent>express yourself</Accent>, wherever you are in the world, so
            you feel closer to the people who matter most.&rdquo;
          </>
        }
      >
        Meta product teams asked me to sell this to WhatsApp audiences at the
        right moments in the app. It became an exercise in tone and promotional
        strategy, using research to solve unique privacy and identity
        challenges.
      </GoalPanel>

      <Divider />

      <SectionHeading id="adapting-avatars">Adapting Meta Avatars for WhatsApp</SectionHeading>
      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] items-stretch mb-8">
        <InShortCard label="Facebook and Instagram">
          <p className="text-zinc-700 dark:text-zinc-300">Playful and bold.</p>
        </InShortCard>
        <div className="hidden sm:flex items-center text-emerald-600 dark:text-emerald-400">
          <ArrowRight className="size-5" aria-hidden />
        </div>
        <InShortCard label="WhatsApp" className="border-emerald-200 dark:border-emerald-500/30">
          <p className="text-zinc-700 dark:text-zinc-300">Serious and privacy-centric.</p>
        </InShortCard>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Leaning on research, I created content that stayed consistent with the
        broader Meta narrative while presenting features in a way that felt
        natural to WhatsApp users.
      </p>

      <Divider />

      <SectionHeading id="challenges-solutions">Navigating brand perception</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        One of the hardest hurdles: launching a social Meta product on a
        platform where people are traditionally more private, and sometimes
        skeptical of outside branding.
      </p>
      <IconPoints
        points={[
          {
            Icon: Drama,
            label: "Trust and privacy concerns",
            text: "Research showed part of the WhatsApp user base was wary of features from Meta, and worried that creating an Avatar meant new types of data collection. They valued WhatsApp's end-to-end encryption and hesitated to use a profile tool that required biometric-style customization.",
          },
        ]}
      />
      <div className="my-8 flex flex-wrap items-center gap-3">
        <Chips items={["Social discovery"]} variant="struck" />
        <ArrowRight className="size-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
        <span className="rounded-full bg-emerald-600 dark:bg-emerald-500 px-3 py-1 text-sm font-medium text-white dark:text-zinc-950">
          Personal privacy
        </span>
      </div>
      <GoalPanel
        Icon={VenetianMask}
        eyebrow="The solution"
        subtle
        headline={
          <>
            Stay <Accent>hidden</Accent> while still being yourself.
          </>
        }
      >
        Instead of telling people Avatars were a way to be seen by everyone, I
        framed them as a &ldquo;privacy mask&rdquo;, giving people a reason to
        use the feature that actually supported their desire for privacy.
      </GoalPanel>

      <Divider />

      <SectionHeading id="content-designer-role">What I did as the content designer</SectionHeading>

      <div className="mt-6">
        <NumberedLabel index={1} part="Research" title="Confirming what our users cared about" size="lg" />
        <p className="text-zinc-600 dark:text-zinc-400 mb-3">
          I identified which aspects of Avatars appealed most to people in key
          markets, and uncovered a deeper functional need.
        </p>
        <div className="mb-6">
          <Chips items={["India", "Brazil"]} />
        </div>
        <IconPoints points={researchPoints} />
      </div>

      <div className="mt-10">
        <NumberedLabel index={2} part="Strategy" title="Developing the promotional strategy" size="lg" />
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          To drive adoption, I balanced excitement with the reassurance people
          needed to engage with a new identity feature from Meta.
        </p>
        <IconPoints points={promoStrategyPoints} columns={2} />
      </div>

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: The promotional bottom sheet</h3>
      <SplitWithScreen
        screen={
          <Screen
            src="/work/meta-avatars-whatsapp/avatars-bottom-sheet.png"
            alt="Meta Avatars promotional bottom sheet in WhatsApp: Say more with Avatars now on WhatsApp, with key benefits and Get Started button"
            width={486}
            height={1024}
          />
        }
      >
        <IconPoints points={bottomSheetPoints} />
      </SplitWithScreen>

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: Creating your avatar</h3>
      <div className="mb-8">
        <Screen
          src="/work/meta-avatars-whatsapp/avatars-walkthrough.png"
          alt="Four-panel Meta Avatars on WhatsApp flow: intro screen (Say more with Avatars), skin tone selection, avatar customization, creating your avatar"
          width={1024}
          height={525}
          caption="From the intro screen through skin tone, customization, and creation."
        />
      </div>

      <Divider />

      <SectionHeading id="viral-growth">Designing for viral growth</SectionHeading>
      <GoalPanel
        Icon={ArrowUpRight}
        headline={
          <>
            Turn every sticker into an <Accent>invitation</Accent>.
          </>
        }
      >
        To hit the primary business goal of viral adoption, my product designer
        and I lowered the friction for social sharing, turning a solitary setup
        process into a shared social loop.
      </GoalPanel>
      <IconPoints points={viralPoints} />

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: Sharing from the sticker page</h3>
      <div className="mb-8">
        <Screen
          src="/work/meta-avatars-whatsapp/sticker-sends-entry-point.png"
          alt="Five-panel flow: Stickers browser, Avatars pack preview, share to contact, message with sticker pack link, chat with View Stickers button"
          width={1024}
          height={423}
          caption="Browse the Avatar sticker pack, share it to a contact, and they land on View Stickers."
        />
      </div>

      <h3 className="text-lg font-semibold mt-10 mb-4">In execution: Tap a sticker to create your own</h3>
      <div className="mb-8 max-w-md">
        <Screen
          src="/work/meta-avatars-whatsapp/sticker-tap-create-avatar.png"
          alt="Chat with Avatar sticker (YESSS!) and tap-to-open dialog: Create Your Avatar call to action"
          width={1009}
          height={1024}
          caption="Receiving an Avatar sticker opens a path to create your own."
        />
      </div>

      <Divider />

      <SectionHeading id="impact">The impact</SectionHeading>
      <StatsPanel Icon={ArrowUpRight} eyebrow="Far above Meta averages" stats={impactStats}>
        <p className="text-sm text-zinc-400">
          Meta services can succeed on WhatsApp when adapted with a
          privacy-first lens. Emphasizing privacy, personalization, and
          strategic placement drove adoption far above Meta averages,
          confirming the power of research-informed tone and flow.
        </p>
      </StatsPanel>
    </article>
  );
}
