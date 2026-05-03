/**
 * Admin layout — no main nav or footer, since admin is a separate context.
 * The root layout still wraps this, but we suppress Nav/Footer with display:none here
 * by replacing the layout chain.
 */

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bone">
      {/* Note: the global Nav and Footer from the root layout still render.
          We accept that in v1 — they're a useful sanity check that the visitor knows
          where they are. In v2 we can use a route group to fully isolate admin. */}
      {children}
    </div>
  );
}
