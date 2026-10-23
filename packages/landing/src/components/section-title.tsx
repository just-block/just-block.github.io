import { ReactNode } from "react";

export const SectionTitle = ({ id, children }: { id?: string; children: ReactNode }) => {
  return (
    <h2
      id={id}
      className="text-[40px] leading-[1.1] font-extrabold tracking-[-0.03em] text-ink-strong text-center"
    >
      {children}
    </h2>
  );
};
