import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Video {
  id: string;
  title: string;
  description: string;
  driveUrl: string;
  category: string;
  date: string;
  featured: boolean;
}

interface VideoGridProps {
  featured?: boolean;
  category?: string;
  initialLimit?: number;
}

function getGoogleDriveEmbedUrl(url: string): string {
  let fileId = '';
  
  if (url.includes('drive.google.com/file/d/')) {
    fileId = url.split('/file/d/')[1].split('/')[0];
  } else if (url.includes('drive.google.com/open?id=')) {
    fileId = url.split('open?id=')[1];
  }
  
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

export function VideoGrid({ featured, category, initialLimit = 6 }: VideoGridProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    const fetchVideos = async () => {
      const params = new URLSearchParams();
      if (featured) params.append('featured', 'true');
      if (category) params.append('category', category);
      params.append('limit', limit.toString());

      try {
        const response = await fetch(`/api/videos?${params}`);
        if (!response.ok) throw new Error('Failed to fetch videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, [featured, category, limit]);

  if (isLoading) return <div>Loading videos...</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">{video.title}</CardTitle>
              <p className="text-sm text-gray-500">
                {new Date(video.date).toLocaleDateString()}
              </p>
            </CardHeader>
            <CardContent>
              <div className="aspect-video mb-4">
                <iframe
                  src={getGoogleDriveEmbedUrl(video.driveUrl)}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-gray-600">{video.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {videos.length >= limit && (
        <div className="text-center">
          <Button 
            onClick={() => setLimit(prev => prev + 6)}
            variant="outline"
            className="mt-4"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}