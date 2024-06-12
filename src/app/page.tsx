import Image from "next/image";
import { Highlight } from "@/components/highlight";
import { Button } from "@/components/ui/button";
import { ChromeIcon } from "@/components/icons/chromeIcon";
import { extensionLink, supportEmail } from "@/lib/config";

export default function Page() {
  return (
    <>
      <div className={"flex justify-center pt-5 pb-5 bg-pastel"}>
        <Image
          alt="JustBlock logo"
          width="152"
          height="60"
          className={"max-w-full max-h-full"}
          src={"/img/full-logo.png"}
        />
      </div>

      <main className={"flex flex-col items-center"}>
        <div className="w-full bg-pastel pb-8 shadow-sm">
          <section className="max-w-[700px] px-4 mx-auto flex flex-col items-center">
            <h1 className="title text-center pb-4 text-4xl leading-snug font-bold">
              Block websites and get <Highlight>free time</Highlight>
              <br />
              for what <Highlight>truly matters</Highlight>
            </h1>
            <p className="text-center text-muted-foreground text-lg">
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
            <li className="mb-2">Block distracting websites</li>
            <li className="mb-2">
              Solve captcha to prevent yourself from unblocking websites
              impulsively. Think twice before accessing a distracting website
            </li>
            <li className="mb-2">
              No subscription, one-time purchase of $9.99 for unlimited blocking
            </li>
            <li>No excessive features, no sign up, just block 😎</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-center" id={"faq"}>
            FAQ
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              How do I block a website?
            </h3>
            <p>
              To block a website, click on the JustBlock extension icon in your
              browser and enter the URL of the website you want to block.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Can I unblock a website?
            </h3>
            <p>
              Yes, you can unblock a website by clicking on the JustBlock
              extension icon, selecting the website you want to unblock, and
              solving a captcha.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Why do I need to solve a captcha to unblock a website?
            </h3>
            <p>
              The captcha is designed to prevent you from unblocking websites
              impulsively. It helps you think twice before accessing a
              distracting website. This aligns with the concept of making bad
              habits harder to repeat, as discussed in the book "Atomic Habits."
            </p>
          </div>
          <div className={"mb-4"}>
            <h3 className="text-lg font-semibold mb-2">
              How do I purchase the unlimited version?
            </h3>
            <p>
              To purchase the unlimited version, click on the JustBlock
              extension icon and follow the prompts to complete your purchase.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
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
      <footer
        className={
          "bg-pastel p-4 flex justify-center items-center gap-4 text-muted-foreground shadow-[1px_-1px_4px_rgba(0,0,0,0.2)]"
        }
      >
        <p>&copy; 2024 JustBlock. All rights reserved.</p>
        |&nbsp;
        <p>
          <a href="/privacy-policy.html">Privacy Policy</a>
        </p>
        |&nbsp;
        <p>
          <a href={`mailto:${supportEmail}`} className={"underline"}>
            {supportEmail}
          </a>
        </p>
      </footer>
    </>
  );
}
