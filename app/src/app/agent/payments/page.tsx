export default function AgentPaymentsPage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <section className="col-span-12 lg:col-span-5 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Payment tools</div>
        <div className="space-y-2">
          <button className="w-full rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground">Generate payment link</button>
          <button className="w-full rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground">Show QR code</button>
        </div>
      </section>
      <section className="col-span-12 lg:col-span-7 rounded-lg border p-4">
        <div className="mb-2 text-sm text-muted-foreground">Recent settlements</div>
        <div className="h-40 bg-muted" />
      </section>
    </div>
  );
}