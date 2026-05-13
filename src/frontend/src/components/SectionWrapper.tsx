import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Override default vertical padding */
  noPadding?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`
        relative w-full overflow-hidden
        ${noPadding ? "" : "py-24 md:py-32"}
        ${className}
      `}
    >
      {children}
    </section>
  );
}
