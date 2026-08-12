import Link from "next/link";
import { NewsItem } from "@/data/news";

type Props = {
  item: NewsItem;
  showBorder?: boolean;
};

export default function NewsCard({
  item,
  showBorder = true,
}: Props) {
  const content = (
    <>
      {/* Left Accent */}

      <span
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          rounded-r-full
          bg-black
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Date */}

      <time className="text-sm tracking-wide text-neutral-400">
        {item.date}
      </time>

      {/* Category */}

      <span
        className="
          w-fit
          rounded-full
          border
          border-neutral-300
          px-3
          py-1
          text-xs
          tracking-[0.15em]
          text-neutral-500
          transition
          group-hover:border-black
          group-hover:text-black
        "
      >
        {item.category}
      </span>

      {/* Title */}

      <p
        className="
          text-neutral-700
          transition
          duration-300
          group-hover:translate-x-2
          group-hover:text-black
        "
      >
        {item.title}
      </p>

      {/* Arrow */}

      <span
        className="
          text-xl
          text-neutral-300
          transition
          duration-300
          group-hover:translate-x-2
          group-hover:text-black
        "
      >
        →
      </span>
    </>
  );

  const className = `
    group
    relative
    grid
    gap-3
    px-6
    py-4
    transition-all
    duration-300
    hover:bg-white
    md:grid-cols-[120px_110px_1fr_auto]
    md:items-center
    ${showBorder ? "border-b border-neutral-200" : ""}
  `;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className={className}
    >
      {content}
    </Link>
  );
}