"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ImageRotatorProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number; // milliseconds
  className?: string;
}

export function ImageRotator({ 
  images, 
  interval = 3000, 
  className 
}: ImageRotatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    // Skip the effect if there are no images
    if (images.length === 0) return;
    
    // Set up rotation timer
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    
    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [images, interval]);
  
  // Don't render anything if there are no images
  if (images.length === 0) return null;
  
  return (
    <div 
      className={cn(
        "relative w-full aspect-square rounded-md overflow-hidden", 
        className
      )}
    >
      {/* Stack all images on top of each other */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transform: `scale(${index === currentIndex ? 1 : 0.95}) 
                       rotate(${index === currentIndex ? 0 : -5}deg)`,
            zIndex: index === currentIndex ? 10 : 0,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
          
          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-white font-medium text-lg">{image.alt}</p>
          </div>
        </div>
      ))}
      
      {/* Indicator dots */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
} 