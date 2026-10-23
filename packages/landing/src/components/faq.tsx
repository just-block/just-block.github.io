
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  // TEMP visual tuner
  const [tuneMaxWidth, setTuneMaxWidth] = useState(672);

  return (
    <section className="w-full mx-auto" style={{ maxWidth: tuneMaxWidth }}>
      {import.meta.env.DEV && (
        <label className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm shadow-lg">
          FAQ max-width (px)
          <input
            type="number"
            step={1}
            min={200}
            value={tuneMaxWidth}
            onChange={(e) => setTuneMaxWidth(Number(e.target.value))}
            className="w-20 rounded border border-black/20 px-1.5 py-0.5"
          />
        </label>
      )}
      <h2 className="text-2xl font-bold mb-6 text-center" id="faq">
        FAQ
      </h2>
      <div className="divide-y divide-amber-200/60">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
              >
                <span className="text-[17px] font-semibold text-black leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-black transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-black/60 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
