export default function AdminHome() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <section className="col-span-12 lg:col-span-3 space-y-3">
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">Onboarded</div><div className="text-2xl font-semibold">—</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">Active</div><div className="text-2xl font-semibold">—</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">GMV</div><div className="text-2xl font-semibold">—</div></div>
        <div className="rounded-lg border p-4"><div className="text-sm text-muted-foreground">NPL</div><div className="text-2xl font-semibold">—</div></div>
      </section>
      <section className="col-span-12 lg:col-span-5 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">GMV & Repayments</div>
        <div className="h-40 bg-muted" />
      </section>
      <section className="col-span-12 lg:col-span-4 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Activity</div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="h-4 w-2/3 bg-muted" />
          <div className="h-4 w-1/2 bg-muted" />
          <div className="h-4 w-1/3 bg-muted" />
        </div>
      </section>
      <section className="col-span-12 lg:col-span-4 rounded-lg border p-4">Risk heatmap</section>
      <section className="col-span-12 lg:col-span-4 rounded-lg border p-4">Onboarding funnel</section>
      <section className="col-span-12 lg:col-span-4 rounded-lg border p-4">Commissions & payouts</section>
    </div>
  );
}