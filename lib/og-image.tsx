/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import type { ReactElement, ReactNode } from "react";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

const colors = {
  black: "#0A0A0A",
  gold: "#C9A96E",
  white: "#FFFFFF",
  muted: "#D4D4D4",
};

let regularFontDataPromise: Promise<ArrayBuffer> | null = null;
let boldFontDataPromise: Promise<ArrayBuffer> | null = null;
let directorImagePromise: Promise<string> | null = null;

const publicOgBaseUrl = "https://rehab-jeongseok.vercel.app/og";

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = "";

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode.apply(null, Array.from(chunk));
  }

  return btoa(binary);
}

async function getPublicOgAsset(fileName: string) {
  const response = await fetch(`${publicOgBaseUrl}/${fileName}`);

  if (!response.ok) {
    throw new Error(`Failed to load OG asset: ${fileName}`);
  }

  return response.arrayBuffer();
}

async function getRegularFontData() {
  if (!regularFontDataPromise) {
    regularFontDataPromise = getPublicOgAsset("Pretendard-Regular.woff");
  }

  return regularFontDataPromise;
}

async function getBoldFontData() {
  if (!boldFontDataPromise) {
    boldFontDataPromise = getPublicOgAsset("Pretendard-Bold.woff");
  }

  return boldFontDataPromise;
}

async function getDirectorImageSrc() {
  if (!directorImagePromise) {
    directorImagePromise = getPublicOgAsset("director.jpg").then(
      (buffer) => `data:image/jpeg;base64,${arrayBufferToBase64(buffer)}`,
    );
  }

  return directorImagePromise;
}

async function createImageResponse(element: ReactElement) {
  const [regularFontData, boldFontData] = await Promise.all([
    getRegularFontData(),
    getBoldFontData(),
  ]);

  return new ImageResponse(element, {
    ...ogSize,
    fonts: [
      {
        name: "Pretendard",
        data: regularFontData,
        style: "normal",
        weight: 400,
      },
      {
        name: "Pretendard",
        data: boldFontData,
        style: "normal",
        weight: 700,
      },
    ],
  });
}

function Root({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: colors.black,
        color: colors.white,
        fontFamily: "Pretendard",
      }}
    >
      {children}
    </div>
  );
}

export async function createHomeOgImage() {
  const directorSrc = await getDirectorImageSrc();

  return createImageResponse(
    <Root>
      <div
        style={{
          width: 720,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 86,
          paddingRight: 56,
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            color: colors.white,
            opacity: 0.94,
            marginBottom: 18,
          }}
        >
          재활운동전문 물리치료사
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: colors.gold,
          }}
        >
          재활의정석
        </div>
        <div
          style={{
            width: 120,
            height: 1,
            background: colors.gold,
            marginTop: 34,
            marginBottom: 34,
          }}
        />
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: colors.muted,
            marginBottom: 38,
          }}
        >
          내일은 아프지 않게
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "0.26em",
            color: "rgba(255,255,255,0.50)",
          }}
        >
          REHAB JEONGSEOK
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 480,
          height: 630,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <img
          src={directorSrc}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(12%) contrast(1.04)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #0A0A0A 0%, rgba(10,10,10,0.78) 12%, rgba(10,10,10,0.18) 42%, rgba(10,10,10,0) 100%)",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 32,
          border: "1px solid rgba(201,169,110,0.26)",
        }}
      />
    </Root>,
  );
}

export async function createProgramsOgImage() {
  const cards = ["허리·골반", "목·어깨", "파킨슨·신경재활"];

  return createImageResponse(
    <Root>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "74px 82px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "12px 22px",
            border: `1px solid ${colors.gold}`,
            color: colors.gold,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            marginBottom: 34,
          }}
        >
          재활의정석 PROGRAMS
        </div>
        <div
          style={{
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.05em",
            color: colors.white,
          }}
        >
          10 · 30 · 50 회복 여정
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 30,
            fontWeight: 400,
            color: colors.muted,
          }}
        >
          Reset · Zero · Beyond
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            marginTop: 58,
          }}
        >
          {cards.map((card) => (
            <div
              key={card}
              style={{
                width: 300,
                height: 84,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(201,169,110,0.42)",
                background: "rgba(255,255,255,0.055)",
                color: colors.white,
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 32,
          border: "1px solid rgba(201,169,110,0.26)",
        }}
      />
    </Root>,
  );
}

export async function createProgramDetailOgImage(title: string) {
  return createImageResponse(
    <Root>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 90px",
        }}
      >
        <div
          style={{
            color: colors.gold,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.18em",
            marginBottom: 34,
          }}
        >
          REHAB JEONGSEOK PROGRAM
        </div>
        <div
          style={{
            maxWidth: 960,
            color: colors.white,
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.055em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            width: 140,
            height: 1,
            background: colors.gold,
            marginTop: 42,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            color: colors.muted,
            fontSize: 28,
            fontWeight: 400,
          }}
        >
          대표가 직접 평가하고 관리하는 1:1 재활운동
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: -120,
          bottom: -160,
          width: 430,
          height: 430,
          borderRadius: 430,
          border: "1px solid rgba(201,169,110,0.45)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 32,
          border: "1px solid rgba(201,169,110,0.26)",
        }}
      />
    </Root>,
  );
}
