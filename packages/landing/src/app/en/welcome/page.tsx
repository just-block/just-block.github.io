import Image from "next/image";
import first from "@/app/en/img/1.png";
import second from "@/app/en/img/2.png";
import third from "@/app/en/img/3.png";

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center bg-[#faf6eb] py-16 px-4 border-b border-amber-200/60">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-bold text-4xl md:text-5xl mb-6">How to use</h1>
      </div>

      {/* Steps Container */}
      <div className="w-full max-w-2xl space-y-20">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            1. Open the extension list
          </h2>
          <Image
            loading="lazy"
            src={first}
            width={800}
            alt="Open extension list"
          />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            2. Pin the extension
          </h2>
          <Image
            loading="lazy"
            src={second}
            width={800}
            alt="Pin the extension"
          />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            3. Go to a website you'd like to block, open extension and click
            "Block current website"
          </h2>
          <Image
            loading="lazy"
            src={third}
            width={800}
            alt="Block a website"
          />
        </div>
      </div>
    </div>
  );
}
