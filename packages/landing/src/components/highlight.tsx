import { ReactNode } from "react";

export const Highlight = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <span className="bg-highlight px-[0.16em] rounded-[0.18em] box-decoration-clone whitespace-nowrap">
      {children}
    </span>
  );
};
