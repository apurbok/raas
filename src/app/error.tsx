"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <h1 className="mb-3 text-3xl font-semibold text-primary">Something went wrong</h1>
      <p className="mb-6 text-text-muted">Reload the page. If it keeps happening, restart the local server.</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-white"
      >
        Try again
      </button>
    </div>
  );
}
