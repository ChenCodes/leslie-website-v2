import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkCard from "./components/WorkCard";
import type { WorkProject } from "./components/WorkCard";
import CaseByteCard from "./components/CaseByteCard";
import {
  AIStickersPreview,
  CulturalCampaignsPreview,
  MusePreview,
  PlaybookPreview,
  PollsPreview,
} from "./components/ThumbnailPreviews";
import type { CaseByteItem } from "./components/CaseByteCard";

const placeholderProjects: WorkProject[] = [
  {
    name: "Growing Muse on WhatsApp",
    project: "Data-backed upsells and trust-first onboarding for a personal AI agent",
    slug: "muse-whatsapp",
    passwordProtected: true,
    previewImage: "/work/muse-whatsapp/muse-already-on-it.jpg",
    preview: <MusePreview />,
    previewObjectPosition: "50% 78%",
  },
  {
    name: "Introducing Avatars to WhatsApp",
    project: "Bringing Meta Avatars to WhatsApp through a privacy lens",
    slug: "meta-avatars-whatsapp",
    previewImage: "/work/meta-avatars-whatsapp/avatars-thumbnail.png",
  },
  {
    name: "WhatsApp Polls",
    project: "Designing a faster way to make plans for millions",
    slug: "whatsapp-polls",
    previewImage: "/work/whatsapp-polls/polls-thumbnail.png",
    preview: <PollsPreview />,
  },
  {
    name: "AI Stickers on WhatsApp",
    project: "Driving awareness and early adoption",
    slug: "ai-stickers-whatsapp",
    previewImage: "/work/ai-stickers-whatsapp/ai-stickers-thumbnail-2.jpg",
    preview: <AIStickersPreview />,
  },
  {
    name: "Driving GenAI Adoption with Cultural Campaigns",
    project: "Regional holidays, AI Content Studio, and global GenAI growth",
    slug: "whatsapp-genai-cultural-campaigns",
    previewImage:
      "/work/whatsapp-genai-cultural-campaigns/genai-cultural-campaigns-thumbnail.png",
    previewObjectPosition: "50% 42%",
    preview: <CulturalCampaignsPreview />,
  },
  {
    name: "AI Communications Playbook",
    project: "An org-wide framework for design consistency and faster decision making",
    slug: "ai-communications-playbook",
    passwordProtected: true,
    previewImage: "/work/ai-communications-playbook/decision-tree-thumbnail-2.png",
    preview: <PlaybookPreview />,
  },
];

const caseBytes: CaseByteItem[] = [
  {
    name: "Introducing video messages at WhatsApp",
    title: "WhatsApp video messages",
    slug: "whatsapp-video-messages",
  },
  {
    name: "WhatsApp end call survey",
    title: "Call survey redesign",
    slug: "end-call-survey-redesign",
  },
  {
    name: "Warning WhatsApp callers with battery restriction turned on",
    title: "Battery restriction dialog",
    slug: "battery-restriction-dialog",
  },
  {
    name: "Verifying that my chat is E2E encrypted",
    title: "Messenger E2E security checks (exploration)",
    slug: "messenger-e2e-security-checks",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 md:mb-10 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-5">
      <div>
        <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          <span className="h-px w-8 bg-emerald-500" aria-hidden />
          {eyebrow}
        </p>
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-4xl md:text-5xl leading-none tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      )}
    </div>
  );
}

/** Minimal line art: a pen writing on paper, with AI sparkles rising from the words. */
function WritingWithAIIllustration() {
  return (
    <svg
      viewBox="0 0 260 220"
      className="hidden md:block w-56 lg:w-64 h-auto text-zinc-800 dark:text-zinc-200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Paper */}
      <g transform="rotate(-6 115 120)">
        <rect x="40" y="30" width="150" height="176" rx="12" className="fill-white dark:fill-zinc-900" />
        <path d="M62 66h92M62 86h106M62 106h74" className="stroke-zinc-300 dark:stroke-zinc-600" />
        {/* Handwritten line */}
        <path d="M62 140c8-14 18-14 24 0s16 14 24 0 16-14 24 0" />
      </g>
      {/* Pen, nib resting at the end of the handwritten line */}
      <g transform="translate(136 146) rotate(40)">
        <path d="M0 0l-7-20h14z" className="fill-white dark:fill-zinc-900" />
        <path d="M0-5v-11" />
        <rect x="-8" y="-34" width="16" height="14" rx="3" className="fill-white dark:fill-zinc-900" />
        <rect x="-9" y="-112" width="18" height="78" rx="9" className="fill-emerald-100 dark:fill-emerald-500/20" />
        <path d="M-9-46h18" />
      </g>
      {/* AI sparkles */}
      <path
        d="M206 118c2 12 6 16 18 18-12 2-16 6-18 18-2-12-6-16-18-18 12-2 16-6 18-18z"
        className="fill-emerald-400 stroke-emerald-700 dark:fill-emerald-400 dark:stroke-emerald-300"
      />
      <path
        d="M232 92c1 6 3 8 9 9-6 1-8 3-9 9-1-6-3-8-9-9 6-1 8-3 9-9z"
        className="fill-white stroke-emerald-700 dark:fill-zinc-900 dark:stroke-emerald-300"
      />
      <path
        d="M196 170c1 5 2 6 7 7-5 1-6 2-7 7-1-5-2-6-7-7 5-1 6-2 7-7z"
        className="fill-emerald-200 stroke-emerald-700 dark:fill-emerald-500/40 dark:stroke-emerald-300"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />

      <main className="flex-1 pt-24 md:pt-28 pb-16">
        {/* Hero */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto pt-8 md:pt-14 grid md:grid-cols-[1fr_auto] items-center gap-10">
          <div>
            <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              <span className="h-px w-8 bg-emerald-500" aria-hidden />
              {["Content", "Model engineering", "UX design"].map((discipline, i) => (
                <span key={discipline} className="flex items-center gap-3">
                  {i > 0 && <span className="size-1 rounded-full bg-emerald-500" aria-hidden />}
                  {discipline}
                </span>
              ))}
            </p>
            <h1 className="max-w-3xl font-[family-name:var(--font-instrument-serif)] text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50">
              I&apos;m Leslie, a staff{" "}
              <span className="text-emerald-700 dark:text-emerald-400">content designer</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-xl md:text-2xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
              I lead{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                high-converting content strategy
              </span>{" "}
              for launches that reach{" "}
              <span className="font-medium text-zinc-900 dark:text-zinc-100 underline decoration-emerald-400/70 decoration-2 underline-offset-[6px]">
                billions of people
              </span>{" "}
              and drive product growth.
            </p>
          </div>
          <WritingWithAIIllustration />
        </section>

        {/* Work projects: GIF + name + project + year + status */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto mt-14 md:mt-16">
          <SectionHeader eyebrow="Selected work" title="Case studies" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {placeholderProjects.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section
          id="case-bytes"
          className="px-6 md:px-10 max-w-6xl mx-auto mt-20 md:mt-24 scroll-mt-24"
        >
          <SectionHeader
            eyebrow="Quick reads"
            title="Case bites"
            description="Focused content problems, solved in a few words."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseBytes.map((item) => (
              <CaseByteCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
