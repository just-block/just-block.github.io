
export const VideoTutorial = ({ id }: { id?: string }) => {
  return (
    <div
      id={id}
      className="rounded-3xl p-2 bg-highlight shadow-frame"
    >
      <div className="rounded-[18px] overflow-hidden isolate bg-paper aspect-video">
        <video
          controls
          poster="https://general-bucket.memocard.org/just-block-video-prevew.png"
          className="block w-full h-full"
        >
          <source src="https://general-bucket.memocard.org/just-block.av1.mp4" type='video/mp4; codecs="av01.0.09M.10"' />
          <source src="https://general-bucket.memocard.org/just-block.h264.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
