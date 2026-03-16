export default function PeriodStandardsContent() {
  return (
    <article>
      <h2 className="text-xl font-semibold mt-8 mb-4">Context</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        WhatsApp followed iOS and Android punctuation rules for our respective
        iOS and Android apps. These rules were different in intricate, granular
        ways (Don&apos;t add a period after only one sentence on Android, but
        add one after each sentence when there are two or more sentences; iOS
        has a period after each sentence…).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Problem</h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-4">
        Remembering and applying these nuances to the right platform and
        situation has been hard. We&apos;ve seen many Figma comments of
        engineers and product designers asking each other and their content
        designer: &ldquo;Is there a period here, and is it different for
        Android?&rdquo; — taking up precious work time to ask around or dig into
        our complicated documentation again.
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        Complicated rules have resulted in inconsistency as well. iOS rules have
        been applied in Android system messages and vice versa.
      </p>
    </article>
  );
}
