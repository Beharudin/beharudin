export default function AdminAgentsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Agents</h2>
        <div className="text-sm text-muted-foreground">Filters • Saved views</div>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="p-3">Agent</th>
              <th className="p-3">Shemach</th>
              <th className="p-3">KYC</th>
              <th className="p-3">Credit</th>
              <th className="p-3">Shadow Bal</th>
              <th className="p-3">AR Days</th>
              <th className="p-3">Last Payment</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}