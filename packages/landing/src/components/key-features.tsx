import { CSSProperties, ReactNode, useEffect, useRef } from "react";
import { SectionTitle } from "@/components/section-title";

// Illustrations animate via the `feature-active` variant: on card hover, or on touch screens when the card scrolls into view

const CrossedSignUp = () => (
  <div className="relative h-[132px] w-60 shrink-0 flex flex-col gap-2 p-4 rounded-2xl bg-white border border-line shadow-card -rotate-3">
    <Field>Email</Field>
    <Field>Password</Field>
    <div className="h-7 rounded-lg bg-[#DCD6CE] text-white text-[12px] font-bold flex items-center justify-center">
      Sign up
    </div>
    <div className="absolute left-1/2 top-1/2 size-[110px] -translate-1/2 rotate-6">
      {/* Redrawn in pen order: top-left stroke first, then top-right */}
      {[-45, 45].map((deg, i) => (
        <span
          key={deg}
          className="absolute left-1/2 top-1/2 w-[22px] h-[116px] -translate-1/2"
          style={{ rotate: `${deg}deg` }}
        >
          <span
            className={`block size-full rounded-[4px] bg-cross origin-top ${
              i
                ? "feature-active:animate-[draw_0.18s_ease-out_0.22s_backwards]"
                : "feature-active:animate-[draw_0.18s_ease-out]"
            }`}
          />
        </span>
      ))}
    </div>
  </div>
);

const Field = ({ children }: { children: ReactNode }) => (
  <div className="h-[22px] rounded-md bg-[#F4EEE4] px-2 flex items-center text-[11px] text-[#8C7867]">
    {children}
  </div>
);

const BlockButtonBrowser = () => (
  <div className="relative h-[132px] w-60 shrink-0 flex flex-col rounded-2xl bg-white border border-line shadow-card rotate-2">
    <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-line-soft">
      <span className="size-2 rounded-full bg-cross" />
      <span className="size-2 rounded-full bg-highlight" />
      <span className="size-2 rounded-full bg-[#E8DFD0]" />
      <span className="flex-1 ml-1.5 h-5 rounded-full bg-[#F4EEE4] px-2.5 flex items-center text-[11px] text-ink-subtle">
        <span className="relative transition-colors duration-200 feature-active:delay-150 feature-active:text-cross-strong">
          facebook.com
          {/* Strike-through drawn left to right once the button is pressed */}
          <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-cross-strong origin-left scale-x-0 transition-[scale] duration-300 ease-out feature-active:delay-200 feature-active:scale-x-100" />
        </span>
      </span>
    </div>
    <div className="flex-1 flex items-center justify-center">
      {/* The cursor sits inside the pressed element so it moves with the button */}
      <div className="relative feature-active:animate-[press_0.3s_ease-out]">
        <div className="h-[38px] px-4 rounded-[10px] bg-brand text-white text-[13px] font-bold grid items-center shadow-[0_8px_16px_-8px_rgb(79_70_229/0.7)] transition-[background-color,box-shadow] duration-200 feature-active:delay-100 feature-active:bg-ink-strong feature-active:shadow-none">
          <span className="[grid-area:1/1] text-center transition-opacity duration-200 feature-active:delay-100 feature-active:opacity-0">
            Block this site
          </span>
          <span className="[grid-area:1/1] text-center opacity-0 transition-opacity duration-200 feature-active:delay-100 feature-active:opacity-100">
            Blocked
          </span>
        </div>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="absolute -right-[19px] -bottom-[19px]"
        >
          <path
            d="M14.5 3.5 13.6 6M19.5 7.5l-2.4 1M10.4 4.6l.6 2.4"
            className="stroke-cross-strong"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M8 9l5.5 13 2-5.8L21.5 14z"
            className="fill-ink-strong stroke-white"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
);

const captchaChars = [
  { char: "x", transform: "rotate(-12deg)" },
  { char: "7", transform: "rotate(9deg) translateY(3px)" },
  { char: "K", transform: "rotate(-6deg) translateY(-2px)" },
  { char: "p", transform: "rotate(14deg)" },
  { char: "2", transform: "rotate(-9deg) translateY(2px)" },
  { char: "m", transform: "rotate(7deg) translateY(-3px)" },
  { char: "Q", transform: "rotate(-14deg)" },
  { char: "4", transform: "rotate(10deg) translateY(2px)" },
];

const Captcha = () => (
  <div className="h-[132px] w-60 shrink-0 flex flex-col gap-2.5 px-4 py-3.5 rounded-2xl bg-white border border-line shadow-card -rotate-2">
    <div className="relative h-[46px] rounded-[10px] bg-[#FDF1CC] overflow-hidden flex items-center justify-center gap-1 font-['Courier_New',monospace] text-[26px] font-bold text-[#6E3210]">
      {captchaChars.map(({ char, transform }) => (
        <span key={char} className="inline-block" style={{ transform }}>
          {char}
        </span>
      ))}
      <svg
        viewBox="0 0 200 46"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
      >
        <path
          d="M4 30 C50 8, 90 40, 140 16 S190 26, 198 12"
          stroke="#9A4A1C"
          strokeWidth="1.6"
          fill="none"
          opacity="0.55"
        />
      </svg>
    </div>
    <div className="h-[34px] rounded-lg border-2 border-brand px-2.5 flex items-center text-[14px] font-semibold tracking-[0.08em] text-ink">
      x{/* Each remaining character pops in after its own delay, like typing */}
      {[..."7Kp2mQ4"].map((char, i) => (
        <span
          key={char}
          className="inline-block overflow-hidden max-w-0 transition-[max-width] duration-0 feature-active:max-w-[1em] feature-active:delay-(--delay)"
          style={{ "--delay": `${(i + 1) * 250}ms` } as CSSProperties}
        >
          {char}
        </span>
      ))}
      <span className="inline-block w-0.5 h-4 ml-0.5 bg-brand" />
    </div>
  </div>
);

const features = [
  { text: "No subscription, no sign up", art: <CrossedSignUp /> },
  { text: "Block websites in 1 click", art: <BlockButtonBrowser /> },
  { text: "Solve captcha to unblock", art: <Captcha /> },
];

export function KeyFeatureList() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Touch screens have no hover, so mark cards in view to play their animation instead
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.toggleAttribute("data-in-view", entry.isIntersecting);
        }
      },
      { threshold: 0.7 },
    );
    for (const card of listRef.current?.children ?? []) {
      observer.observe(card);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      ref={listRef}
      className="w-full flex flex-col gap-y-[65px] pt-9 md:gap-y-5 md:pt-0"
    >
      {features.map(({ text, art }, i) => (
        <li
          key={text}
          className="group flex flex-col md:flex-row md:items-center gap-x-7 gap-y-[27px] px-6 md:px-8 pt-[30px] pb-7 md:pt-7 rounded-3xl bg-cream border border-line"
        >
          {/* Baseline on phones so the smaller number lines up with the title's first line; centered on desktop next to the illustration */}
          <div className="flex-1 flex items-baseline md:items-center gap-x-4 md:gap-x-7">
            <span
              aria-hidden="true"
              className="shrink-0 tabular-nums text-[28px] md:text-[44px] md:w-[60px] leading-none font-black tracking-[-0.05em] text-cross-strong"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-balance text-[20px] md:text-[24px] leading-[1.3] font-bold tracking-[-0.02em] text-ink-strong">
              {text}
            </span>
          </div>
          {/* On phones the illustration leads the card and sticks out over its top edge, with the text as its caption */}
          <div
            aria-hidden="true"
            className="order-first md:order-none self-center -mt-[58px] md:mt-0"
          >
            {art}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function KeyFeatures() {
  return (
    <section className="max-w-[848px] mx-auto px-6 pt-16 md:pt-28 flex flex-col items-center gap-15 md:gap-10">
      <SectionTitle id="features">Key Features</SectionTitle>
      <KeyFeatureList />
    </section>
  );
}
