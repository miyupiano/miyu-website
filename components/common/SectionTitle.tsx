type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: Props) {
  return (
    <div
      className={`mb-6 ${
        center ? "text-center" : ""
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-extralight tracking-[0.08em] text-neutral-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-neutral-500 leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}