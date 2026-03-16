import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppPollsContent from "../content/WhatsAppPollsContent";
import AICommunicationsPlaybookContent from "../content/AICommunicationsPlaybookContent";

type Props = { params: Promise<{ slug: string }> };

const SLUG_CONTENT: Record<
  string,
  { projectName: string; title: string; Component: () => React.JSX.Element }
> = {
  "whatsapp-polls": {
    projectName: "WhatsApp polls",
    title: "Designing a faster way to decide for millions",
    Component: WhatsAppPollsContent,
  },
  "ai-communications-playbook": {
    projectName: "AI communications playbook",
    title: "An org-wide framework for design consistency and faster decision making",
    Component: AICommunicationsPlaybookContent,
  },
};

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = SLUG_CONTENT[slug];
  const title = entry
    ? `${entry.projectName}: ${entry.title}`
    : slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
  const ContentComponent = entry?.Component;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Header />
      <main className="flex-1 pt-24 md:pt-28 px-6 md:px-10 max-w-4xl mx-auto pb-16">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-6 inline-block"
        >
          ← Back to Work
        </Link>
        <h1 className="text-2xl font-semibold mb-8">{title}</h1>
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">
            Work detail content for this project can go here.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
