import { neon } from '@neondatabase/serverless';
import { Filter } from 'bad-words';

export const revalidate = 60; // Cache for 60 seconds

const sql = neon(`${process.env.DATABASE_URL}`);

async function getCoffeeData() {
  return await sql`SELECT * FROM beanconqueror_export`;
}

export default async function Home() {

// Fetch coffee data
const coffeeData = await getCoffeeData();
const filter = new Filter();


  return (
    <main className="p-10">
      <h1>Omar Al Blooshi - Coffee Blog</h1>
      <div className="flex flex-wrap gap-6">
        {coffeeData.map((coffee, idx) => (
          <div
            key={coffee.id || idx}
            className="border rounded-lg shadow p-4 min-w-[300px] flex-1 bg-black"
          >
            {Object.entries(coffee).map(([key, value]) => (
              <div key={key} className="mb-2">
                <span className="font-semibold">{key}:</span>{" "}
                <span>{filter.clean(String((value)))}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}