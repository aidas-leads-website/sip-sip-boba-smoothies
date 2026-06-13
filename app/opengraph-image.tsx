import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

// Dynamically-rendered social share image (1200×630). Edit copy/colors freely.
export const runtime = "nodejs";
export const alt = `${business.name} — boba tea & smoothies in Dallas, GA`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6E45A8 0%, #9B6FD6 45%, #FF6FA5 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "64px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            background: "rgba(255,255,255,0.16)",
            padding: "12px 28px",
            borderRadius: "999px",
            fontSize: "30px",
            fontWeight: 700,
          }}
        >
          ⭐ {business.rating.value} on Google · Dallas, GA
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "92px",
            fontWeight: 800,
            marginTop: "34px",
            textAlign: "center",
            lineHeight: 1.05,
            letterSpacing: "-2px",
          }}
        >
          {business.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "38px",
            marginTop: "20px",
            opacity: 0.92,
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          Hand-crafted boba, smoothies & specialty drinks 🧋
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "54px",
            fontSize: "28px",
            fontWeight: 700,
            opacity: 0.9,
          }}
        >
          {business.address.full}
        </div>
      </div>
    ),
    { ...size }
  );
}
