interface FloatingCardProps {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
  animationClass: string;
  className?: string;
}

export default function FloatingCard({
  icon,
  title,
  description,
  colorClass,
  animationClass,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`absolute bg-white/[0.06] backdrop-blur-[20px] border border-white/10 rounded-2xl p-6 text-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] ${animationClass} ${className}`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 text-xl ${colorClass}`}
      >
        {icon}
      </div>
      <h4 className="text-[0.95rem] font-semibold mb-1.5">{title}</h4>
      <p className="text-[0.82rem] text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
