import Link from "next/link";

export default function DashboardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-12">
      <aside className="col-span-2 hidden border-r p-4 lg:block">
        <div className="mb-4 text-lg font-semibold">Navigation</div>
        <nav className="space-y-2">
          <Link className="block text-sm hover:underline" href="/admin">Admin</Link>
          <Link className="block text-sm hover:underline" href="/shemach">Shemach</Link>
          <Link className="block text-sm hover:underline" href="/agent">Agent</Link>
        </nav>
      </aside>
      <div className="col-span-12 lg:col-span-10">
        <header className="sticky top-0 z-10 border-b bg-background/80 p-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Coop Platform</div>
            <div className="text-sm">User</div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}