import { neon } from '@neondatabase/serverless';

const sql = neon(`${process.env.DATABASE_URL}`);

export async function getExampleData() {
  return await sql`SELECT * FROM playing_with_neon LIMIT 10;`;
}

export default async function Home() {

// Fetch example data
const exampleData = await getExampleData();


return (
  <div className="max-w-3xl mx-auto p-6">
    <h1 className="text-2xl font-bold mb-4">Example Data</h1>
    <table className="min-w-full bg-white border shadow">
      <thead>
        <tr>
          <th className="px-2 py-1">ID</th>
          <th className="px-2 py-1">Name</th>
          <th className="px-2 py-1">Value</th>
        </tr>
      </thead>
      <tbody>
        {exampleData.map((item) => (
          <tr key={item.id} className="even:bg-gray-50">
            <td className="px-2 py-1">{item.id}</td>
            <td className="px-2 py-1">{item.name}</td>
            <td className="px-2 py-1">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}