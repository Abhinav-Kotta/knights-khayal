// components/AdminVideoInterface/VideoForm.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Video } from '@/types';

interface VideoFormProps {
  initialData?: Video;
  onSubmit: (data: VideoFormData) => void;
  onCancel: () => void;
}

interface VideoFormData {
  title: string;
  description: string;
  driveUrl: string;
  category: string;
  date: string;
  featured: boolean;
}

export function VideoForm({ initialData, onSubmit, onCancel }: VideoFormProps) {
  const [formData, setFormData] = useState<VideoFormData>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    driveUrl: initialData?.driveUrl || '',
    category: initialData?.category || 'Performance',
    date: initialData?.date ? new Date(initialData.date).toISOString().split('T')[0] : '',
    featured: initialData?.featured || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="driveUrl">Google Drive URL</Label>
        <Input
          id="driveUrl"
          value={formData.driveUrl}
          onChange={(e) => setFormData({ ...formData, driveUrl: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select
          id="category"
          className="w-full border rounded-md p-2"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="Performance">Performance</option>
          <option value="Practice">Practice</option>
          <option value="BehindTheScenes">Behind The Scenes</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="featured"
          checked={formData.featured}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, featured: checked as boolean })
          }
        />
        <Label htmlFor="featured">Featured Video</Label>
      </div>

      <div className="flex space-x-2 pt-4">
        <Button type="submit">
          {initialData ? 'Update Video' : 'Add Video'}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}