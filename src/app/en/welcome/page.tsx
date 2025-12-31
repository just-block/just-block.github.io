import Image from "next/image";
import first from "@/app/en/img/1.png";
import second from "@/app/en/img/2.png";
import third from "@/app/en/img/3.png";
import { StepNumber } from "@/components/step-number";

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center bg-pastel py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-bold text-4xl md:text-5xl mb-6">How to use</h1>
      </div>

      {/* Steps Container */}
      <div className="w-full max-w-2xl space-y-20">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber number={1} />
            <h2 className="text-xl md:text-2xl font-semibold">
              Open the extension list
            </h2>
          </div>
          <Image
            loading="lazy"
            src={first}
            width={800}
            alt="Open extension list"
          />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber number={2} />
            <h2 className="text-xl md:text-2xl font-semibold">
              Pin the extension
            </h2>
          </div>
          <Image
            loading="lazy"
            src={second}
            width={800}
            alt="Pin the extension"
          />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber number={3} />
            <h2 className="text-xl md:text-2xl font-semibold text-center">
              Go to a website you'd like to block, open extension and click
              "Block current website"
            </h2>
          </div>
          <Image
            loading="lazy"
            src={third}
            width={800}
            alt="Block a website"
          />
        </div>
      </div>

      <p className="text-lg mt-16 mb-8">
        Want unlimited blocks?{" "}
        <a href="/en/upgrade" className="underline text-indigo-600">
          Learn how to upgrade
        </a>
      </p>
    </div>
  );
}
