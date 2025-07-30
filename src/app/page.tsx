export default function Home() {
  const coffeeList = [
    {
      name: "Ethiopian Yirgacheffe",
      brewDate: "2025-07-29",
      notes: "Floral, tea-like",
      grinder: "Niche Zero",
      grinderSetting: 19,
      dose: "18g",
      output: "280ml",
    },
    // ...more rows
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Coffee Brew Log</h1>
      <table className="min-w-full bg-white border shadow">
        <thead>
          <tr>
            <th className="px-2 py-1">Name</th>
            <th className="px-2 py-1">Brew Date</th>
            <th className="px-2 py-1">Notes</th>
            <th className="px-2 py-1">Grinder</th>
            <th className="px-2 py-1">Setting</th>
            <th className="px-2 py-1">Dose</th>
            <th className="px-2 py-1">Output</th>
          </tr>
        </thead>
        <tbody>
          {coffeeList.map((c, i) => (
            <tr key={i} className="even:bg-gray-50">
              <td className="px-2 py-1">{c.name}</td>
              <td className="px-2 py-1">{c.brewDate}</td>
              <td className="px-2 py-1">{c.notes}</td>
              <td className="px-2 py-1">{c.grinder}</td>
              <td className="px-2 py-1">{c.grinderSetting}</td>
              <td className="px-2 py-1">{c.dose}</td>
              <td className="px-2 py-1">{c.output}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
