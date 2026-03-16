import Image from "next/image";

export default function EndCallSurveyRedesignContent() {
  return (
    <article>
      <h2 className="text-xl font-semibold mt-8 mb-4">Problem</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        WhatsApp&apos;s call survey only had four answers to choose from and
        covered less than 35% of bad use cases. Users could not report many
        common calling issues. Thus, the call quality engineering team could not
        be notified of or fix quality issues. Bad calling experiences
        abounded — unaddressed.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Objectives</h2>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          Collaborate with product design to keep the survey UI looking simple
          and engaging even with the added load of text.
        </li>
        <li>
          Use the most human, simple and common terms to describe technical
          audio and video issues so all users can more easily read and engage
          with the survey. More participation means more insights for our
          engineering teams to act on.
        </li>
        <li>
          Add more answer options to cover 99% of common quality issues on the
          survey.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">Old call survey</h2>
      <div className="my-6 max-w-full">
        <Image
          src="/case-bytes/end-call-survey-redesign/old-survey.png"
          alt="Old WhatsApp end call survey: Android (rating and issue selection) and iOS (rating and issue selection) side by side"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
      </div>
      <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mb-6">
        Android version (left) and the iOS version (right)
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">New call survey</h2>
      <div className="my-6 max-w-full">
        <Image
          src="/case-bytes/end-call-survey-redesign/new-survey-android.png"
          alt="Redesigned WhatsApp end call survey on Android showing How was your call? and What went wrong? tabs for video, audio, and other issues"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
      </div>
      <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mb-6">
        Android version
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Changes I made</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I added 13 more answer options.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I changed the stiff and technical copy (&ldquo;Please rate the quality
        of your call&rdquo; and &ldquo;What was your issue?) to say
        &ldquo;How was your call?&rdquo; and &ldquo;What went wrong?&rdquo; to
        make the tone more conversational, empathetic, and inviting.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        I added &ldquo;Your answer helps WhatsApp improve call quality&rdquo; to
        encourage users to participate and impact our app.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">How I made them</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        <strong>The 13 new options:</strong> WhatsApp&apos;s data science team
        went through all freeform user feedback ever submitted through the old
        survey and provided me with a list of the most common issues users
        wrote: &ldquo;Keeps reconnecting,&rdquo; &ldquo;Network problem/poor
        connection,&rdquo; &ldquo;Call unexpectedly ended,&rdquo; &ldquo;Blurry
        Image,&rdquo; &ldquo;Can&apos;t hear/see the other person,&rdquo;
        &ldquo;The other person can&apos;t hear/see me,&rdquo; &ldquo;Lags,&rdquo;
        &ldquo;Noise,&rdquo; &ldquo;Call didn&apos;t connect,&rdquo; and more.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        The call quality engineering manager and I determined which issues came
        up the most and needed to be on the survey. I wrote a list of thirteen
        and made each answer option as short as possible so users can scan and
        finish the survey quickly. I ran my copy with the user report data
        scientists and UXR researchers and reiterated based on their feedback
        to ensure I was speaking in the same language as our users.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        <strong>The new copy:</strong> I knew the greeting copy needed work
        after hearing from the data science team that out of 52 million call
        rating submitters, only 4% of them participated in the survey. I
        conducted user research sessions with the UXR team to understand the
        reasons for this drop-off at the first step. We discovered it was
        because users did not think their answers mattered and found the copy
        unfriendly.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        I let users know why their answers mattered in the copy and changed the
        tone in direct response to what our users said.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Design considerations</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        I capped the answer options to thirteen because the survey UI looked
        dense and intimidating when we tried to add more.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        I collaborated with product design to create a new tab UI that allowed
        us to add significantly more content in a visually appealing,
        organized way.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Impact</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        The new survey unlocked deeper insights for the quality engineering
        team to explore.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Significantly more new issues were reported. Call rating were higher
        overall.
      </p>
      <div className="my-6 max-w-full">
        <Image
          src="/case-bytes/end-call-survey-redesign/end-call-impact.png"
          alt="Bar chart showing distribution of pre-filled survey responses across audio and video calls on Android, iPhone, and SMB surfaces"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
      </div>
    </article>
  );
}
