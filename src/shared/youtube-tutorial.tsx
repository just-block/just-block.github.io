"use client";

export const YoutubeTutorial = () => {
  return (
    <div
      className={"w-full h-full md:w-[480px] md:h-[292px] rounded-2xl border-4 border-yellow-100"}
      style={{
        position: "relative",
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/l7TyGJtxO4g"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 12,
        }}
      ></iframe>
    </div>
  );
};
