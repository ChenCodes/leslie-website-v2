import { MessageCircleCheck } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkCard from "./components/WorkCard";
import type { WorkProject } from "./components/WorkCard";

const experience = [
  { year: "2024", company: "Meta (WhatsApp)", title: "Senior Content Designer" },
  { year: "2021", company: "Meta (WhatsApp)", title: "Content Designer" },
  { year: "2020", company: "Meta (Messenger)", title: "Content Strategist" },
];

const placeholderProjects: WorkProject[] = [
  {
    name: "WhatsApp polls",
    project: "Designing a faster way to decide for millions",
    slug: "whatsapp-polls",
    previewImage: "/work/whatsapp-polls/polls-thumbnail.png",
  },
  {
    name: "Meta Avatars on WhatsApp",
    project: "Introducing Meta Avatars to WhatsApp",
    slug: "meta-avatars-whatsapp",
    passwordProtected: true,
    password: "leslie",
    previewImage: "/work/meta-avatars-whatsapp/avatars-thumbnail.png",
  },
  {
    name: "AI Stickers on WhatsApp",
    project: "Driving awareness and early adoption",
    slug: "ai-stickers-whatsapp",
    passwordProtected: true,
    password: "leslie",
    previewImage: "/work/ai-stickers-whatsapp/ai-stickers-thumbnail.png",
  },
  {
    name: "AI communications playbook",
    project: "An org-wide framework for design consistency and faster decision making",
    slug: "ai-communications-playbook",
    passwordProtected: true,
    password: "leslie",
    previewImage: "/work/ai-communications-playbook/decision-tree-thumbnail-2.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />

      <main className="flex-1 pt-24 md:pt-28 pb-16">
        {/* Hero + Experience row */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto pt-16 md:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Hero text */}
            <div className="lg:col-span-6 space-y-3">
              <h1 className="mt-0 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
                I&apos;m Leslie, a content designer.
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-snug">
                I design usable conversations between people and products to drive business growth.{" "}
                <MessageCircleCheck
                  className="inline-block align-middle"
                  size={28}
                  style={{ color: "#25D366" }}
                />
              </p>
            </div>

            {/* Right: Experience list - tabular layout with distinct columns */}
            <div className="lg:col-span-4 min-w-0">
              <div className="space-y-4 min-w-0 lg:min-w-[40rem] mt-3">
                {experience.map((item) => (
                  <div
                    key={`${item.year}-${item.company}`}
                    className="grid grid-cols-[2rem_7rem_20rem] gap-6 md:gap-10 items-baseline"
                  >
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 tabular-nums text-left whitespace-nowrap">
                      {item.year}
                    </span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 text-left whitespace-nowrap">
                      Meta{" "}
                      {item.company.includes("WhatsApp") ? (
                        <span style={{ color: "#25D366" }}>(WhatsApp)</span>
                      ) : item.company.includes("Messenger") ? (
                        <span style={{ color: "#0866ff" }}>(Messenger)</span>
                      ) : (
                        item.company.replace(/^Meta\s*/, "")
                      )}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 text-left whitespace-nowrap">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work projects: GIF + name + project + year + status */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto mt-20 md:mt-28">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-10">
            Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {placeholderProjects.map((project) => (
              <WorkCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
