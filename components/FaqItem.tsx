interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 shadow-glow">
      <h3 className="text-base font-semibold text-white">{question}</h3>
      <p className="mt-3 text-sm text-white/70">{answer}</p>
    </div>
  );
}
