import Image from "next/image";
import { Check, Sparkles } from "lucide-react";

/**
 * Composed card thumbnails built from each case study's own imagery.
 * Each fills the WorkCard's 16:9 preview area; `group-hover` is the card.
 */

const lift = "transition-transform duration-500 group-hover:scale-[1.04]";

const pollOptions = [
  { label: "Yes", votes: 10, voters: ["bg-amber-300", "bg-sky-300", "bg-rose-300"] },
  { label: "No", votes: 4, voters: ["bg-violet-300"] },
];
const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

function ChatBubble({ children, className }: { children: string; className: string }) {
  return (
    <span
      className={`absolute rounded-2xl bg-white px-3 py-1.5 text-[11px] font-medium text-zinc-800 shadow-lg shadow-emerald-950/20 ${className}`}
    >
      {children}
    </span>
  );
}

export function PollsPreview() {
  return (
    <div className="absolute inset-0 bg-linear-to-br from-emerald-300 via-emerald-500 to-emerald-700">
      <div
        className="absolute inset-0 opacity-25 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-size-[14px_14px]"
        aria-hidden
      />
      <div className={`absolute inset-0 flex items-center justify-center ${lift}`}>
        {/* Poll message, recreated from the original thumbnail with votes filled in */}
        <div className="w-[60%] -rotate-3 rounded-xl bg-[#e7fcd9] p-3 text-zinc-900 shadow-2xl shadow-emerald-950/40 ring-4 ring-white/80">
          <p className="mb-2.5 text-[11px] font-semibold leading-snug">
            Is your child available for this Saturday&apos;s match?
          </p>
          <ul className="space-y-2">
            {pollOptions.map((option, i) => (
              <li key={option.label}>
                <div className="mb-1 flex items-center gap-1.5 text-[10px]">
                  <span
                    className={`flex size-3 items-center justify-center rounded-full border ${
                      i === 0 ? "border-emerald-600 bg-emerald-600" : "border-zinc-400"
                    }`}
                  >
                    {i === 0 && <span className="size-1 rounded-full bg-white" />}
                  </span>
                  <span className="flex-1">{option.label}</span>
                  <span className="flex -space-x-1">
                    {option.voters.map((color) => (
                      <span key={color} className={`size-2.5 rounded-full ring-1 ring-[#e7fcd9] ${color}`} />
                    ))}
                  </span>
                  <span className="w-3 text-right tabular-nums text-zinc-600">{option.votes}</span>
                </div>
                <div className="h-1 rounded-full bg-emerald-900/10">
                  <div
                    className="h-full rounded-full bg-emerald-600"
                    style={{ width: `${(option.votes / totalVotes) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-1.5 text-right text-[8px] text-zinc-500">12:57 ✓✓</p>
          <p className="mt-1 border-t border-emerald-900/10 pt-1.5 text-center text-[10px] font-medium text-emerald-700">
            View votes
          </p>
        </div>
      </div>
      <ChatBubble className="left-[6%] top-[14%] -rotate-6 rounded-bl-sm">Yes!</ChatBubble>
      <ChatBubble className="right-[6%] top-[30%] rotate-6 rounded-br-sm">No, sorry</ChatBubble>
      <span className="absolute bottom-[9%] right-[7%] rotate-3 rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
        {totalVotes} votes
      </span>
    </div>
  );
}

export function AIStickersPreview() {
  return (
    <div className="absolute inset-0 bg-zinc-950">
      <div
        className="absolute -left-10 -top-16 size-64 rounded-full bg-violet-600/50 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-10 -bottom-16 size-64 rounded-full bg-emerald-500/40 blur-3xl"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-[9%] flex justify-center">
        <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur">
          <Sparkles className="size-3.5 text-violet-300" aria-hidden />
          Happy football face
        </span>
      </div>
      <div className={`absolute inset-x-0 bottom-[4%] flex items-end justify-center gap-[4%] ${lift}`}>
        <Image
          src="/work/ai-stickers-whatsapp/thumb-sticker-1.png"
          alt=""
          width={340}
          height={408}
          className="h-auto w-[30%] -rotate-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />
        <Image
          src="/work/ai-stickers-whatsapp/thumb-sticker-2.png"
          alt=""
          width={337}
          height={352}
          className="h-auto w-[30%] rotate-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
}

export function CulturalCampaignsPreview() {
  return (
    <div className="absolute inset-0 bg-linear-to-br from-orange-300 via-amber-50 to-green-600">
      <div className="absolute inset-0 grid grid-cols-[1fr_auto] items-center gap-[5%] px-[7%]">
        <div className="flex flex-col items-start gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white shadow-lg">
            <Sparkles className="size-3.5 text-fuchsia-300" aria-hidden />
            Create with Meta AI
          </span>
          <div className="w-full max-w-44 overflow-hidden rounded-lg bg-zinc-950 p-1 shadow-lg">
            <Image
              src="/work/whatsapp-genai-cultural-campaigns/thumb-variants.png"
              alt=""
              width={344}
              height={84}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className={`h-full flex items-center ${lift}`}>
          <div className="aspect-square h-[78%] rotate-3 overflow-hidden rounded-2xl shadow-2xl shadow-green-950/40 ring-4 ring-white">
            <Image
              src="/work/whatsapp-genai-cultural-campaigns/thumb-card.png"
              alt=""
              width={438}
              height={439}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const museTasks = [
  { src: "/work/muse-whatsapp/thumb-calendar.png", className: "w-[12%] -rotate-8 translate-y-[12%]" },
  { src: "/work/muse-whatsapp/thumb-notepad.png", className: "w-[15%] z-10", done: true },
  { src: "/work/muse-whatsapp/thumb-phone.png", className: "w-[12%] rotate-8 translate-y-[12%]" },
];

export function MusePreview() {
  return (
    <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-blue-600 to-violet-700">
      <div
        className="absolute left-1/2 top-[38%] size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-3xl"
        aria-hidden
      />
      <div className={`absolute inset-0 ${lift}`}>
        {/* Task tiles, cut from the original "Already on it" image */}
        <div className="absolute inset-x-0 top-[9%] flex items-start justify-center gap-[3%]">
          {museTasks.map((task) => (
            <div key={task.src} className={`relative ${task.className}`}>
              <div className="overflow-hidden rounded-xl shadow-lg shadow-indigo-950/40 ring-2 ring-white/90">
                <Image src={task.src} alt="" width={210} height={210} className="w-full h-auto" />
              </div>
              {task.done && (
                <span className="absolute -bottom-1.5 -right-1.5 flex size-4.5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md ring-2 ring-white">
                  <Check className="size-2.5" strokeWidth={3.5} aria-hidden />
                </span>
              )}
            </div>
          ))}
        </div>
        {/* Muse saying it's on the task */}
        <div className="absolute inset-x-0 bottom-[8%] flex items-center justify-center">
          <Image
            src="/work/muse-whatsapp/thumb-avatar.png"
            alt=""
            width={164}
            height={164}
            className="relative z-10 size-20 rounded-full shadow-xl shadow-indigo-950/40 ring-4 ring-white"
          />
          <span className="-ml-4 rounded-full bg-white py-2 pl-6 pr-4 text-sm font-semibold text-zinc-900 shadow-lg">
            Already on it&hellip;
          </span>
        </div>
      </div>
    </div>
  );
}

const playbookLeaves = [
  { x: 6, label: "Bottom sheet" },
  { x: 84, label: "Tooltip" },
  { x: 162, label: "Mid card" },
  { x: 240, label: "System msg" },
];

const playbookAnswers = [
  { x: 58, label: "Yes" },
  { x: 110, label: "No" },
  { x: 214, label: "Yes" },
  { x: 262, label: "No" },
];

export function PlaybookPreview() {
  return (
    <div className="absolute inset-0 bg-zinc-950">
      <div
        className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-size-[18px_18px]"
        aria-hidden
      />
      <div className="absolute -top-20 left-1/2 size-64 -translate-x-1/2 rounded-full bg-emerald-500/25 blur-3xl" aria-hidden />
      {/* Simplified version of the playbook's decision tree */}
      <svg viewBox="0 0 320 180" className={`absolute inset-0 h-full w-full ${lift}`} aria-hidden>
        <g fill="none" stroke="#34d399" strokeOpacity="0.55" strokeWidth="1.5">
          <path d="M160 42c0 12-75 8-75 22M160 42c0 12 75 8 75 22" />
          <path d="M85 88c0 14-42 10-42 28M85 88c0 14 36 10 36 28" />
          <path d="M235 88c0 14-36 10-36 28M235 88c0 14 42 10 42 28" />
        </g>
        <rect x="70" y="16" width="180" height="26" rx="13" fill="#ffffff" />
        <text x="160" y="33" textAnchor="middle" fontSize="11" fontWeight="600" fill="#18181b">
          Safety or trust risk?
        </text>
        <g fontSize="10" fontWeight="500" textAnchor="middle">
          <rect x="30" y="64" width="110" height="24" rx="8" fill="#064e3b" stroke="#34d399" strokeOpacity="0.6" />
          <text x="85" y="80" fill="#ecfdf5">Sensitive info?</text>
          <rect x="180" y="64" width="110" height="24" rx="8" fill="#064e3b" stroke="#34d399" strokeOpacity="0.6" />
          <text x="235" y="80" fill="#ecfdf5">Broken experience?</text>
        </g>
        <g fontSize="8" fontWeight="700" textAnchor="middle">
          {playbookAnswers.map((answer) => (
            <g key={answer.x}>
              <rect
                x={answer.x - 11}
                y="95"
                width="22"
                height="13"
                rx="6.5"
                fill={answer.label === "Yes" ? "#ffffff" : "#27272a"}
                stroke={answer.label === "Yes" ? "none" : "#71717a"}
              />
              <text x={answer.x} y="104.5" fill={answer.label === "Yes" ? "#18181b" : "#f4f4f5"}>
                {answer.label}
              </text>
            </g>
          ))}
        </g>
        <g fontSize="9.5" fontWeight="600" textAnchor="middle">
          {playbookLeaves.map((leaf) => (
            <g key={leaf.label}>
              <rect x={leaf.x} y="116" width="74" height="24" rx="12" fill="#6ee7b7" />
              <text x={leaf.x + 37} y="131" fill="#022c22">
                {leaf.label}
              </text>
            </g>
          ))}
        </g>
        <text x="160" y="164" textAnchor="middle" fontSize="9" fill="#a1a1aa" letterSpacing="1.5">
          DEFAULT: SILENCE
        </text>
      </svg>
    </div>
  );
}
