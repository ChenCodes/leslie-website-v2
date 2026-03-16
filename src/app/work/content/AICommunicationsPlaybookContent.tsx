import Image from "next/image";

export default function AICommunicationsPlaybookContent() {
  return (
    <article>
      <h2 className="text-xl font-semibold mt-8 mb-4">In short</h2>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>The problems:</strong> Too many Meta AI feature messages were
          cluttering WhatsApp, and the AI teams who owned them were stuck in
          repetitive debates about which alerts users needed and how to design
          them.
        </li>
        <li>
          <strong>The solution:</strong> I built a reusable communications
          playbook with a logic-based decision tree to automate how and when we
          message users.
        </li>
        <li>
          <strong>My role:</strong> I led the Figma-wide audit of AI promotions,
          established the principles and guardrails, and secured global alignment
          from design, legal, marketing, and go-to-market leads.
        </li>
        <li>
          <strong>Impact:</strong> I eliminated wasted discussion time for Meta
          AI teams and kept the app clean and simple for over 2 billion users.
        </li>
      </ul>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        The challenges: Clutter, conflict, and missing designs
      </h2>
      <ol className="list-decimal pl-6 space-y-4 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Cluttered experience and user drop-off:</strong> Message volume
          led to user frustration and abandonment.
        </li>
        <li>
          <strong>Repetitive team arguments:</strong> Inconsistent experiences
          resulted from debates over messaging components and frequency.
        </li>
        <li>
          <strong>Missing frameworks and components:</strong> There was no basic
          framework or design library components for new AI-related messages.
        </li>
      </ol>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        The solution: A playbook for intentional design
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The aim of the playbook was to empower teams to make instant, principled
        decisions, reduce meeting time, and ensure messages are predictable,
        transparent, and necessary.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        The investigation: Auditing all existing comms
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        To create baseline rules and keep what was working, I audited Figma libraries and hundreds of design files.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Building the foundation:</strong> I looked at designs for AI
          image generation, private chat experiences, and core AI tools to note
          which components worked best for specific messaging.
        </li>
        <li>
          <strong>Spotting inconsistencies:</strong> The audit confirmed that
          different teams were often creating different, custom UI treatments for
          the exact same type of privacy disclosure.
        </li>
      </ul>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        The strategy: &ldquo;Silence as the default&rdquo;
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        We adopted a new core philosophy: only message when it truly matters.
      </p>
      <h3 className="text-lg font-semibold mt-6 mb-2">Rationale for silence</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        This shift was data-driven, referencing performance metrics for group
        notifications. The &ldquo;signal of disturbance&rdquo; was a recurring
        theme across three layers of feedback:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          <strong>Global app surveys:</strong> High-level sentiment showed users
          valued WhatsApp specifically for its lack of clutter.
        </li>
        <li>
          <strong>Feature-specific UXR deep dives:</strong> Users explicitly
          stated they felt &ldquo;interrupted&rdquo; by new AI prompts when they
          were just trying to send a message.
        </li>
        <li>
          <strong>Internal feedback:</strong> Even our employees flagged that the
          app was beginning to feel &ldquo;noisy.&rdquo;
        </li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Too many messages diluted impact and made it harder to maintain user
        attention when it mattered.
      </p>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        The three principles of the playbook
      </h2>
      <ol className="list-decimal pl-6 space-y-4 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Be rigorously simple:</strong> Only interrupt the user if their
          safety or success depends on it. If a message doesn&apos;t help a user
          complete their task or protect their data, it doesn&apos;t belong on
          the screen.
        </li>
        <li>
          <strong>Be relevant:</strong> Deliver information exactly when
          it&apos;s useful—never sooner. We replaced general announcements with
          &ldquo;moment-based&rdquo; triggers.
        </li>
        <li>
          <strong>Be transparent:</strong> Build trust by being bold and clear
          about how AI data is used. Transparency isn&apos;t about legal fine
          print; it&apos;s about ensuring the user feels in control.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-8 mb-4">Main deliverables</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I developed three primary tools to transform our workflow from subjective
        debate to standardized execution.
      </p>
      <ol className="list-decimal pl-6 space-y-4 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          <strong>The decision tree: Real-world guidance.</strong> The centerpiece
          of the playbook is a logic-based decision tree. It provides immediately
          applicable guidance for real-world decision points. When a team is
          stuck choosing between components that serve similar functions, the
          tree adds structure and context. Crucially, it starts with a
          &ldquo;gatekeeper&rdquo; question: &ldquo;Do we really need to bother
          the user at all?&rdquo;
          <div className="mt-4 mb-2 max-w-full">
            <Image
              src="/work/ai-communications-playbook/decision-tree.png"
              alt="Flow chart for when to show or hide information: gatekeeper question on user safety and control, branching to intro bottom sheet, tooltip, mid card, system message, or rely on the design"
              width={900}
              height={500}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
            />
          </div>
        </li>
        <li>
          <strong>The roles and responsibilities chart: The strategic overview.</strong>{" "}
          This chart provides the configuration. It is a broad, simple overview
          that maps specific message types—such as privacy disclosures, new
          feature releases, and educational tips—to their approved design
          treatments.
          <div className="mt-4 mb-2 max-w-full">
            <Image
              src="/work/ai-communications-playbook/roles-responsibilities-chart.png"
              alt="Roles &amp; Responsibilities for User Messaging: system message, bottom sheet, in-line text, tooltip, and mid-card with goals, use cases, and examples"
              width={800}
              height={600}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
            />
          </div>
        </li>
        <li>
          <strong>&ldquo;In the wild&rdquo; gallery: Proven success.</strong> To
          move the playbook from theory to reality, I provided high-fidelity
          examples of each design treatment working in production. By showcasing
          these components in their intended context, I proved they were
          effective solutions already successfully serving users.
        </li>
      </ol>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        A rigorous review process
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I put these deliverables through a rigorous review process to ensure the
        playbook resonated with all AI teams at WhatsApp and would hold up under
        the pressure of a global launch.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Cross-functional alignment:</strong> I ran the framework by
          legal and marketing teams to ensure in-app rules complied with privacy
          regulations. I also collaborated with go-to-market (GTM) teams to
          ensure in-app messaging felt like a seamless extension of our external
          brand.
        </li>
        <li>
          <strong>Expert stress-testing:</strong> I presented the playbook to
          every lead product and content designer across the AI organization. I
          ensured these rules worked across vastly different surfaces, from AI
          image generation to complex agentic experiences.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Getting buy-in and executive enforcement
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        A playbook is only as strong as the people who follow it. Once the
        reviews were finalized and I published the playbook as a Google Slides
        deck, my director and I requested that all design and product executives
        point their reports to it. It became the official source of truth for
        all future in-app communication decisions for AI features at WhatsApp.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">The bottom line</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        The AI in-app comms playbook became the ultimate guardrail against noise
        and a way to circumvent wasting time on repetitive discussions.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Zero decision time:</strong> We ended the &ldquo;Groundhog
          Day&rdquo; cycle of repetitive meetings. Teams now move from concept
          to launch with instant alignment.
        </li>
        <li>
          <strong>A unified library:</strong> We successfully integrated new
          AI-specific components into our design library, ensuring every team
          had a prescribed treatment for new scenarios.
        </li>
        <li>
          <strong>Protected user peace:</strong> By systematizing our
          communication, we ensured users see only what is necessary,
          preserving the simple experience that makes WhatsApp a world-leading
          tool.
        </li>
      </ul>
    </article>
  );
}
