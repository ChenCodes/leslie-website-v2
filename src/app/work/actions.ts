"use server";

import { cookies } from "next/headers";
import { PROTECTED_CASE_STUDIES, unlockCookieName } from "@/lib/protectedCaseStudies";

export async function unlockCaseStudy(slug: string, password: string): Promise<boolean> {
  const entry = PROTECTED_CASE_STUDIES[slug];
  if (!entry || password !== entry.password) return false;

  const cookieStore = await cookies();
  cookieStore.set(unlockCookieName(slug), password, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return true;
}
