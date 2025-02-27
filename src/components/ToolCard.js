// components/ToolCard.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ToolCard = ({ tool, trackConversion }) => {
  const { id, title, description, link, trackingId, media, tags, featured } = tool;

  const renderMedia = (mediaItem, index) => {
    if (mediaItem.type === 'image') {
      return (
        <Image
          key={index}
          src={mediaItem.src}
          width={300}
          height={300}
          alt={mediaItem.alt}
          className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full"
          loading="lazy"
        />
      );
    } else if (mediaItem.type === 'video') {
      return (
        <video
          key={index}
          src={mediaItem.src}
          width={300}
          height={300}
          className="rounded-lg object-cover hover:scale-105 transition-transform duration-300 h-full"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {title}
        </video>
      );
    }
    return null;
  };

  const handleClick = () => {
    if (trackConversion && trackingId) {
      trackConversion(trackingId, 'card-footer', 'conversion');
    }
  };

  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-red-500">{title}</CardTitle>
          {featured && (
            <span className="px-2 py-1 bg-purple-600 text-xs font-semibold rounded-full">Featured</span>
          )}
        </div>
        <CardDescription className="text-gray-300 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
          <div className="grid grid-cols-2 gap-2 h-full">
            {media && media.length >= 2 && (
              <>
                {renderMedia(media[0], 0)}
                {renderMedia(media[1], 1)}
              </>
            )}
          </div>
        </div>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-white/10 rounded-full">{tag}</span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 rounded-md"
          onClick={handleClick}
        >
          <Link 
            href={link}
            className="w-full text-center" 
            prefetch={false}
          >
            Try {title} Now →
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;