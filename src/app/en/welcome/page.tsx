import { JustBlockLogo } from "@/components/just-block-logo";
import Image from "next/image";
import first from "./img/1.png";
import second from "./img/2.png";
import third from "./img/3.png";

export default function Page() {
  return (
    <div className={"flex flex-col w-full items-center p-5 bg-pastel"}>
      <JustBlockLogo />
      <h1 className={"font-bold text-4xl mt-12"}>Open extension list</h1>
      <Image src={first} width={800} alt={"Open extension list"} />
      <h1 className={"font-bold text-4xl"}>Pin the extension</h1>
      <Image src={second} width={800} alt={"Pin the extension"} />
      <h1 className={"font-bold text-4xl"}>
        Go to a website you'd like to block,
        <br />
        open extension and click "Block current website"
      </h1>
      <Image src={third} width={800} alt={"Block a website"} />
    </div>
  );
}
