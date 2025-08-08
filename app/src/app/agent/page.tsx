import Link from "next/link";

export default function AgentHome() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <section className="col-span-12 lg:col-span-3 space-y-3">
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">Credit limit</div><div className="text-2xl font-semibold">—</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">Utilized</div><div className="text-2xl font-semibold">—</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">Available</div><div className="text-2xl font-semibold">—</div></div>
      </section>
      <section className="col-span-12 lg:col-span-5 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Inflows vs Auto-deductions</div>
        <div className="h-40 bg-muted" />
      </section>
      <section className="col-span-12 lg:col-span-4 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Upcoming dues</div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="h-4 w-2/3 bg-muted" />
          <div className="h-4 w-1/2 bg-muted" />
        </div>
      </section>
      <section className="col-span-12 lg:col-span-3 rounded-lg border p-4">
        <div className="mb-2 font-medium">Quick payments</div>
        <Link href="/agent/payments" className="inline-flex rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground">Open payment tools</Link>
      </section>
    </div>
  );
}