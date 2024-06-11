import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const param = encodeURIComponent(params.slug);
    const response = await fetch(`https://api.brawlstars.com/v1/players/${param}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.BRAWL_API_KEY}`,
      },
    });

    // レスポンスが成功かどうかを確認
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Error fetching data!!!:', error);
    return NextResponse.json({ error: "Internal Server Error!" }, { status: 500 });
  }
}