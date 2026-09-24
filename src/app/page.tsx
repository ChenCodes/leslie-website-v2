import { MessageCircleCheck } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkCard from "./components/WorkCard";
import type { WorkProject } from "./components/WorkCard";
import CaseByteCard from "./components/CaseByteCard";
import type { CaseByteItem } from "./components/CaseByteCard";

const placeholderProjects: WorkProject[] = [
  {
    name: "Driving Muse Promotional Content Strategy Across WhatsApp",
    project: "Brand guardrails and context-aware promotion for a personal AI agent",
    slug: "muse-whatsapp",
    passwordProtected: true,
    previewImage: "/work/muse-whatsapp/muse-already-on-it.jpg",
    previewObjectPosition: "50% 78%",
  },
  {
    name: "Accelerating WhatsApp GenAI Adoption with Cultural Campaigns",
    project: "Regional holidays, AI Content Studio, and global GenAI growth",
    slug: "whatsapp-genai-cultural-campaigns",
    previewImage:
      "/work/whatsapp-genai-cultural-campaigns/genai-cultural-campaigns-thumbnail.png",
    previewObjectPosition: "50% 42%",
  },
  {
    name: "Introducing Meta Avatars to WhatsApp",
    project: "Bringing Meta Avatars to WhatsApp through a privacy lens",
    slug: "meta-avatars-whatsapp",
    passwordProtected: true,
    previewImage: "/work/meta-avatars-whatsapp/avatars-thumbnail.png",
  },
  {
    name: "AI Stickers on WhatsApp",
    project: "Driving awareness and early adoption",
    slug: "ai-stickers-whatsapp",
    passwordProtected: true,
    previewImage: "/work/ai-stickers-whatsapp/ai-stickers-thumbnail-2.jpg",
  },
  {
    name: "AI Communications Playbook",
    project: "An org-wide framework for design consistency and faster decision making",
    slug: "ai-communications-playbook",
    passwordProtected: true,
    previewImage: "/work/ai-communications-playbook/decision-tree-thumbnail-2.png",
  },
  {
    name: "WhatsApp Polls",
    project: "Designing a faster way to make plans for millions",
    slug: "whatsapp-polls",
    previewImage: "/work/whatsapp-polls/polls-thumbnail.png",
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />

      <main className="flex-1 pt-24 md:pt-28 pb-16">
        {/* Hero */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto pt-16 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Hero text */}
            <div className="lg:col-span-6 space-y-3">
              <h1 className="relative inline-block mt-0 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
                I&apos;m Leslie, a staff content designer at Meta.
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-snug">
              I have 8+ years of experience leading high-converting content strategy, product growth, and user-centered design.
              </p>
            </div>

          </div>
        </section>

        {/* Work projects: GIF + name + project + year + status */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto mt-20 md:mt-28">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-10">
            Case studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {placeholderProjects.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section
          id="case-bytes"
          className="px-6 md:px-10 max-w-6xl mx-auto mt-20 md:mt-28 scroll-mt-24"
        >
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-10">
            Case bites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
