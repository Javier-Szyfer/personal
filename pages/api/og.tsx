import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          color: "#303030",
          padding: 32,
          fontFamily: "serif",
        }}
      >
        javvvs
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
