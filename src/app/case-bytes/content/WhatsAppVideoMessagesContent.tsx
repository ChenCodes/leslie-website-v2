import Image from "next/image";

export default function WhatsAppVideoMessagesContent() {
  return (
    <article>
      <h2 className="text-xl font-semibold mt-8 mb-4">Context</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        In 2023, WhatsApp wanted to provide a convenient and quick way to record
        and send short, real-time and expressive video messages to your loved
        ones.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        From the composer in a chat, users long press on the camera icon to
        record and send a short (1 minute-max), circular video message.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The issue with the 2023 MVP launch was that users reportedly said in user
        tickets that they did not know where we first put the entrypoint, which
        was to tap on the mic icon to turn it into a camera icon and then long
        press the camera. Video messages were also hard to naturally discover;
        user research indicated that users had no idea our feature existed.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Business and content goals
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        We had to boost discovery of PTV by introducing it to new users in a way
        that:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>Educate on how to try it (hold and press the camera).</li>
        <li>
          Described what the feature was and its benefits (you can more quickly
          record and send video messages).
        </li>
        <li>
          Grabbed people&apos;s attention, with arresting language like
          &ldquo;New!&rdquo; or with an icon
        </li>
      </ol>

      <h2 className="text-xl font-semibold mt-8 mb-4">Principles</h2>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Brevity:</strong> I communicated with minimal, snappy language
          to fit all the info into a small tooltip and say all the important
          details before I lost users&apos; attention.
        </li>
        <li>
          <strong>Clarity:</strong> I had to clearly explain what this feature
          was and how to use it.
        </li>
        <li>
          <strong>Compelling:</strong> I had to grab people&apos;s attention and
          draw them in with compelling, exclamatory, or benefit-led language.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">Tones</h2>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          <strong>Affirmative:</strong> I sought to sound positive and upbeat to
          get users intrigued quickly, as tooltips are notorious for being
          ignored.
        </li>
        <li>
          <strong>Informative:</strong> I wanted to be direct and fit the most
          important info in a small space.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Tooltip explorations
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I wrote versions that tried to fulfill the aforementioned goals. The
        following versions went to the Archive because they scored low on the
        criteria I created out of those goals.
      </p>
      <div className="my-6 max-w-full">
        <Image
          src="/case-bytes/whatsapp-video-messages/tooltip-exploration.png"
          alt="Five tooltip variations for instant video messages with Surface Scorecards evaluating Delight/Draw, Clarity, and Simplicity"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        It came down to three options that were the most compelling,
        explanatory and brief.
      </p>
      <div className="my-6 max-w-full">
        <Image
          src="/case-bytes/whatsapp-video-messages/options.png"
          alt="A/B test options table: three tooltip CTAs evaluated on Clear and informational, Attention-grabbing, and Simple/short"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        After getting feedback from my content design director, marketing teams,
        product manager, design leads, user research stakeholders, and content
        reviewers, we chose to test &ldquo;You can press and hold to record video
        messages&rdquo; and &ldquo;New! Press and hold to record video
        messages.&rdquo;
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        We decided that the striking exclamation &ldquo;New!&rdquo; and
        addressing the user directly with &ldquo;You can&rdquo; were the most
        powerful ways to get a user to pay attention to a tooltip. The
        explanatory description after felt concise and comprehensive for both
        as well.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The engineering team conducted an A/B test of these tooltips with a
        segment of users upon relaunch to see which tooltip was associated with
        more video message sends. The performance metrics we could log with
        WhatsApp&apos;s user data collection model was how many video message
        sends happened within the user population that got the first tooltip
        versus the users who got the second tooltip.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Results</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The version with &ldquo;New!&rdquo; (Android: +14%, iOS: +7%) performed
        consistently better than the version with &ldquo;You can…&rdquo;
        (Android: +7%, iOS: +5%) on both app platforms. So, the team increased
        the roll out with the higher performing language.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400">
        The video messaging team was struck by how much words impact the bottom
        line, as 7% reflected thousands of users in our A/B test.
      </p>
    </article>
  );
}
