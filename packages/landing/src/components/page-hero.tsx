import { ReactNode } from "react";

export const PageHero = ({ title, children }: { title: ReactNode; children?: ReactNode }) => {
  return (
    <div className="bg-cream border-b border-sand-line">
      <section className="max-w-[928px] mx-auto px-6 pt-14 pb-20 flex flex-col items-center text-center gap-5">
        <h1 className="text-[clamp(36px,5vw,56px)] leading-[1.05] font-extrabold tracking-[-0.035em] text-ink-strong">
          {title}
        </h1>
        {children && (
          <p className="text-[20px] leading-[1.5] text-ink-subtle max-w-[600px] text-pretty">
            {children}
          </p>
        )}
      </section>
    </div>
  );
};
