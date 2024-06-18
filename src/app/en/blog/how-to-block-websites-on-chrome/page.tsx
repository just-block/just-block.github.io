import { extensionLink, supportEmail } from "@/lib/config";
import first from "@/app/en/img/1.png";
import second from "@/app/en/img/2.png";
import third from "@/app/en/img/3.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white py-12 ">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold tracking-tight text-4xl mb-8">
          How to block websites on Chrome
        </h1>

        <div className="mt-6 text-lg space-y-6">
          <p>
            In the digital age, distractions are just a click away. Social
            media, news sites, and various forms of entertainment can easily
            consume our time. Blocking these distracting
            websites can help you stay focused on your tasks and achieve your
            goals more efficiently.
          </p>

          <p>
            JustBlock is a simple Chrome extension that makes it easy to block
            distracting websites.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            How to block websites with JustBlock
          </h2>

          <p>
            Follow these simple steps:
          </p>

          <ol className="list-decimal list-inside space-y-4">
            <li>
              Install the extension from the{" "}
              <a href={extensionLink} className={"underline text-blue-500"}>
                Chrome store
              </a>
            </li>

            <li>
              Open the extension list in Chrome by clicking on the puzzle piece
              icon in the top right corner of your browser
              <Image
                loading={"lazy"}
                src={first}
                width={800}
                alt={"Open extension list"}
                className={"mt-2"}
              />
            </li>
            <li>
              Find the JustBlock extension and click on the pin icon to pin it
              to your browser toolbar for easy access
              <Image
                loading={"lazy"}
                src={second}
                width={800}
                className={"mt-2"}
                alt={"Pin the extension"}
              />
            </li>
            <li>
              Navigate to a website you want to block, click on the JustBlock
              extension icon, and select "Block current website"
              <Image
                loading={"lazy"}
                src={third}
                width={800}
                alt={"Block a website"}
                className={"mt-2"}
              />
            </li>
          </ol>

          <p>
            That's it! The website will now be blocked. If you want to access
            the blocked website, you'll need to solve a captcha. This extra step
            helps you think twice before giving in to distractions, aligning
            with the concept of making bad habits harder to repeat, as discussed
            in the book "Atomic Habits."
          </p>

          <h2 className="text-3xl font-bold mb-4">Key features of JustBlock</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Block distracting websites with a single click</li>
            <li>Solve captcha to prevent impulsive unblocking</li>
            <li>One-time purchase of $9.99 for unlimited blocking</li>
            <li>No excessive features, no sign up, just block 😎</li>
          </ul>

          <p>
            JustBlock offers a simple and effective solution to help you stay
            focused and productive by blocking distracting websites. Don't let
            websites control you. Control them instead and say no to
            distractions.
          </p>
        </div>
      </div>
    </div>
  );
}
