export default function AdminStoresPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Shemach Stores</h2>
        <div className="text-sm text-muted-foreground">Filters • Saved views</div>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="p-3">Store</th>
              <th className="p-3">Shemach</th>
              <th className="p-3">On-hand SKUs</th>
              <th className="p-3">Stock value</th>
              <th className="p-3">Sales 7/30d</th>
              <th className="p-3">Low-stock</th>
              <th className="p-3">Assigned users</th>
              <th className="p-3">Bank balance</th>
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
              <td className="p-3">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}