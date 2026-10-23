import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#050507",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4AF37",
          fontWeight: 800,
          borderRadius: 8,
          border: "2px solid #D4AF37",
        }}
      >
        ME
      </div>
    ),
    {
      ...size,
    }
  );
}
