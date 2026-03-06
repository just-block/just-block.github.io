"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full max-w-2xl mx-auto">
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
