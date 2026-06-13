import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-taro/10 px-4 py-1.5 font-display text-sm font-bold uppercase tracking-[0.16em] text-taro-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="heading-display text-3xl text-ink sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="text-lg text-ink/70">{subtitle}</p>}
    </Reveal>
  );
}
