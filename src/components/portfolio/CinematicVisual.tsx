import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export type FloatingChip = {
  label: string;
  /** Positioning classes, e.g. "left-4 top-6" */
  position: string;
  /** Depth in px, drives parallax + translateZ */
  depth?: number;
};

type CinematicVisualProps = {
  src: string;
  alt: string;
  chips?: FloatingChip[];
  className?: string;
  imageClassName?: string;
  aspect?: string;
  priority?: boolean;
  caption?: ReactNode;
};

/**
 * Layered parallax "3D card" for the portfolio imagery.
 * Pure CSS transforms + rAF; no 3D model, no heavy dependencies.
 */
export function CinematicVisual({
  src,
  alt,
  chips = [],
  className,
  imageClassName,
  aspect = "aspect-[4/3]",
  priority = false,
  caption,
}: CinematicVisualProps) {
  const isMobile = useIsMobile();
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--mx", px.toFixed(3));
        el.style.setProperty("--my", py.toFixed(3));
      });
    },
    [isMobile],
  );

  const handleLeave = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  }, []);

  // Gentle scroll-based parallax.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.setProperty("--sy", Math.max(-1, Math.min(1, progress)).toFixed(3));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("cine-stage group relative", className)}
    >
      <div aria-hidden className="cine-aura absolute -inset-6 rounded-[2.5rem]" />

      <div className="cine-tilt relative">
        <div className="cine-frame relative overflow-hidden rounded-[1.75rem] p-px">
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            width={1200}
            height={800}
            className={cn(
              "cine-img relative w-full rounded-[1.7rem] object-cover",
              aspect,
              imageClassName,
            )}
          />
          <div aria-hidden className="cine-sheen pointer-events-none absolute inset-0" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[1.7rem] bg-gradient-to-t from-background/70 via-transparent to-transparent"
          />
        </div>

        {chips.map((chip, i) => (
          <span
            key={chip.label}
            aria-hidden
            style={
              {
                "--depth": chip.depth ?? 18,
                animationDelay: `${i * 480}ms`,
              } as React.CSSProperties
            }
            className={cn(
              "cine-chip absolute rounded-xl border border-border bg-surface-2/80 px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-muted-foreground backdrop-blur-md sm:text-[11px]",
              chip.position,
            )}
          >
            {chip.label}
          </span>
        ))}

        {caption ? (
          <div className="glass-card absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-[10px] tracking-wide text-muted-foreground sm:text-[11px]">
              {caption}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
