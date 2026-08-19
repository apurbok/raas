export function SisterConcernFlipCard({ concern }: { concern: any }) {
  return (
    <div className="relative h-64 w-52 rounded-2xl overflow-hidden group-hover:translate-y-[-4px] group-hover:shadow-2xl transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581094782123-898b9e5ba7e5?w=800&h=600&fit=crop"
          alt={concern.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/20 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/30">
            {concern.category}
          </span>
          <h3 className="mt-2 text-xl font-semibold text-white">{concern.name}</h3>
          <p className="mt-1 text-sm text-white/80">{concern.description}</p>
        </div>
      </div>
    </div>
  );
}