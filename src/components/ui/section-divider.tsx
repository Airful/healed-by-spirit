interface SectionDividerProps {
  variant?: "wave" | "curve" | "peak";
  fill?: string;
  flip?: boolean;
  className?: string;
}

const paths = {
  wave: "M0,64 C320,120 640,0 960,64 C1280,128 1440,32 1440,32 L1440,160 L0,160 Z",
  curve: "M0,128 Q720,0 1440,128 L1440,160 L0,160 Z",
  peak: "M0,160 L480,40 L720,80 L960,20 L1440,160 Z",
};

export function SectionDivider({
  variant = "wave",
  fill = "var(--color-card)",
  flip = false,
  className,
}: SectionDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className ?? ""}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20"
        fill={fill}
      >
        <path d={paths[variant]} />
      </svg>
    </div>
  );
}
