"use client";

export function PlayDemoLink() {
  return (
    <a
      href="#demo"
      className="underline"
      onClick={(e) => {
        e.preventDefault();
        const video = document.querySelector<HTMLVideoElement>("#demo video");
        if (video) {
          video.scrollIntoView({ behavior: "smooth", block: "center" });
          setTimeout(() => video.play(), 500);
        }
      }}
    >
      video demo
    </a>
  );
}
