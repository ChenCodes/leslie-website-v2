import Image from "next/image";

export default function AISickersWhatsAppContent() {
  return (
    <article>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        In 2023, Meta&apos;s family of apps entered the generative AI space with
        the launch of AI stickers—a feature that allows users to generate any
        sticker they can imagine simply by typing a short description.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        On WhatsApp, I owned the content strategy for education and feature
        adoption, helping users understand how AI stickers work and why they are
        valuable. The feature addressed a long-standing problem: the limited
        variety and relevance of existing sticker packs.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Understanding the problem
      </h2>
      <h3 className="text-lg font-semibold mt-6 mb-2">
        Users wanted better stickers
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        In annual research studies, WhatsApp users consistently expressed
        frustration with existing stickers. They often described them as:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>Irrelevant to their conversations</li>
        <li>Too childish</li>
        <li>Visually complex</li>
        <li>Overly colorful</li>
        <li>Culturally or personally mismatched</li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Users wanted stickers that better reflected their exact mood, moment, or
        cultural context. AI stickers offered a powerful solution: instead of
        searching through limited sticker packs, users could generate the
        perfect sticker for their situation.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Understanding the audience
      </h2>
      <h3 className="text-lg font-semibold mt-6 mb-2">
        WhatsApp users needed education about AI
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        WhatsApp serves a global audience with a wide range of digital literacy
        levels, often lower than users on Instagram, Messenger, or Facebook.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        During moderated research sessions, many participants:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>Did not know what AI was</li>
        <li>Did not understand how AI could generate images in real time</li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        In one early prototype test, several participants even believed
        &ldquo;AI&rdquo; referred to a customer support agent named
        &ldquo;Al.&rdquo; This insight shaped our strategy: the feature
        wouldn&apos;t succeed unless users clearly understood what the AI was
        doing and how to use it.
      </p>
      <div className="my-6 max-w-full">
        <Image
          src="/work/ai-stickers-whatsapp/evolving-approach-to-ai.png"
          alt="Evolving approach to AI: There's a learning curve with AI tools — trial and error, improved prompts, learning to co-create"
          width={800}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Key user needs
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Research revealed three major usability gaps.
      </p>
      <ol className="list-decimal pl-6 space-y-4 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Writing effective prompts</strong>
          <br />
          Users struggled to understand what kind of description would generate a
          good sticker. They needed guidance on how to describe an object, an
          action, and a scene so the AI could generate what they envisioned.
        </li>
        <li>
          <strong>Learning how the feature works</strong>
          <br />
          Many users needed reassurance that creating an AI sticker was simple
          and approachable. Our messaging needed to:
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Reduce intimidation around AI</li>
            <li>Explain the process clearly</li>
            <li>Build confidence to try the feature</li>
          </ul>
        </li>
        <li>
          <strong>Reporting harmful content</strong>
          <br />
          Because stickers are generated dynamically, we needed a clear way for
          users to report offensive or harmful images. These reports would help
          train Meta&apos;s AI systems to avoid generating policy-violating
          content in the future.
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-8 mb-4">Business goals</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        The AI sticker launch supported several key WhatsApp goals:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>Increase sticker sends and overall messaging engagement</li>
        <li>Expand expressive tools available to users</li>
        <li>Maintain platform integrity through reporting mechanisms</li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        By giving users creative control, we enabled them to generate the exact
        sticker that fits the moment instead of settling for limited pack
        options.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Content strategy</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        My content strategy focused on three primary goals:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>Sell the feature and educate users</li>
        <li>Guide users through sticker creation</li>
        <li>Enable safe reporting of harmful stickers</li>
      </ol>

      <h2 className="text-xl font-semibold mt-8 mb-4">Voice and tone</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        To support adoption across a diverse global audience, the messaging
        framework focused on:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          <strong>Conversational and plain language:</strong> to reduce
          intimidation around AI.
        </li>
        <li>
          <strong>Encouraging and empowering tone:</strong> to highlight the
          creative possibilities of generating your own stickers.
        </li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The goal was to make the experience feel simple, exciting, and
        accessible.
      </p>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Goal 1: Sell and educate the feature
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        The first touchpoint for users was an in-app announcement banner
        introducing AI stickers. To keep the feature approachable, I explained
        the core action simply: &ldquo;Describe the sticker you want, and AI
        creates it.&rdquo;
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        The word &ldquo;describe&rdquo; tested well internally because it
        communicated that generating a sticker was simple, quick, and low effort.
        I also intentionally used the word &ldquo;create.&rdquo; Earlier research
        had shown that users felt excited about the idea of creating their own
        stickers, so the copy emphasized creativity and possibility:
        &ldquo;Turn any idea into a sticker.&rdquo;
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        This language reinforced the core value proposition: users now had
        complete creative control over their stickers.
      </p>
      <div className="my-6">
        <div className="w-[30%] min-w-[200px]">
          <Image
            src="/work/ai-stickers-whatsapp/promotional-banner-sticker-tray.png"
            alt="WhatsApp chat with sticker tray open showing AI sticker banner: Create stickers by describing them! Turn any idea into a sticker with AI."
            width={800}
            height={600}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
          />
        </div>
        <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mt-3 whitespace-nowrap">
          Final content for promotional banner in the sticker tray
        </p>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2">Promotional sheet</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        After tapping the banner, users opened a promotional sheet explaining:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>How the feature works</li>
        <li>Privacy implications</li>
        <li>The value of AI sticker creation</li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        The positioning focused on two major benefits revealed in research:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Find the perfect sticker:</strong> users could generate a
          sticker that was &ldquo;just right for your chat.&rdquo;
        </li>
        <li>
          <strong>Express your creativity:</strong> users could bring stickers
          to life using their own descriptions.
        </li>
      </ul>
      <div className="my-6">
        <div className="w-[30%] min-w-[200px]">
          <Image
            src="/work/ai-stickers-whatsapp/promotional-bottom-sheet.png"
            alt="Promotional bottom sheet: Generate stickers with AI — turn ideas into stickers, try different descriptions, privacy statement, Continue button"
            width={800}
            height={600}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
          />
        </div>
        <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mt-3 whitespace-nowrap">
          Final content and design for promotional bottom sheet
        </p>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Goal 2: Guide users through sticker creation
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        To make the creation experience intuitive, I aligned the UX language
        with patterns used across generative AI products. Industry conventions
        commonly prompt users to &ldquo;Type a description&rdquo; and provide
        examples of good prompts. Given our users&apos; need for guidance, we
        implemented both strategies.
      </p>
      <div className="my-6">
        <div className="w-[64%] min-w-[200px]">
          <Image
            src="/work/ai-stickers-whatsapp/competitor-benchmarking.png"
            alt="Competitor benchmarking for sticker creation and prompt patterns"
            width={800}
            height={600}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
          />
        </div>
        <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mt-3 whitespace-nowrap">
          Competitor benchmarking I did
        </p>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2">Prompt examples</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        On the AI sticker creation screen, users see an example prompt and the
        sticker generated from it. I created a rotating set of prompts that
        included an object, an action, and a scene. For example, prompts like
        &ldquo;A cat dancing in a disco.&rdquo; These examples helped users
        understand how to structure effective descriptions.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Clear instructions</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The input field includes the instruction: &ldquo;Describe new sticker to
        generate.&rdquo; Originally, the placeholder read: &ldquo;Describe a
        new sticker.&rdquo; However, research revealed users thought they were
        searching for existing AI stickers, not creating them. Adding
        &ldquo;to generate&rdquo; clarified that stickers were created in real
        time.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Sending the sticker</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        After generating options, a short hint instructs users to tap a sticker
        to send it, ensuring the next step is obvious.
      </p>
      <div className="my-6 max-w-full">
        <Image
          src="/work/ai-stickers-whatsapp/final-user-flow-clear-instructions.png"
          alt="Four-panel user flow: describe sticker, generation in progress, generated options with tap to send hint, sticker sent in chat"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
        <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mt-3 whitespace-nowrap">
          Final user flow with clear instructions
        </p>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Goal 3: Enable sticker reporting
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        To maintain user trust and platform safety, I designed reporting
        language using existing WhatsApp patterns. Users are already familiar
        with reporting messages or people through long-press menus and overflow
        menus. We reused these same patterns for stickers.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The reporting entry point was clearly labeled: &ldquo;Report to
        Meta.&rdquo;
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Building trust through transparency
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        After tapping &ldquo;Report to Meta,&rdquo; the flow explains what data
        is shared and how reports help improve the system. The copy reassures
        users that reports help ensure AI avoids generating harmful images. This
        messaging was reviewed by the following teams:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>Legal</li>
        <li>Privacy</li>
        <li>Policy</li>
        <li>Communications</li>
        <li>Integrity teams</li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Placing reporting in familiar interaction points ensured users could
        easily discover and use the feature.
      </p>
      <div className="my-6 max-w-full">
        <Image
          src="/work/ai-stickers-whatsapp/final-reporting-flow.png"
          alt="Final reporting flow and content for AI sticker reporting"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
        <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mt-3 whitespace-nowrap">
          Final reporting flow and content
        </p>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">The impact</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        After launching AI stickers on WhatsApp:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          The feature reached <strong>100,000+ daily active users</strong>
        </li>
        <li>
          Users began consistently generating and sharing custom stickers in
          conversations
        </li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The feature unlocked a new level of expression. Instead of settling for
        generic sticker packs, users could now generate the exact sticker they
        imagined—instantly—making conversations more personal, creative, and
        culturally relevant.
      </p>
    </article>
  );
}
