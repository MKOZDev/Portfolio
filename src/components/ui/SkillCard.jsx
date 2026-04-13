export default function SkillCard({
  icon: Icon,
  iconBg,
  label,
  title,
  positionClasses,
  width,
  color,
  delay,
}) {
  return (
    <div
      className={`absolute ${positionClasses} animate-float shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-between bg-white p-4 rounded-2xl gap-3 ${width}`}
      style={{ animationDelay: delay }}
    >
      <div className={`p-3 rounded-xl ${iconBg}`}>
        <Icon className={`text-2xl ${color}`} />
      </div>
      <div>
        <p className="text-xs text-secondary">{label}</p>
        <p className="font-bold text-main text-sm">{title}</p>
      </div>
    </div>
  );
}
