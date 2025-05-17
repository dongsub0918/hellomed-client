import React from "react";

interface LocationCardProps {
  name: string;
  imageUrl: string;
  mapUrl: string;
  alt: string;
}

export default function LocationCard({
  name,
  imageUrl,
  mapUrl,
  alt,
}: LocationCardProps) {
  const isTelemedicine = name === "Telemedicine";

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img src={imageUrl} alt={alt} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-100 md:opacity-0 md:hover:opacity-100 md:transition-opacity md:duration-300">
          {isTelemedicine ? (
            <a
              href="urgent-care/telemedicine/"
              className="bg-white text-black py-2 px-4 rounded"
            >
              More information
            </a>
          ) : (
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-4 rounded"
            >
              View on Google Maps
            </a>
          )}
        </div>
      </div>
      <div className="py-3 text-center">
        <div className="font-bold text-2xl">{name}</div>
      </div>
    </div>
  );
}
