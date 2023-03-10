import Image, { StaticImageData } from 'next/image';

export default function Avatar({
  src,
  alt,
  size,
  priority,
}: {
  src: StaticImageData;
  alt: string;
  size: number;
  priority?: boolean | undefined;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full"
      priority={priority}
    />
  );
}
