import { major_mono_display } from '@/lib/fonts';

export default function BentonLakeLogo() {
  return (
    <div
      className={`flex items-center text-white ${major_mono_display.className}`}
    >
      <p className="text-2xl text-violet-800">{'<'}</p>
      <p className="text-4xl">
        <span className="font-semibold">{'BeNToNLAKe'}</span>
        <span className="font-thin">{'.dev'}</span>
      </p>
      <p className="text-2xl text-violet-800">{'/>'}</p>
    </div>
  );
}
