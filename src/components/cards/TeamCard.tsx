import type { Leader } from "@/content/leadership";

export function TeamCard({ leader }: { leader: Leader }) {
  const initials = leader.name
    .split(" ")
    .map((n) => n[0])
    .filter((c) => c !== ".")
    .slice(0, 2)
    .join("");

  return (
    <article className="rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
        {initials}
      </div>
      <h3 className="mb-1 text-lg font-semibold text-primary">{leader.name}</h3>
      <p className="mb-3 text-sm font-medium text-accent">{leader.title}</p>
      <p className="line-clamp-4 text-sm leading-relaxed text-text-muted">{leader.bio}</p>
    </article>
  );
}
