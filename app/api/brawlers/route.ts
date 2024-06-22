import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log(process.env.BRAWL_API_KEY);
    const response = await fetch('https://api.brawlstars.com/v1/brawlers', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.BRAWL_API_KEY}`,
      },
    });
    console.log(response);

    // レスポンスが成功かどうかを確認
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}