// src/pages/Home.tsx
import { useState } from "react";

interface Person {
  id: string;
  Name: string;
}

export default function Home() {
  const [people, setPeople] = useState<Person[]>([]);
  const [error, setError] = useState<string>();

  const list = async () => {
    try {
      const query = `
        {
          people {
            items {
              id
              Name
            }
          }
        }
      `;
      const res = await fetch("/data-api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.errors) {
        throw new Error(json.errors.map((e: any) => e.message).join("; "));
      }
      setPeople(json.data.people.items);
      setError(undefined);
    } catch (e: any) {
      console.error(e);
      setError(e.message);
    }
  };

  return (
    <div className="p-4">
      {/* Jouw bestaande header */}
      <h1 className="text-2xl font-semibold">Home Page</h1>
      <p>Welcome to our homepage!</p>

      {/* Nieuwe knop om data op te halen */}
      <button
        onClick={list}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        List People
      </button>

      {/* Foutmelding */}
      {error && (
        <div className="mt-2 text-red-600">
          Error fetching data: {error}
        </div>
      )}

      {/* Tabel met opgehaalde data */}
      {people.length > 0 && (
        <table className="mt-4 min-w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Name</th>
            </tr>
          </thead>
          <tbody>
            {people.map((p) => (
              <tr key={p.id}>
                <td className="border px-2 py-1">{p.id}</td>
                <td className="border px-2 py-1">{p.Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
