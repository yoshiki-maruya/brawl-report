'use client';
import useSWR from "swr";
import { Brawlers } from "@/entities/brawlers";

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
  const id = '%23QGGYLLYY';
  if (error) return <div> Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.items.map((item: Brawlers) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </main>
  );
}
