import Image from "next/image";

export default function BatteryRestrictionDialogContent() {
  return (
    <article>
      <h2 className="text-xl font-semibold mt-8 mb-4">Problem</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        22 million WhatsApp callers had battery restriction turned on while
        calling on an Android device in 2022. However, audio and video issues
        are prone to happen on Android devices when on this setting. WhatsApp
        received over 470 tickets from Android users between January and May of
        2022 regarding call issues that users didn&apos;t realize were due to
        the setting.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Objective</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Write a warning dialog that lets Android users know (1) what issues can
        happen when this setting is on and (2) teach them how to change the
        setting to avoid issues before they happen.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">The warning dialog</h2>
      <div className="my-6 max-w-full">
        <Image
          src="/case-bytes/battery-restriction-dialog/full-warning-dialog.png"
          alt="Android video call screen with a warning dialog explaining that battery usage is restricted for WhatsApp and a Settings button to unrestrict it"
          width={200}
          height={300}
          className="rounded-lg border border-zinc-200 dark:border-zinc-800 w-[200px] h-auto"
        />
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">The content strategy</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        <strong>Timing:</strong> I timed and placed this dialog to show up only
        to users who had this restriction on and had hopped on a call,
        increasing the message&apos;s relevance to the user.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        <strong>Tone:</strong> I wanted to be direct and instructive. Users would
        want to get back to their call, so I got straight to point and only said
        the most important information in as few words as possible. Being
        empathetic or humorous would only distract or annoy users here.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        <strong>Vocabulary:</strong> I used the words battery usage, restricted
        and unrestrict because these words are used on most users&apos; Android
        device settings and are familiar to them.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        <strong>Punctuation:</strong> I removed the period from the end of the
        last sentence purposefully to make it similar to the Unrestricted UI
        element you&apos;ll see or hear on your screen reader on your device
        settings.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Challenges</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        <strong>Changing steps:</strong> Every Android manufacturer has different
        settings (and steps) to turn off battery restriction. There are also
        over 24,000 distinct Android devices. To help me avoid having to write
        24,000 different dialogs, the research team determined that 95% of the
        22 million Android users used Samsung devices at OS versions of 8 and
        higher (the rest used Google Pixel). I created several dialog versions
        that successfully covered all variations of these steps across Samsung
        and Google devices and their versions. Engineering changed the error
        dialog dynamically to show the right dialog to the device user.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        <strong>Limited capability:</strong> I asked the engineering team if the
        Settings button could go directly to the battery restriction setting. I
        wanted to delete the second sentence and avoid making users memorize
        steps. Unfortunately, the engineering team said this wasn&apos;t a
        capability they had and that users would only get guidance through
        content.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Impact</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Over 10% of total Android users turned off their battery restriction
        setting in response to this dialog.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400">
        User reports were cut in half within a month and had decreased
        incrementally over the course of 2022.
      </p>
    </article>
  );
}

