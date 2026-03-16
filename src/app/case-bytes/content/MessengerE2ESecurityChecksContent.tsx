import Image from "next/image";

export default function MessengerE2ESecurityChecksContent() {
  return (
    <article>
      <h2 className="text-xl font-semibold mt-8 mb-4">Project</h2>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          Enable users to check security alerts and verify that each chat member
          and device belong in their conversation.
        </li>
        <li>
          Design a way for users to verify that their Messenger chat is
          end-to-end encrypted and secure.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">Objective</h2>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          Achieve brevity while providing all information needed to complete this
          complex process.
        </li>
        <li>
          Prioritize needs of power users who will likely speed through the
          flow, but still serve standard users through accessible language and
          education.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">User research</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Our user research team provided user personas they derived from their
        research sessions on Messenger&apos;s security features and pinpointed
        which persona wanted this feature and what they needed it to do.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">At Risk Users</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        <strong>Description:</strong> This project is specifically for
        celebrities, journalists, activists, politicians and other people who
        are at a higher risk of having their security compromised on Messenger.
        They want to ensure no one can read their messages outside of the
        conversation.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Almost all At Risk Users understand basics of encryption and device
        verification, but some may require more education than others.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        <strong>Tone Requirements:</strong> Informative and educational (when
        helpful and relevant)
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        <strong>Content requirements:</strong>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400 mb-6">
        <li>
          Reassurance at the right moments that no unauthorized party can
          access their messages to develop trust.
        </li>
        <li>
          Access to information on technical concepts they&apos;re less familiar
          with.
        </li>
        <li>
          Notifications of all activity (like new devices being added) in their
          chat threads.
        </li>
        <li>
          Visibility and access to all ways to verify all devices in their
          chat.
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        Standard and Privacy Aware Users
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        <strong>Description:</strong> Regular users who moderately care or
        don&apos;t care about security, privacy or encryption and enjoy our
        apps without changing the default settings. These people are not
        technical and rarely visit their security or privacy settings at all.
        They are the vast majority of our users.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-2">
        <strong>Tone:</strong> Educational
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        <strong>Content Requirements:</strong> Brief and simple explanation of
        encryption and how it may enhance their experience for people who
        stumble across this new setting.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Content design ideation
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        My product designer and I partnered to create a design pattern and
        content design for each archetype to visualize the elements and
        language on each flow. We combined and selected different elements to
        create the final version.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Verifying devices flow
      </h2>
      <div className="my-6 max-w-full">
        <Image
          src="/case-bytes/messenger-e2e-security-checks/verifying-devices-flow.png"
          alt="Six-screen flow: Thread Details with E2E Encryption link, Key Verification with security alerts and member devices, Melissa Rauff device list, Device Info with public key and Scan to Verify, Scan Code view, Show Code QR display"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        On your chat&apos;s details page, the End-to-End Encryption setting sits
        under the Privacy and Support menu.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">
        &ldquo;End to End Encryption&rdquo; settings
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        When you tap that setting, the simple definition at the top tells you
        what this page covers in a way that&apos;s accessible to all our user
        personas. The &ldquo;Learn More&rdquo; link will go to our{" "}
        <a
          href="https://www.facebook.com/help/messenger-app/786613221989782"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] underline underline-offset-2 hover:no-underline"
        >
          help center article
        </a>{" "}
        (also written by me) to further educate you.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        The security alerts section below shows you all security activity
        regarding the chat. These alerts demonstrate that we care about
        informing you of all potential breaches to your chat&apos;s security.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The &ldquo;Member Keys and Devices&rdquo; section gives you a list of all
        members in the chat whose devices you can verify. When you tap on a
        chat member&apos;s name, you&apos;ll go to the person&apos;s profile
        page.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Melissa Rauff Profile</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        On this page, the explanation at the top teaches or reminds you to check
        the key ID for each of the person&apos;s devices to make sure they
        belong to the person you&apos;re talking to. &ldquo;Ask Melissa&rdquo;
        also sounds human and conversational.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The device labels and verification dates lets you keep track of all
        devices you&apos;ve verified for the conversation. When you tap on a
        device option, you&apos;ll be taken to its Device Info page.
      </p>

      <h3 className="text-lg font-semibold mt-6 mb-2">Device Info page</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        When you go to the Device Info page, you see the key&apos;s ID so you
        can compare it with the one your chat member sees over the phone or
        through a video call. I suggest using some safety tips and the QR key
        code scanner so you can scan Melissa&apos;s QR key code in person
        instead. I explain how to use it in simple terms and thoughtfully add
        &ldquo;faster&rdquo; to highlight the convenience factor and our
        consideration of your experience.
      </p>
      <p className="text-zinc-500 dark:text-zinc-500 text-sm italic mb-6">
        (Note: The Can&apos;t Scan Code design is still in development).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Key education</h2>
      <h3 className="text-lg font-semibold mt-6 mb-2">
        The user education flow
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        On the Device Info page, you can tap the Learn More button if
        you&apos;re stuck and not sure exactly what a key is and how to use it
        to verify your chat&apos;s security. Tapping on it will start an
        education flow that explains in plain language what encryption keys are,
        how they function and how to use the public key to check that your
        Messenger conversation is end-to-end encrypted.
      </p>
      <div className="my-6 max-w-full">
        <Image
          src="/case-bytes/messenger-e2e-security-checks/user-education.png"
          alt="Four-screen flow showing device login info, education screens about what encryption keys are, and how to use the public key on Messenger"
          width={1000}
          height={600}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-full h-auto"
        />
      </div>
    </article>
  );
}
