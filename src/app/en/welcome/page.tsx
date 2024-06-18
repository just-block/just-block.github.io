import { JustBlockLogo } from "@/components/just-block-logo";
import Image from "next/image";
import first from "./img/1.png";
import second from "./img/2.png";
import third from "./img/3.png";
import { Container } from "@/components/container";

export default function Page() {
  return (
    <Container>
      <div className={"flex flex-col w-full items-center bg-pastel pt-8 px-4"}>
        <h1 className={"font-bold text-4xl mb-8"}>How to use</h1>
        <h2 className={"text-3xl"}>1. Open the extension list</h2>
        <Image src={first} width={800} alt={"Open extension list"} />
        <h2 className={"text-3xl"}>2. Pin the extension</h2>
        <Image src={second} width={800} alt={"Pin the extension"} />
        <h2 className={"text-3xl"}>
          3. Go to a website you'd like to block, open extension and click
          "Block current website"
        </h2>
        <Image src={third} width={800} alt={"Block a website"} />
      </div>
    </Container>
  );
}
