export default function ShemachInventoryPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Inventory</h2>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">On hand</th>
              <th className="p-3">Reorder point</th>
              <th className="p-3">Price</th>
              <th className="p-3">Sales 7/30d</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
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