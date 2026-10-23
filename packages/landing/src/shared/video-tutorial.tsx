import { useRef, useState } from "react";
import { Play } from "lucide-react";
import cover from "@/assets/img/video-cover.webp";

// iPhone Safari only offers fullscreen through the native video player.
type WebkitVideoElement = HTMLVideoElement & {
  webkitEnterFullscreen?: () => void;
  webkitSupportsFullscreen?: boolean;
  webkitDisplayingFullscreen?: boolean;
};

const isAppleTouchDevice = () =>
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

// webkitSupportsFullscreen stays false until the player can show the video,
// but a play() started from the tap lifts the gesture requirement for later
// calls, so entering can wait for metadata.
const enterNativeFullscreen = (video: WebkitVideoElement) => {
  if (video.webkitDisplayingFullscreen) return true;
  if (!video.webkitSupportsFullscreen) return false;
  video.webkitEnterFullscreen?.();
  return true;
};

// Must run inside the tap handler so the request counts as user-initiated.
const enterFullscreen = (video: WebkitVideoElement) => {
  const useNativePlayer =
    typeof video.webkitEnterFullscreen === "function" &&
    (isAppleTouchDevice() || !document.fullscreenEnabled);

  if (useNativePlayer) {
    if (!enterNativeFullscreen(video)) {
      video.addEventListener("loadedmetadata", () => enterNativeFullscreen(video), { once: true });
    }
  } else if (document.fullscreenEnabled) {
    void video.requestFullscreen({ navigationUI: "hide" }).catch(() => {});
  }
};

const playVideo = (video: HTMLVideoElement | null) => {
  if (!video) return;
  // play() rejects when the browser blocks it; the controls still work
  void video.play().catch(() => {});
  if (window.matchMedia("(pointer: coarse)").matches) enterFullscreen(video);
};

export const VideoTutorial = ({ id }: { id?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  return (
    <div
      id={id}
      className="rounded-3xl p-2 bg-[#E9C98A] shadow-frame"
    >
      <div className="relative rounded-[18px] overflow-hidden isolate bg-paper aspect-video">
        <video
          ref={videoRef}
          controls={started}
          preload="metadata"
          className="block w-full h-full"
          onPlay={() => setStarted(true)}
        >
          <source src="https://general-bucket.memocard.org/just-block.av1.mp4" type='video/mp4; codecs="av01.0.09M.10"' />
          <source src="https://general-bucket.memocard.org/just-block.h264.mp4" type="video/mp4" />
        </video>
        {!started && (
          <button
            type="button"
            aria-label="Play video"
            className="group @container absolute inset-0 grid grid-rows-[1fr_auto_1fr] justify-items-center overflow-hidden bg-paper cursor-pointer"
            onClick={() => playVideo(videoRef.current)}
          >
            <img src={cover} alt="" className="absolute inset-0 size-full object-cover scale-105 blur-[3px] opacity-25" />
            <span className="relative self-end pb-[max(16px,4cqw)] text-[max(24px,5.6cqw)] leading-none font-extrabold tracking-[-0.04em] text-ink-strong">
              See how it works
            </span>
            <span className="relative flex size-[max(48px,12cqw)] items-center justify-center rounded-full bg-ink-strong text-white shadow-lg ring-[max(6px,1.6cqw)] ring-ink-strong/15 transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
              <Play className="size-[38%] translate-x-[8%] fill-current" strokeWidth={0} />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
