import Image from "next/image";

/** Logo paths from Simple Icons (CC0), https://simpleicons.org */
const META_PATH =
  "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z";

const META_AI_PATH =
  "M10.73.032c-1.333 0-2.032 1.016-2.032 2.285 0 2.223 2.127 4.953 4.318 4.953 1.301 0 2-.953 2-2.254 0-2.254-2.095-4.984-4.286-4.984m8.413 2.984c-1.968 0-3.397 2.73-3.397 4.825 0 1.556.794 3.016 2.254 3.016 2 0 3.365-2.762 3.365-4.794 0-1.523-.762-3.047-2.222-3.047M4.857 4.159c-1.968 0-3.778 1.016-3.778 2.54 0 1.65 2.16 2.793 4.254 2.793 1.873 0 3.778-.92 3.778-2.508 0-1.682-2.159-2.825-4.254-2.825m-.222 6.476C2.413 10.635 0 13.175 0 15.397c0 1.301.825 2.159 2.095 2.159 2.19 0 4.603-2.508 4.603-4.794 0-1.27-.761-2.127-2.063-2.127m16.667.698c-2.223 0-5.016 1.62-5.016 3.651 0 1.238 1.047 2.19 2.698 2.19 2.159 0 5.016-1.587 5.016-3.682 0-1.302-1.08-2.159-2.698-2.159M7.619 16c-1.524 0-2.38 1.746-2.38 3.429 0 2.063 1.269 4.54 3.047 4.54 1.524 0 2.38-1.81 2.38-3.461C10.667 18.57 9.46 16 7.62 16m6.571 1.016c-1.333 0-2.476.667-2.476 2.032 0 2.095 2.667 4.063 4.92 4.063 1.366 0 2.54-.73 2.54-2.063 0-2.032-2.698-4.032-4.984-4.032";

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

const MESSENGER_PATH =
  "M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.15.097.344.094.491-.007l4.362-3.008a.7.7 0 0 1 .364-.13";

function MetaMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 sm:size-6 xl:size-7" aria-hidden>
      <defs>
        <linearGradient id="meta-gradient" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0" stopColor="#0064E1" />
          <stop offset="1" stopColor="#0082FB" />
        </linearGradient>
      </defs>
      <path d={META_PATH} fill="url(#meta-gradient)" />
    </svg>
  );
}

function MetaAIMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 sm:size-6 xl:size-7" aria-hidden>
      <defs>
        <linearGradient id="meta-ai-gradient" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#0082FB" />
          <stop offset="0.55" stopColor="#9844FF" />
          <stop offset="1" stopColor="#FF5C9D" />
        </linearGradient>
      </defs>
      <path d={META_AI_PATH} fill="url(#meta-ai-gradient)" />
    </svg>
  );
}

/** Muse has no public logo mark yet, so this uses the Muse character avatar. */
function MuseMark() {
  return (
    <Image
      src="/work/muse-whatsapp/thumb-avatar.png"
      alt=""
      width={164}
      height={164}
      className="size-5 sm:size-6 xl:size-7 rounded-full ring-1 ring-zinc-200 dark:ring-zinc-700"
    />
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 sm:size-6 xl:size-7" aria-hidden>
      <path d={WHATSAPP_PATH} fill="#25D366" />
    </svg>
  );
}

function MessengerMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 sm:size-6 xl:size-7" aria-hidden>
      <defs>
        <linearGradient id="messenger-gradient" x1="0.15" y1="1" x2="0.85" y2="0">
          <stop offset="0" stopColor="#0099FF" />
          <stop offset="0.6" stopColor="#A033FF" />
          <stop offset="0.9" stopColor="#FF5280" />
          <stop offset="1" stopColor="#FF7061" />
        </linearGradient>
      </defs>
      <path d={MESSENGER_PATH} fill="url(#messenger-gradient)" />
    </svg>
  );
}

const companies = [
  { name: "WhatsApp", Mark: WhatsAppMark },
  { name: "Muse", Mark: MuseMark },
  { name: "Meta AI", Mark: MetaAIMark },
  { name: "Messenger", Mark: MessengerMark },
  { name: "Meta Central Products", Mark: MetaMark },
];

export default function WorkedAt() {
  return (
    <div className="py-6">
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        I&apos;ve worked on
      </p>
      {/* Wraps to two lines on phones and tablets; one edge-to-edge line on wide screens. */}
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-8 lg:flex-nowrap lg:justify-between lg:gap-8">
        {companies.map(({ name, Mark }) => (
          <li
            key={name}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm sm:text-base xl:text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100"
          >
            <Mark />
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
