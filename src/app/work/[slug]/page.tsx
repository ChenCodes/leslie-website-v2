import CaseStudyLayout from "@/app/components/case-study/CaseStudyLayout";
import type { CaseStudySection } from "@/app/components/case-study/types";
import WhatsAppPollsContent, { whatsappPollsSections } from "../content/WhatsAppPollsContent";
import AICommunicationsPlaybookContent, {
  aiCommunicationsPlaybookSections,
} from "../content/AICommunicationsPlaybookContent";
import AISickersWhatsAppContent, {
  aiStickersWhatsAppSections,
} from "../content/AISickersWhatsAppContent";
import MetaAvatarsWhatsAppContent, {
  metaAvatarsWhatsAppSections,
} from "../content/MetaAvatarsWhatsAppContent";
import GenAIWhatsAppCulturalCampaignsContent, {
  genAIWhatsAppCulturalCampaignSections,
} from "../content/GenAIWhatsAppCulturalCampaignsContent";

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
  "whatsapp-polls": {
    projectName: "WhatsApp polls",
    title: "Designing a faster way to make plans for millions",
    Component: WhatsAppPollsContent,
    sections: whatsappPollsSections,
  },
  "ai-communications-playbook": {
    projectName: "AI communications playbook",
    title: "An org-wide framework for design consistency and faster decision making",
    Component: AICommunicationsPlaybookContent,
    sections: aiCommunicationsPlaybookSections,
  },
  "ai-stickers-whatsapp": {
    projectName: "Launching AI Stickers on WhatsApp",
    title: "Driving Awareness and Early Adoption",
    Component: AISickersWhatsAppContent,
    sections: aiStickersWhatsAppSections,
  },
  "meta-avatars-whatsapp": {
    projectName: "Introducing Meta Avatars to WhatsApp",
    title: "",
    Component: MetaAvatarsWhatsAppContent,
    sections: metaAvatarsWhatsAppSections,
  },
  "whatsapp-genai-cultural-campaigns": {
    projectName: "Accelerating WhatsApp GenAI adoption with cultural campaigns",
    title: "",
    Component: GenAIWhatsAppCulturalCampaignsContent,
    sections: genAIWhatsAppCulturalCampaignSections,
  },
};

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = SLUG_CONTENT[slug];
  const title = entry
    ? entry.title
      ? `${entry.projectName}: ${entry.title}`
      : entry.projectName
    : slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
  const ContentComponent = entry?.Component;
  const sections = entry?.sections ?? [];

  return (
    <CaseStudyLayout
      title={title}
      backHref="/"
      backLabel="← Back to case studies"
      sections={sections}
    >
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">
            Work detail content for this project can go here.
          </p>
        )}
    </CaseStudyLayout>
  );
}
