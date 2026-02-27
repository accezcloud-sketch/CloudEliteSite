interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  iconBg,
  iconColor,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl px-7 py-9 transition-all duration-400 overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(11,29,58,0.1)] hover:border-transparent">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-sf-blue to-accent scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
      <div
        className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl mb-5 ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <h3 className="font-display text-[1.2rem] font-semibold text-navy mb-2.5">
        {title}
      </h3>
      <p className="text-[0.92rem] text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
