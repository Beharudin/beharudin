import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-semibold">Coop Platform</h1>
      <p className="text-muted-foreground mt-2">Choose a portal to enter.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link href="/admin" className="rounded-lg border p-6 hover:bg-muted/50">
          <div className="text-xl font-medium">Admin</div>
          <div className="text-sm text-muted-foreground">Manage stakeholders, stores, finance.</div>
        </Link>
        <Link href="/shemach" className="rounded-lg border p-6 hover:bg-muted/50">
          <div className="text-xl font-medium">Shemach</div>
          <div className="text-sm text-muted-foreground">POS, inventory, assigned users, receipts.</div>
        </Link>
        <Link href="/agent" className="rounded-lg border p-6 hover:bg-muted/50">
          <div className="text-xl font-medium">Agent</div>
          <div className="text-sm text-muted-foreground">Orders, payments, loans, shadow account.</div>
        </Link>
      </div>
    </main>
  );
}