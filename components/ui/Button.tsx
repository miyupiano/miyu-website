type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({
  children,
  href = "#",
}: ButtonProps) {
  return (
    <a
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        border
        border-neutral-900
        px-8
        py-3
        text-sm
        tracking-[0.15em]
        uppercase
        transition
        duration-300
        hover:bg-neutral-900
        hover:text-white
      "
    >
      {children}
    </a>
  );
}