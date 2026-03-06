import { ReactNode } from "react";

export const Highlight = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <span
      className={
        "bg-amber-200/60 px-1 py-0.5 rounded shadow-sm inline transition duration-300 ease-in-out hover:bg-amber-200/80"
      }
    >
      {children}
    </span>
  );
};
