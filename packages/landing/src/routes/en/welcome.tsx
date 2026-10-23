import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Step, StepImage } from "@/components/step";
import first from "@/assets/img/1.png";
import second from "@/assets/img/2.png";
import third from "@/assets/img/3.png";

export const Route = createFileRoute("/en/welcome")({
  component: Page,
});

function Page() {
  return (
    <main>
      <PageHero title="How to use" />
      <ol className="max-w-[848px] mx-auto px-6 pt-16 pb-28 flex flex-col gap-16">
        <Step number={1} title="Open the extension list">
          <StepImage src={first} width={800} alt="Open extension list" />
        </Step>
        <Step number={2} title="Pin the extension">
          <StepImage src={second} width={800} alt="Pin the extension" />
        </Step>
        <Step
          number={3}
          title={`Go to a website you'd like to block, open extension and click "Block current website"`}
        >
          <StepImage src={third} width={800} alt="Block a website" />
        </Step>
      </ol>
    </main>
  );
}
