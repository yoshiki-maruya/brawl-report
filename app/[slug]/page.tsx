'use client';
import useSWR from "swr";

export default function Player({
  params
}: {
  params: { slug: string }
}) {
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

  const { data, error } = useSWR(params.slug ? `/api/players/${params.slug}` : "", fetcher);
  if (error) return <div> Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{data.name}</div>
    </main>
  );
}