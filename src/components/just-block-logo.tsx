import Image from "next/image";

export const JustBlockLogo = () => {
  return (
    <Image
      alt="JustBlock logo"
      width="152"
      height="60"
      className={"max-w-full max-h-full"}
      src={"/img/full-logo.png"}
    />
  );
};
