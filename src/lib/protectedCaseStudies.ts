import { cookies } from "next/headers";

/**
 * Server-only password config for protected case studies.
 * `lockPage` also gates the case study page itself, not just the home page card.
 */
export const PROTECTED_CASE_STUDIES: Record<string, { password: string; lockPage?: boolean }> = {
  "muse-whatsapp": { password: "cdtime!", lockPage: true },
  "meta-avatars-whatsapp": { password: "cdtime!", lockPage: true },
  "ai-stickers-whatsapp": { password: "cdtime!", lockPage: true },
  "ai-communications-playbook": { password: "cdtime!", lockPage: true },
};

export const unlockCookieName = (slug: string) => `case-study-unlocked-${slug}`;

export async function isCaseStudyLocked(slug: string): Promise<boolean> {
  const entry = PROTECTED_CASE_STUDIES[slug];
  if (!entry?.lockPage) return false;
  const cookieStore = await cookies();
  return cookieStore.get(unlockCookieName(slug))?.value !== entry.password;
}
