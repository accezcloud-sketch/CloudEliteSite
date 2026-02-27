interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex gap-4.5 p-6 bg-white/[0.03] border border-white/[0.06] rounded-[14px] transition-all duration-300 hover:bg-white/[0.06] hover:border-sf-blue/20">
      <div className="w-12 h-12 min-w-12 rounded-xl bg-sf-blue/10 flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h4 className="text-base font-semibold text-white mb-1">{title}</h4>
        <p className="text-[0.88rem] text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
