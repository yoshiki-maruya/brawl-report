'use client';
import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const fetcher = async (url: string) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const json = await res.json();
    return json;
  }

  const { data, error } = useSWR('/api/brawlers', fetcher);
  if (error) return <div> Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </main>
  );
}
