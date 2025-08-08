import Link from "next/link";

export default function ShemachHome() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <section className="col-span-12 lg:col-span-3 space-y-3">
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">On-hand value</div><div className="text-2xl font-semibold">—</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">Sales today</div><div className="text-2xl font-semibold">—</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">Sales 7/30d</div><div className="text-2xl font-semibold">—</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">Bank balance</div><div className="text-2xl font-semibold">—</div></div>
      </section>
      <section className="col-span-12 lg:col-span-5 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Sales trend & top products</div>
        <div className="h-40 bg-muted" />
      </section>
      <section className="col-span-12 lg:col-span-4 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Low-stock alerts</div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="h-4 w-2/3 bg-muted" />
          <div className="h-4 w-1/2 bg-muted" />
        </div>
      </section>
      <section className="col-span-12 lg:col-span-3 rounded-lg border p-4">
        <div className="mb-2 font-medium">Quick POS</div>
        <Link href="/shemach/pos" className="inline-flex rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">Open POS</Link>
      </section>
    </div>
  );
}