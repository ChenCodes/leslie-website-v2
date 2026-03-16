import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppVideoMessagesContent from "../content/WhatsAppVideoMessagesContent";
import EndCallSurveyRedesignContent from "../content/EndCallSurveyRedesignContent";
import BatteryRestrictionDialogContent from "../content/BatteryRestrictionDialogContent";
import MessengerE2ESecurityChecksContent from "../content/MessengerE2ESecurityChecksContent";

type Props = { params: Promise<{ slug: string }> };

const SLUG_CONTENT: Record<
  string,
  { projectName: string; title: string; Component: () => React.JSX.Element }
> = {
  "whatsapp-video-messages": {
    projectName: "Introducing video messages at WhatsApp",
    title: "WhatsApp video messages",
    Component: WhatsAppVideoMessagesContent,
  },
  "end-call-survey-redesign": {
    projectName: "WhatsApp end call survey",
    title: "Call survey redesign",
    Component: EndCallSurveyRedesignContent,
  },
  "battery-restriction-dialog": {
    projectName: "Warning WhatsApp callers with battery restriction turned on",
    title: "Battery restriction dialog",
    Component: BatteryRestrictionDialogContent,
  },
  "messenger-e2e-security-checks": {
    projectName: "Verifying that my chat is E2E encrypted",
    title: "Messenger E2E security checks (exploration)",
    Component: MessengerE2ESecurityChecksContent,
  },
};

export default async function CaseByteDetailPage({ params }: Props) {
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
          href="/#case-bytes"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-6 inline-block"
        >
          ← Back to case bites
        </Link>
        <h1 className="text-2xl font-semibold mb-8">{title}</h1>
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">
            Case byte content for this project can go here.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
