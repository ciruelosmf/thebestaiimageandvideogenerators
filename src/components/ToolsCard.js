// components/SimpleToolCard.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const SimpleToolCard = ({ tool, handleLinkClick }) => {
  const { title, description, link, trackingId, media } = tool;

  const renderMedia = (mediaItem, index) => {
    if (mediaItem.type === 'image') {
      return (
        <Image
          key={index}
          src={mediaItem.src}
          width={140}
          height={140}
          alt={mediaItem.alt}
          className="aspect-square object-cover shadow-lg"
          loading="lazy"
        />
      );
    } else if (mediaItem.type === 'video') {
      return (
        <video
          key={index}
          src={mediaItem.src}
          width={140}
          height={140}
          className="aspect-square object-cover shadow-lg"
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

  return (
    <Link onClick={() => handleLinkClick(trackingId)} href={link} className="block" prefetch={false}>
      <Card className="">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {media && media.length >= 2 && (
              <>
                {renderMedia(media[0], 0)}
                {renderMedia(media[1], 1)}
              </>
            )}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </Link>
  );
};

export default SimpleToolCard;