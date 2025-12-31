interface StepNumberProps {
  number: number;
}

export function StepNumber({ number }: StepNumberProps) {
  return (
    <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-primary text-white font-bold text-lg">
      {number}
    </span>
  );
}
