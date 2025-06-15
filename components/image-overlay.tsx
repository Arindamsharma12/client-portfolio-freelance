// components/ImageOverlay.tsx
import Image from "next/image";

interface ImageOverlayProps {
  src: string;
  alt: string;
  overlayText: string;
  className?: string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({
  src,
  alt,
  overlayText,
  className,
}) => {
  return (
    <div className={`relative ${className || ""}`}>
      {/* The Image component from Next.js for optimized images */}
      <Image
        src={src}
        alt={alt}
        layout="fill" // Makes the image fill the parent div
        objectFit="cover" // Ensures the image covers the area, cropping if necessary
        className="rounded-lg" // Example: Add some border-radius to the image
      />

      {/* The Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
        <p className="text-white text-center text-xl md:text-2xl font-bold p-4">
          {overlayText}
        </p>
      </div>
    </div>
  );
};

export default ImageOverlay;
