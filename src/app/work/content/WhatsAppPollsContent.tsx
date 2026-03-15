import Image from "next/image";

export default function WhatsAppPollsContent() {
  return (
    <article>
      <h2 className="text-xl font-semibold mt-8 mb-4">In short</h2>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>The problem:</strong> Group decision-making was chaotic, leading
          to messy chats and missed messages.
        </li>
        <li>
          <strong>The solution:</strong> Built an intuitive polling feature for
          Android and iOS using clear, minimal instructions.
        </li>
        <li>
          <strong>My role:</strong> Led the content strategy, notification logic,
          and global testing to ensure ease of use.
        </li>
        <li>
          <strong>Impact:</strong> 2.2 million votes on newly launched polls
          within 30 days.
        </li>
      </ul>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        The problem: Group chat friction
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 italic mb-2">
        &lsquo;Where should we meet?&rsquo;
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        In the world of large WhatsApp group chats, simple, routine questions
        like this frequently triggered a flurry of disorganized messages. Group
        member responses were difficult to track, impossible to aggregate
        quickly, and often resulted in notification fatigue. WhatsApp recognized
        a critical need to help people reach a quick agreement by allowing them
        to gather a majority vote within the thread.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Our goal</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        We needed to design a simple, native flow that let users easily and
        quickly create a poll that others could vote on. This feature
        wasn&apos;t just a corporate hypothesis; users had explicitly demanded
        this functionality many times in UXR sessions. Not to mention, this was
        a staple feature offered by most of our messaging competitors and our
        app counterpart, Messenger. It was time to deliver this feature.
      </p>
      <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mb-6">
        (Include video of poll interaction from old website - attached gif to
        this email)
      </p>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        My role: Content designer
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        As the content designer on this project, my primary goal was to ensure
        the end-to-end experience felt intuitive and easy. To do that, the
        content had to be clear, informative, and minimal at the same time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Recognizable and intuitive design
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I audited existing design and content patterns within competing products
        and studied the specific system languages of Android and iOS. Using the
        heuristic of recognition over recall, I recommended using input fields
        and visual affordance that other popular messaging apps already used
        today. I wanted the design and content to be so familiar that users
        could onboard without having to think.
      </p>
      <div className="my-6 flex flex-wrap gap-6">
        <div className="max-w-[240px]">
          <Image
            src="/work/whatsapp-polls/messenger-competitor.png"
            alt="Messenger competitor poll UI: chat with poll overlay showing options, subject, and send"
            width={800}
            height={600}
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
          />
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            (Messenger competitor example)
          </p>
        </div>
        <div className="max-w-[240px]">
          <Image
            src="/work/whatsapp-polls/apple-competitor.png"
            alt="Apple competitor poll creation screen: Poll question and Add option fields, Create poll button"
            width={800}
            height={600}
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
          />
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            (Apple competitor example)
          </p>
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I also partnered closely with my product designer to determine specific
        interaction behaviors and make sure each word paired well with the
        affordance. For example, we placed the blinking vertical line (the
        cursor) at the &ldquo;Ask question&rdquo; hint text so users are
        immediately directed where to go and what to do: write a poll question.
      </p>
      <div className="my-6 max-w-[240px]">
        <Image
          src="/work/whatsapp-polls/polls-lunch-club.png"
          alt="WhatsApp poll in a group chat (Lunch Club) showing question and options with vote counts"
          width={800}
          height={600}
          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
        />
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Another way we prioritized ease of use was making a new answer option
        blank appear automatically after a user typed one. This removed the
        friction of having to manually tap an additional element to bring up a
        new option field.
      </p>
      <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mb-6">
        (WhatsApp video of flow - NOT recorded yet - don&apos;t have it)
      </p>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Iterative testing, localization, and approval processes
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        To validate each term and ensure clarity for our global user base, I
        worked with our UXR and localization teams. After each iteration, we
        tested our designs with participants from our most important global
        markets. My focus was to secure immediate understanding of each word; I
        needed to ensure that users across different cultures and languages
        clearly understood the core concepts I used, such as &ldquo;polls,&rdquo;
        &ldquo;votes,&rdquo; &ldquo;options,&rdquo; and &ldquo;Allow multiple
        votes.&rdquo;
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Once the UX copy was refined through testing, I served as the primary
        point of contact for cross-functional alignment, acquiring formal
        approvals from all product, legal, and design stakeholders to ensure the
        content met our rigorous standards.
      </p>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Tone framework &amp; strategy
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        To help our users feel supported in a hectic situation where they had
        to wrangle a large group of people, the experience needed to feel
        simple, efficient, and easy. To achieve this, I chose an informative
        tone for directing the user through the task.
      </p>
      <p className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
        The content strategy:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Directness:</strong> Get straight to the point without
          unnecessary fluff.
        </li>
        <li>
          <strong>Clarity:</strong> Use crisp, clear, and unambiguous language
          that says exactly what it needs to say, with a minimum number of words.
        </li>
        <li>
          <strong>Accessibility:</strong> Utilize easy-to-understand phrases that
          resonate with a global audience.
        </li>
        <li>
          <strong>Brevity:</strong> Speak in shorthand when necessary so users
          don&apos;t need to digest full, complex sentences.
        </li>
        <li>
          <strong>Hierarchy:</strong> Employ progressive disclosure to keep the
          interface clean.
        </li>
      </ul>

      <hr className="border-zinc-200 dark:border-zinc-800 my-8" />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Key content design moments
      </h2>

      <h3 className="text-lg font-semibold mt-6 mb-2">1. Instructive scannability</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I applied a heavily instructive tone to enable the speediest possible
        actions. By keeping content to an absolute minimum, the UI remained
        simple and clean. I actively advocated for the removal of unnecessary
        elements that didn&apos;t serve the immediate goal. For example, I
        advised we forgo filler phrases like &ldquo;Ask your poll
        question&rdquo; or &ldquo;Add options for your poll&rdquo; in the titles.
        These filler sentences made the experience feel &ldquo;heavy&rdquo; and
        more complicated than it needed to be. By removing articles and keeping
        instructions to just one or two words, I promoted quick scannability.
      </p>
      <div className="my-6 max-w-[240px]">
        <Image
          src="/work/whatsapp-polls/error-message.png"
          alt="Create Poll screen showing inline error when duplicate option is entered: This is already an option."
          width={800}
          height={600}
          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
        />
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2">2. Progressive disclosure in action</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        When the product designer suggested informing users upfront about
        constraints—such as the twelve-option limit or the inability to have
        duplicate options—I pushed back on a &ldquo;Wall of text&rdquo;
        approach. Instead, I advised that we only show this as an in-line message
        at the most relevant time. We only displayed these warnings when a user
        actually approached the limit or accidentally created &ldquo;twin&rdquo;
        options, ensuring the instructions were contextual rather than
        overwhelming.
      </p>
      <div className="my-6 max-w-[240px]">
        <Image
          src="/work/whatsapp-polls/short-phrase-example.png"
          alt="Create Poll screen with minimal Question and Options labels and input fields"
          width={800}
          height={600}
          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
        />
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2">3. Turning feedback into Information architecture</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Initial UXR revealed that a basic poll wasn&apos;t enough; group admins
        and creators felt &ldquo;blind&rdquo; to the progress of their
        decisions. They specifically struggled to identify the leading option
        and the individuals behind the votes—the two most critical factors for
        moving a group toward action.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        In response, I redesigned the poll details page by stack-ranking content
        based on user priority:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-2">
        <li>
          <strong>The winner at a glance:</strong> I placed the leading option
          and total participation count at the very top. This allows admins to
          confirm a &ldquo;majority rule&rdquo; in seconds, solving the primary
          pain point of hunting through chat history for a consensus.
        </li>
        <li>
          <strong>Social proof and accountability:</strong> Based on research
          showing that creators need to know who to follow up with, I prioritized
          the voter list immediately under each option.
        </li>
        <li>
          <strong>Logical nesting:</strong> I organized these complex details
          into a clean, scannable hierarchy that feels like a natural extension
          of the chat experience, rather than a separate, heavy data report.
        </li>
      </ul>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        By ordering the page this way, I transformed a list of names into a
        functional decision-making tool, directly addressing the difficulty of
        gleaning important outcomes quickly from disorganized group
        conversations.
      </p>
      <div className="my-6 max-w-[240px]">
        <Image
          src="/work/whatsapp-polls/poll-details-page.png"
          alt="Poll Details screen showing leading option, vote counts, and list of voters per option"
          width={800}
          height={600}
          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
        />
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2">4. Notification content and logic</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        A critical part of my role was defining how and when users were notified
        of poll activity. Early testers mentioned they would find a timely
        reminder to check on the poll helpful (especially if most people had
        finished voting), but we had to be careful to avoid creating too much
        noise.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-2">
        <li>
          <strong>Thoughtful trigger logic:</strong> To keep the experience quiet
          yet informative, every new vote triggered a silent notification.
          Instead of sending a fresh ping for every participant, the notification
          banner on the user&apos;s lock screen would silently update. If a user
          retracted a vote, the notification was automatically redacted to
          ensure real-time accuracy.
        </li>
        <li>
          <strong>Precision in phrasing:</strong> I chose the phrase &ldquo;[Number]
          new vote[s]&rdquo; for two reasons:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Clarity of activity:</strong> Including the word
              &ldquo;new&rdquo; made it clear these were recent votes and not
              the total count from your last notification.
            </li>
            <li>
              <strong>Maximum context in limited space:</strong> By ruling out
              names and longer sentences, I kept the character count minimal.
              This ensured the poll title remained visible, allowing users to
              instantly distinguish between different polls across multiple chats.
            </li>
          </ul>
        </li>
      </ul>
      <div className="my-6 max-w-[240px]">
        <Image
          src="/work/whatsapp-polls/polls-lunch-club.png"
          alt="WhatsApp group chat with a poll and View Details, illustrating poll visibility and notification context"
          width={800}
          height={600}
          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
        />
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">The impact</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        The launch was an immediate success. Social media signals indicated a
        warm reception even before the hard data arrived. Soon after, the data
        science team confirmed our success:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-4">
        <li>
          <strong>Participation:</strong> We hit our participation rate targets
          on iOS.
        </li>
        <li>
          <strong>Growth:</strong> The Android participation rate reached 2.5%
          and was on a rapid growth path.
        </li>
        <li>
          <strong>Volume:</strong> Within the first thirty days, approximately
          700,000 people created polls, and 2.2 million people cast their votes.
        </li>
      </ul>
      <div className="my-6 max-w-[360px]">
        <Image
          src="/work/whatsapp-polls/polls-impact.png"
          alt="Social media posts showing positive reception of WhatsApp polls feature"
          width={800}
          height={600}
          className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
        />
      </div>
    </article>
  );
}
