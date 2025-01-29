// app/api/videos/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get('featured') === 'true';
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '6', 10);

  try {
    const videos = await prisma.video.findMany({
      where: {
        featured,
        category: category ? category : undefined,
      },
      take: limit,
      orderBy: {
        date: 'desc',
      },
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}