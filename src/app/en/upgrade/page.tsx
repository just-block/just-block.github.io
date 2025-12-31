import Image from "next/image";
import { price } from "@/shared/config";
import { StepNumber } from "@/components/step-number";

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center bg-pastel py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16 max-w-xl">
        <h1 className="font-bold text-4xl md:text-5xl mb-6">How to upgrade</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          The free version lets you block up to 3 sites.
          <br />
          Upgrade to Pro for unlimited blocks — ${price}, one-time payment.
        </p>
      </div>

      {/* Steps Container */}
      <div className="w-full max-w-2xl space-y-20">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber number={1} />
            <h2 className="text-xl md:text-2xl font-semibold">
              Open Settings and click "Upgrade"
            </h2>
          </div>
          <Image
            src="/img/upgrade/1.png"
            alt="Settings with Upgrade button"
            width={320}
            height={400}
            className="rounded-2xl border border-gray-200 shadow-lg"
          />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber number={2} />
            <h2 className="text-xl md:text-2xl font-semibold">
              Complete purchase
            </h2>
          </div>
          <p className="text-gray-600 mb-4 text-center">
            You'll receive a license key via email. It looks like this:
          </p>
          <span className="bg-white px-6 py-3 rounded-xl text-sm md:text-base font-mono border border-gray-200 shadow-sm mb-3 select-none">
            38b1460a-5104-4067-a91d-77b872934d51
          </span>
          <p className="text-sm text-gray-500">
            Keep your license key private — don't share it with anyone.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <StepNumber number={3} />
            <h2 className="text-xl md:text-2xl font-semibold">
              Enter license key and click "Activate"
            </h2>
          </div>
          <Image
            src="/img/upgrade/2.png"
            alt="Settings with license key field"
            width={320}
            height={400}
            className="rounded-2xl border border-gray-200 shadow-lg"
          />
          <p className="text-gray-600 mt-6 text-center">
            Done. You now have unlimited blocks.
          </p>
        </div>
      </div>
    </div>
  );
}
