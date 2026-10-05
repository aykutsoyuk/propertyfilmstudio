/**
 * Visual stand-in used wherever real footage/photography has not been
 * placed yet (see public/videos, public/images). Renders beneath the
 * actual <video>/<img> so that once real assets exist at the expected
 * paths they simply paint over this and nothing else changes.
 */
export function CinematicPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 bg-[linear-gradient(135deg,#2a2d26_0%,#454a3c_30%,#8a8569_55%,#3c3a33_78%,#0a0a0a_100%)] ${className}`}
    />
  );
}
