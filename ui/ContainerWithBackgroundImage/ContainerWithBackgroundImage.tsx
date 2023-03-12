import BackgroundImage from '@/ui/BackgroundImage';
import { StaticImageData } from 'next/image';

export default function ContainerWithBackgroundImage({
  children,
  src,
  className,
}: {
  children: React.ReactNode;
  src: StaticImageData;
  className?: string;
}) {
  return (
    <div className={`w-screen h-screen relative ${className}`}>
      <BackgroundImage src={src} alt="Background image" />
      {children}
    </div>
  );
}
