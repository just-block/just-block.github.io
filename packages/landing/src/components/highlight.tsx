import { ReactNode } from "react";

export const Highlight = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <span
      className={
        "bg-[#fff2b3] px-1 py-0.5 rounded shadow-md inline transition duration-300 ease-in-out hover:bg-[#ffe57f]"
      }
    >
      {children}
    </span>
  );
};
