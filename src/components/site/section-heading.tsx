type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <span
        className={`eyebrow ${invert ? "border-white/15 bg-white/10 text-orange-200" : ""}`}
      >
        {eyebrow}
      </span>
      <h1 className={`section-title text-balance ${invert ? "text-white" : ""}`}>
        {title}
      </h1>
      <p className={`section-copy ${invert ? "text-slate-200" : ""}`}>
        {description}
      </p>
    </div>
  );
}