"use client";

export const VideoTutorial = () => {
  return (
    <div
      className={"w-full h-full md:w-[480px] md:h-[292px] rounded-2xl border-4 border-yellow-100"}
      style={{
        position: "relative",
      }}
    >
      <video
        controls
        poster="https://general-bucket.memocard.org/just-block-video-prevew.png"
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 12,
        }}
      >
        <source src="https://general-bucket.memocard.org/just-block.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
