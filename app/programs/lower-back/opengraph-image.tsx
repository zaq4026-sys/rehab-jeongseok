import {
  createProgramDetailOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "edge";
export const alt = "허리·골반 재활 프로그램";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createProgramDetailOgImage("허리·골반 재활 프로그램");
}
