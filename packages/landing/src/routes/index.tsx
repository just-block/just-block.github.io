import { createFileRoute } from "@tanstack/react-router";
import { Highlight } from "@/components/highlight";
import { ChromeIcon } from "@/components/icons/chromeIcon";
import { extensionLink, price, supportEmail } from "@shared/config";
import { KeyFeatures } from "@/components/key-features";
import { Faq } from "@/components/faq";
import { VideoTutorial } from "@/shared/video-tutorial";
import { PlayDemoLink } from "@/components/play-demo-link";

export const Route = createFileRoute("/")({
  component: Page,
});

const captchaLetters = [
  { char: "c", transform: "rotate(-10deg)" },
  { char: "a", transform: "rotate(8deg) translateY(0.05em)" },
  { char: "p", transform: "rotate(-5deg) translateY(-0.04em)" },
  { char: "t", transform: "rotate(12deg)" },
  { char: "c", transform: "rotate(-8deg) translateY(0.04em)" },
  { char: "h", transform: "rotate(6deg) translateY(-0.03em)" },
  { char: "a", transform: "rotate(-12deg)" },
];

// "captcha" drawn as a squiggly captcha, with plain text for screen readers
const CaptchaWord = () => (
  <>
    <span className="sr-only">captcha</span>
    <span
      aria-hidden="true"
      className="group/captcha relative inline-flex items-center gap-[0.02em] px-[0.22em] py-[0.02em] mx-[0.04em] rounded-[0.2em] bg-white border-3 max-[520px]:border-2 border-dashed border-[#E9C98A] font-['Courier_New',ui-monospace,monospace] font-bold text-[#6E3210] tracking-normal"
    >
      {/* On hover each letter jitters a little further, alternating up and down */}
      {captchaLetters.map(({ char, transform }, i) => (
        <span
          key={i}
          className={`inline-block transition-[translate,rotate] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            i % 2
              ? "group-hover/captcha:translate-y-[0.07em] group-hover/captcha:rotate-6"
              : "group-hover/captcha:-translate-y-[0.07em] group-hover/captcha:-rotate-6"
          }`}
          style={{ transform }}
        >
          {char}
        </span>
      ))}
      <svg
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full"
      >
        <path
          d="M6 40 C50 14, 90 52, 140 22 S188 34, 196 18"
          className="stroke-cross-strong"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </span>
  </>
);

function Page() {
  return (
    <main className="text-ink">
      <div className="bg-cream pb-55">
        <section className="max-w-[1168px] mx-auto px-6 pt-18 max-[520px]:px-4 max-[520px]:pt-14 flex flex-col items-center text-center gap-12">
          {/* Always two lines; the font scales with the viewport so each line fits */}
          <h1 className="text-[min(7.4vw,64px)] leading-[1.4] font-extrabold tracking-[-0.04em] text-ink-strong">
            <span className="block whitespace-nowrap">
              Block websites in <Highlight>1&nbsp;click</Highlight>
            </span>
            <span className="block whitespace-nowrap">
              Solve <CaptchaWord /> to unlock
            </span>
          </h1>
          <a
            href={extensionLink}
            className="inline-flex items-center gap-3 h-16 pl-[26px] pr-8 max-[520px]:h-14 max-[520px]:pl-5 max-[520px]:pr-6 rounded-2xl bg-brand text-white text-[19px] max-[520px]:text-[17px] font-bold tracking-[-0.01em] shadow-cta hover:bg-[#5850f0] transition-colors duration-150"
          >
            <ChromeIcon />
            Get Chrome Extension
          </a>
        </section>
      </div>

      <div className="max-w-[868px] mx-auto -mt-41 px-6">
        <VideoTutorial id="demo" />
      </div>

      <KeyFeatures />

      <Faq
        items={[
          {
            question: "How do I block a website?",
            answer: (
              <>
                Click on the JustBlock extension icon in your browser and enter
                the URL of the website you want to block. See the{" "}
                <PlayDemoLink />
              </>
            ),
          },
          {
            question: "Can I unblock a website?",
            answer:
              "Yes — click the JustBlock icon, select the website you want to unblock, and solve a captcha.",
          },
          {
            question: "Why do I need to solve a captcha to unblock?",
            answer:
              'The captcha adds friction so you think twice before accessing a distracting website. Inspired by the "Atomic Habits" idea of making bad habits harder.',
          },
          {
            question: "Is it free?",
            answer: (
              <>
                The first 3 websites are free. For unlimited blocking, it's a
                one-time purchase of ${price} — no subscriptions.
              </>
            ),
          },
          {
            question: "How can I contact support?",
            answer: (
              <>
                Email at{" "}
                <a href={`mailto:${supportEmail}`} className="underline">
                  {supportEmail}
                </a>
              </>
            ),
          },
        ]}
      />
    </main>
  );
}
