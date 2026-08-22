import type { Leader } from "@/content/leadership";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "@/components/ui/BrandIcons";

const avatarImages: Record<string, string> = {
  "nasim-jahan": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
  "md-shah-alam": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
  "sharif-sadi": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
  "reaz-ahmed": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
  "azizur-rashid": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
  "iftekhar-khan": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
  "mohaiminur-rahman": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
  "syed-mobashwer": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&q=80",
  "badiruzzaman-mollah": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
};

export function TeamCard({ leader }: { leader: Leader }) {
  const initials = leader.name
    .split(" ")
    .map((n) => n[0])
    .filter((c) => c !== ".")
    .slice(0, 2)
    .join("");

  const avatarImage = avatarImages[leader.slug];

  return (
    <article className="group rounded-xl border border-border bg-white shadow-sm transition-all hover:shadow-md hover:border-accent/30 hover:-translate-y-1 overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
        {avatarImage ? (
          <>
            <img
              src={avatarImage}
              alt={leader.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-bold text-white/80">{initials}</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-lg font-semibold text-primary transition-colors group-hover:text-accent">
          {leader.name}
        </h3>
        <p className="mb-3 text-sm font-medium text-accent">{leader.title}</p>
        <p className="line-clamp-4 text-sm leading-relaxed text-text-muted">{leader.bio}</p>
        <div className="mt-4 flex gap-2">
          <a
            href="https://www.linkedin.com/in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2] text-white transition-transform hover:scale-110 hover:shadow-md"
          >
            <LinkedinLogo />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) profile"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white transition-transform hover:scale-110 hover:shadow-md"
          >
            <TwitterLogo />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#24292e] text-white transition-transform hover:scale-110 hover:shadow-md"
          >
            <GithubLogo />
          </a>
        </div>
      </div>
    </article>
  );
}