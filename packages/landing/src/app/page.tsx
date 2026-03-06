import { Highlight } from "@/components/highlight";
import { Button } from "@/components/ui/button";
import { ChromeIcon } from "@/components/icons/chromeIcon";
import { extensionLink, price, supportEmail } from "shared";
import { KeyFeatures } from "@/components/key-features";
import { Faq } from "@/components/faq";
import { VideoTutorial } from "@/shared/video-tutorial";
import { PlayDemoLink } from "@/components/play-demo-link";

export default function Page() {
  return (
    <main className={"flex flex-col items-center"}>
      <div className="w-full bg-[#faf6eb] pb-8 pt-8 border-b border-amber-200/60">
        <section className="max-w-[700px] px-4 mx-auto flex flex-col items-center">
          <h1 className="title text-center pb-4 text-4xl leading-snug font-bold">
            Block websites <Highlight>in one click</Highlight>
          </h1>
          <p className="text-center text-lg text-amber-950/50">
            Don&#39;t let distracting websites control you
          </p>
          <a href={extensionLink}>
            <Button
              className={
                "font-bold text-lg px-6 py-7 mt-6 rounded-xl bg-indigo-600 hover:bg-indigo-700"
              }
            >
              <ChromeIcon />
              &nbsp;&nbsp; Get Chrome Extension
            </Button>
          </a>
        </section>
      </div>

      <div className="flex flex-col items-center p-8 rounded-lg max-w-3xl">
        <VideoTutorial id="demo" />
        <div className="w-full mt-6 mb-8">
          <KeyFeatures />
        </div>

        <Faq
          items={[
            {
              question: "How do I block a website?",
              answer: (
                <>
                  Click on the JustBlock extension icon in your browser and
                  enter the URL of the website you want to block. See the{" "}
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
                  Email us at{" "}
                  <a
                    href={`mailto:${supportEmail}`}
                    className="underline"
                  >
                    {supportEmail}
                  </a>
                </>
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
