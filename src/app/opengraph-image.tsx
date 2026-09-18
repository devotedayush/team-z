import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/seo";

export const alt = `${SITE_NAME}: ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/brand/ments-green-white.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(120% 120% at 18% 12%, #0f231b 0%, #0a0b0d 55%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* ImageResponse renders native images, not next/image components. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Ments" width={262} height={80} />
          <div
            style={{
              color: "#ffffff",
              fontSize: "30px",
              borderLeft: "1px solid #53615a",
              paddingLeft: "24px",
              fontWeight: 600,
            }}
          >
            Services
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-3px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>Custom software, apps &amp;&nbsp;</span>
            <span style={{ color: "#00DD88" }}>AI automation.</span>
          </div>
          <div
            style={{
              color: "#b9bec4",
              fontSize: "28px",
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            From your first idea to launch and ongoing support.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "23px",
              fontWeight: 400,
              display: "flex",
            }}
          >
            Delivered by TEAMZ, our technology team.
          </div>
          <div style={{ color: "#a5ada9", fontSize: "23px", display: "flex" }}>
            {new URL(SITE_URL).host}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
