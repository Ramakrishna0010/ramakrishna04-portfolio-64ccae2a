import { useCallback, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type ProfilePhotoProps = {
  src: string;
  alt: string;
};

export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  const isMobile = useIsMobile();
  const tiltRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const handleMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (isMobile) return;
      const el = tiltRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        el.style.setProperty("--tilt-x", `${(-py * 5).toFixed(2)}deg`);
        el.style.setProperty("--tilt-y", `${(px * 5).toFixed(2)}deg`);
      });
    },
    [isMobile],
  );

  const handleLeave = useCallback(() => {
    const el = tiltRef.current;
    if (!el) return;
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  return (
    <div className="photo-stage relative">
      <div aria-hidden className="photo-aura absolute -inset-6 rounded-[2.25rem]" />
      <div
        ref={tiltRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="photo-tilt group relative"
      >
        <div className="photo-frame relative rounded-[1.75rem] p-px">
          <img
            src={src}
            width={1265}
            height={1600}
            alt={alt}
            loading="eager"
            className="photo-img relative aspect-[4/5] w-full rounded-[1.7rem] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
