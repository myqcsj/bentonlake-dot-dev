import Image, { StaticImageData } from 'next/image';

export default function BackgroundImage({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover object-center -z-10 ${className}`}
      priority
    />
  );
}
