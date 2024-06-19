import { Highlight } from "@/components/highlight";
import { Button } from "@/components/ui/button";
import { ChromeIcon } from "@/components/icons/chromeIcon";
import { extensionLink, supportEmail } from "@/shared/config";
import { keyFeatures } from "@/shared/text/key-features";

export default function Page() {
  return (
    <main className={"flex flex-col items-center"}>
      <div className="w-full bg-pastel pb-8 shadow-sm pt-8">
        <section className="max-w-[700px] px-4 mx-auto flex flex-col items-center">
          <h1 className="title text-center pb-4 text-4xl leading-snug font-bold">
            Block websites and get <Highlight>free time</Highlight>
            <br />
            for what <Highlight>truly matters</Highlight>
          </h1>
          <p className="text-center text-lg">
            Social media is fine-tuned to captivate our minds. Don't let
            websites control you. Control them instead and say no to
            distractions.
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

      <div className="p-8 rounded-lg max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-center" id={"features"}>
          Key Features
        </h2>
        <ul className="list-disc pl-6 mb-8 text-xl">
          {keyFeatures.map((feature, i) => (
            <li className="mb-2" key={i}>
              {feature}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-center" id={"faq"}>
          FAQ
        </h2>
        <div className="mb-4 text-xl">
          <h3 className="text-xl font-semibold mb-2">
            How do I block a website?
          </h3>
          <p>
            To block a website, click on the JustBlock extension icon in your
            browser and enter the URL of the website you want to block.
          </p>
        </div>
        <div className="mb-4 text-xl">
          <h3 className="text-xl font-semibold mb-2">
            Can I unblock a website?
          </h3>
          <p>
            Yes, you can unblock a website by clicking on the JustBlock
            extension icon, selecting the website you want to unblock, and
            solving a captcha.
          </p>
        </div>
        <div className="mb-4 text-xl">
          <h3 className="text-xl font-semibold mb-2">
            Why do I need to solve a captcha to unblock a website?
          </h3>
          <p>
            The captcha is designed to prevent you from unblocking websites
            impulsively. It helps you think twice before accessing a distracting
            website. This aligns with the concept of making bad habits harder to
            repeat, as discussed in the book "Atomic Habits."
          </p>
        </div>
        <div className={"mb-4 text-xl"}>
          <h3 className="text-xl font-semibold mb-2">Is it free?</h3>
          <p>
            The first 3 websites are free to block. To block more websites, you
            can purchase the unlimited version for $9.99. No subscriptions,
            one-time purchase, lifetime access.
          </p>
        </div>

        <div className={"text-xl"}>
          <h3 className="text-xl font-semibold mb-2">
            How can I contact support?
          </h3>
          <p>
            Please write to the support email{" "}
            <a href={`mailto:${supportEmail}`} className={"underline"}>
              {supportEmail}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
