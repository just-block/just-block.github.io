import { ReactNode } from "react";

export const Step = ({
  number,
  title,
  children,
}: {
  number: number;
  title: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <li className="flex flex-col gap-5">
      <div className="flex items-start gap-4">
        <span className="shrink-0 size-10 rounded-full bg-brand-soft text-brand text-[18px] font-bold flex items-center justify-center">
          {number}
        </span>
        <h3 className="pt-1.5 text-[20px] leading-[1.4] font-semibold text-ink">
          {title}
        </h3>
      </div>
      {children}
    </li>
  );
};

export const StepImage = ({
  framed,
  ...props
}: {
  src: string;
  alt: string;
  width: number;
  height?: number;
  // Screenshots with their own baked-in padding and shadow look boxed in with a frame
  framed?: boolean;
}) => {
  return (
    <img
      loading="lazy"
      {...props}
      className={`self-center max-w-full h-auto ${framed ? "rounded-2xl border border-line" : ""}`}
    />
  );
};
