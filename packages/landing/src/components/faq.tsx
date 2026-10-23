
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import { SectionTitle } from "@/components/section-title";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="max-w-[848px] mx-auto px-6 pt-28 pb-30 flex flex-col items-center gap-10">
      <SectionTitle id="faq">FAQ</SectionTitle>
      <div className="w-full rounded-[20px] border border-line bg-white overflow-hidden divide-y divide-line-soft">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full min-h-18 flex items-center justify-between gap-4 px-6 py-5 bg-white text-left text-[18px] font-semibold text-ink"
              >
                <span>{item.question}</span>
                <span className="shrink-0 size-8 rounded-full bg-cream-tint text-ink-subtle flex items-center justify-center">
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2.4}
                    aria-hidden="true"
                  />
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-[16px] leading-[1.6] text-ink-subtle">
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
