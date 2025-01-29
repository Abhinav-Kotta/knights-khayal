import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get('featured') === 'true';
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '9');

  try {
    const videos = await prisma.video.findMany({
      where: {
        ...(featured ? { featured: true } : {}),
        ...(category ? { category } : {}),
      },
      orderBy: {
        date: 'desc',
      },
      take: limit,
    });

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}