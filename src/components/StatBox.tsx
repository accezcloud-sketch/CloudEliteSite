interface StatBoxProps {
  number: string;
  label: string;
}

export default function StatBox({ number, label }: StatBoxProps) {
  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-[14px] p-6 text-center transition-all duration-300 hover:bg-white/[0.07] hover:border-sf-blue/30">
      <div className="font-display text-[2.2rem] font-bold text-sf-blue mb-1">
        {number}
      </div>
      <div className="text-[0.82rem] text-gray-300 font-medium">{label}</div>
    </div>
  );
}
