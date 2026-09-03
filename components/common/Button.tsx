import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  disabled = false,
  target,
  rel,
  className = "",
}: ButtonProps) {
  const buttonClass = `
    inline-flex
    h-14
    min-w-[280px]
    items-center
    justify-center
    rounded-full
    border
    border-neutral-900
    px-8
    cursor-pointer
    transition
    hover:bg-pink-400
    hover:border-pink-400
    hover:text-white
    ${className}
  `;

  if (href && !onClick) {
    if (target === "_blank") {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={buttonClass}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={buttonClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  );
}