import {
  createProgramsOgImage,
  ogContentType,
  ogSize,
} from "@/lib/og-image";

export const runtime = "edge";
export const alt = "재활의정석 프로그램";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return createProgramsOgImage();
}
