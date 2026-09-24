import Image from "next/image";
import type { CaseStudySection } from "@/app/components/case-study/types";

export const museWhatsAppSections: CaseStudySection[] = [
  { id: "in-short", title: "In short" },
  { id: "branding-framework", title: "Core branding framework and locked vocabulary" },
  { id: "contextual-promotion", title: "Contextually relevant promotion strategy" },
  { id: "testing-territories", title: "Data-backed testing and variant territories" },
];

const surfaces = [
  {
    surface: "Chat inbox",
    detail: "Promotional cards",
    strategy:
      "Framed task delegation around active messaging routines to present Muse as an immediate, inline time-saver.",
  },
  {
    surface: "Meta AI tab null state",
    strategy:
      "Adapted prompt chips to lead directly with outcome-focused benefits rather than technical mechanisms before the user starts typing.",
  },
  {
    surface: "Empty chat",
    detail: "New user landing",
    strategy:
      "Framed first-run entry points as a helpful guide to assist new users with initial setup, contact discovery, and profile configuration.",
  },
  {
    surface: "Shared artifacts",
    detail: "Group and 1:1 upsells",
    strategy:
      "Anchored “Created with Muse” attribution banners directly to the shared output (e.g., apps, docs, trackers) to explain why Muse was introduced.",
  },
];

export default function MuseWhatsAppContent() {
  return (
    <article>
      <h2 id="in-short" className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">In short</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        As Content Design Lead for Mark Zuckerberg&apos;s Muse Tiger Team on
        WhatsApp, I directed the end-to-end promotional strategy to drive
        WhatsApp users toward discovering and adopting the native, in-app Muse
        experience and personal agent capabilities. By establishing unified
        brand guardrails, designing data-backed messaging frameworks, and
        adapting surrounding language to feel native to every product context, I
        led the content strategy across all key WhatsApp touchpoints.
      </p>
      <div className="my-6 max-w-full">
        <Image
          src="/work/muse-whatsapp/muse-shopping.jpg"
          alt="Let Muse do the shopping: Muse is comparing prices after a user says they like the pink softball helmet"
          width={1029}
          height={844}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full max-w-xl h-auto"
        />
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 id="branding-framework" className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">
        Core branding framework and locked vocabulary
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        To build trust and maintain parity across Meta surfaces, I established a
        locked brand taxonomy and clear, strict content rules.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Locked reference branding</h3>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          <strong>Canonical brand statement:</strong> &ldquo;Muse, your personal
          AI agent&rdquo;
        </li>
        <li>
          <strong>First-touch / announcement variant:</strong> &ldquo;Muse, your
          new personal AI agent&rdquo; (tested winner; locked string for initial
          touchpoints)
        </li>
        <li>
          <strong>Customization surfaces variant:</strong> &ldquo;Muse, the AI
          you can customize&rdquo; (deliberate exception for personalization
          entry points)
        </li>
        <li>
          <strong>Short-form reference:</strong> &ldquo;your agent&rdquo; or
          &ldquo;Muse&rdquo; (used strictly after the full descriptor is
          established in-flow)
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">Tone and grammar hard rules</h3>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          <strong>Identity:</strong> Muse is referred to as &ldquo;it&rdquo;—never
          as an &ldquo;assistant,&rdquo; &ldquo;bot,&rdquo;
          &ldquo;companion,&rdquo; or &ldquo;copilot.&rdquo;
        </li>
        <li>
          <strong>Capability:</strong> Use &ldquo;can&rdquo; to describe
          capabilities (e.g., &ldquo;Muse can help...&rdquo;); never claim it
          &ldquo;will&rdquo; or &ldquo;does it all.&rdquo;
        </li>
        <li>
          <strong>Naming conventions:</strong> Replaced outdated, informal terms
          like &ldquo;buddy&rdquo; in thread assets with the canonical
          &ldquo;personal agent.&rdquo;
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">CTA framework</h3>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          <strong>Primary entry point:</strong> Try Muse (incumbent
          top-performing CTA across in-product upsells)
        </li>
        <li>
          <strong>Direct acquisition:</strong> Get Muse (approved alternative for
          clear brand acquisition)
        </li>
        <li>
          <strong>NUX sequence only:</strong> Get started (reserved exclusively
          for first-run onboarding paths)
        </li>
        <li>
          <strong>In-thread / contextual:</strong> Try it (low-commitment CTA for
          immediate, in-context message surfaces)
        </li>
      </ul>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 id="contextual-promotion" className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">
        Contextually relevant promotion strategy
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        A key challenge was making promotional plugs feel like natural, value-add
        moments within the chat experience rather than intrusive marketing
        pop-ups. While core value pillars and branding remained static across
        tests, I dynamically flexed the surrounding narrative language to match
        the exact user context across surfaces.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 dark:bg-zinc-900/50">
            <tr>
              <th className="px-4 py-3 font-semibold">Surface context</th>
              <th className="px-4 py-3 font-semibold">Narrative strategy and adaptation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {surfaces.map((row) => (
              <tr key={row.surface} className="align-top">
                <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100 min-w-40">
                  {row.surface}
                  {row.detail && (
                    <span className="block font-normal text-zinc-500 dark:text-zinc-400">
                      {row.detail}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{row.strategy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2">Deep dive: Shared artifact contextual upsells</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        When a user receives a Muse-generated artifact in a group or 1:1 chat,
        the attribution banner bridges the shared work to the agent&apos;s
        capabilities:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Contextual origin:</strong> Directly cites the shared item
          (e.g., &ldquo;Created with Muse...&rdquo;) so the plug feels earned
          and relevant to the conversation.
        </li>
        <li>
          <strong>Natural extension:</strong> Connects the specific artifact to
          broader utility (planning, tracking, creation).
        </li>
        <li>
          <strong>Differentiating capability:</strong> Concludes by highlighting
          full task delegation—positioning agentic task hand-off as the key
          differentiator beyond standard text generation.
        </li>
      </ul>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 id="testing-territories" className="text-xl font-semibold mt-8 mb-4 scroll-mt-28">
        Data-backed testing and variant territories
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        In partnership with Data Science and Product Growth teams, I defined and
        tested messaging across three strategic variant territories.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">High-level variant categories</h3>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          <strong>Task-offloading territory:</strong> Focuses on delegating
          high-frequency daily routines (such as research, booking, and inbox
          management) to emphasize time savings.
        </li>
        <li>
          <strong>Relief and administrative territory:</strong> Focuses on
          reducing cognitive burden and eliminating ongoing administrative
          hassle (such as subscription management and deal tracking).
        </li>
        <li>
          <strong>Personalization and control territory:</strong> Emphasizes
          user agency, highlight-focused customization, agent naming, and
          tailored communication styles.
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">Target cohort messaging overlays</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        To increase contextual relevance across specific user segments, I
        developed specialized narrative overlays:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Parents cohort:</strong> Highlights mental load reduction,
          schedule coordination, and keeping family plans synchronized.
        </li>
        <li>
          <strong>Shoppers cohort:</strong> Emphasizes price-drop alerts, deal
          discovery, and order comparison triggers.
        </li>
        <li>
          <strong>Students cohort:</strong> Focuses on task organization,
          research assistance, and study planning.
        </li>
      </ul>
    </article>
  );
}
