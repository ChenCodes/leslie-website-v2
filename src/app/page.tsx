import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkCard from "./components/WorkCard";
import type { WorkProject } from "./components/WorkCard";

const experience = [
  { year: "2024 - Present", company: "Meta (WhatsApp)", title: "Senior Content Designer" },
  { year: "2021", company: "Meta (WhatsApp)", title: "Content Designer" },
  { year: "2020", company: "Meta (Messenger)", title: "Content Strategist" },
];

const placeholderProjects: WorkProject[] = [
  {
    name: "Designing a faster way to decide for millions",
    project: "WhatsApp polls • 2025",
    status: "Shipped",
    slug: "whatsapp-polls",
    passwordProtected: true,
    password: "leslie",
  },
  {
    name: "Placeholder work name two",
    project: "Project Name • 2025",
    status: "Concept",
    slug: "placeholder-two",
    passwordProtected: true,
    password: "leslie",
  },
  {
    name: "Placeholder work name three",
    project: "Project Name • 2024",
    status: "Handed off",
    slug: "placeholder-three",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />

      <main className="pt-24 md:pt-28 pb-16">
        {/* Hero + Experience row */}
        <section className="px-6 md:px-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Hero text */}
            <div className="lg:col-span-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
                I&apos;m Leslie, a content designer who strives for{" "}
                <em className="italic text-zinc-600 dark:text-zinc-400">
                  simplicity driven value
                </em>
                .
              </h1>
            </div>

            {/* Right: Experience list - enough width so no column wraps */}
            <div className="lg:col-span-4 min-w-0">
              <div className="space-y-4 min-w-0 lg:min-w-[28rem]">
                {experience.map((item) => (
                  <div
                    key={`${item.year}-${item.company}`}
                    className="grid grid-cols-[8rem_1fr_12rem] gap-1 md:gap-2 items-baseline"
                  >
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 tabular-nums text-left whitespace-nowrap">
                      {item.year}
                    </span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                      Meta{" "}
                      {item.company.includes("WhatsApp") ? (
                        <span style={{ color: "#25D366" }}>(WhatsApp)</span>
                      ) : item.company.includes("Messenger") ? (
                        <span style={{ color: "#0866ff" }}>(Messenger)</span>
                      ) : (
                        item.company.replace(/^Meta\s*/, "")
                      )}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 text-right whitespace-nowrap">
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
