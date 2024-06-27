"use client";
import YouTube from "react-youtube";

const height = 390 * 0.75;
const width = 640 * 0.75;

export const YoutubeTutorial = () => {
  const opts = { height, width };

  return (
    <div style={{ height, width, borderRadius: 16, overflow: "hidden" }}>
      <YouTube videoId="l7TyGJtxO4g" opts={opts} />
    </div>
  );
};
