export default function ShemachPOSPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <section className="col-span-12 lg:col-span-4 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Products finder</div>
        <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="Search or scan SKU" />
        <div className="mt-3 h-64 bg-muted" />
      </section>
      <section className="col-span-12 lg:col-span-5 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Cart</div>
        <div className="h-64 bg-muted" />
      </section>
      <section className="col-span-12 lg:col-span-3 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Buyer & Payment</div>
        <div className="space-y-2 text-sm">
          <select className="w-full rounded-md border px-3 py-2"><option>Assigned User</option><option>Other User</option></select>
          <button className="w-full rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">Pay with Bank QR</button>
          <button className="w-full rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground">Pay with Bank Card</button>
          <button className="w-full rounded-md border px-3 py-2 text-sm">Cash</button>
        </div>
      </section>
    </div>
  );
}