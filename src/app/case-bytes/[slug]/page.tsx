import CaseStudyLayout from "@/app/components/case-study/CaseStudyLayout";
import type { CaseStudySection } from "@/app/components/case-study/types";
import WhatsAppVideoMessagesContent, {
  whatsAppVideoMessagesSections,
} from "../content/WhatsAppVideoMessagesContent";
import EndCallSurveyRedesignContent, {
  endCallSurveyRedesignSections,
} from "../content/EndCallSurveyRedesignContent";
import BatteryRestrictionDialogContent, {
  batteryRestrictionDialogSections,
} from "../content/BatteryRestrictionDialogContent";
import MessengerE2ESecurityChecksContent, {
  messengerE2ESecurityChecksSections,
} from "../content/MessengerE2ESecurityChecksContent";

type Props = { params: Promise<{ slug: string }> };

const SLUG_CONTENT: Record<
  string,
  {
    projectName: string;
    title: string;
    Component: () => React.JSX.Element;
    sections: CaseStudySection[];
  }
> = {
  "whatsapp-video-messages": {
    projectName: "Introducing video messages at WhatsApp",
    title: "WhatsApp video messages",
    Component: WhatsAppVideoMessagesContent,
    sections: whatsAppVideoMessagesSections,
  },
  "end-call-survey-redesign": {
    projectName: "WhatsApp end call survey",
    title: "Call survey redesign",
    Component: EndCallSurveyRedesignContent,
    sections: endCallSurveyRedesignSections,
  },
  "battery-restriction-dialog": {
    projectName: "Warning WhatsApp callers with battery restriction turned on",
    title: "Battery restriction dialog",
    Component: BatteryRestrictionDialogContent,
    sections: batteryRestrictionDialogSections,
  },
  "messenger-e2e-security-checks": {
    projectName: "Verifying that my chat is E2E encrypted",
    title: "Messenger E2E security checks (exploration)",
    Component: MessengerE2ESecurityChecksContent,
    sections: messengerE2ESecurityChecksSections,
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
  const sections = entry?.sections ?? [];

  return (
    <CaseStudyLayout
      title={title}
      backHref="/#case-bytes"
      backLabel="← Back to case bites"
      sections={sections}
    >
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">
            Case byte content for this project can go here.
          </p>
        )}
    </CaseStudyLayout>
  );
}
