import { ReactNode } from "react";

export const Container = (props: { children: ReactNode }) => {
  const { children } = props;
  return <div className={"mx-auto w-full max-w-7xl"}>{children}</div>;
};
