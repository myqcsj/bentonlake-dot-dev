import { major_mono_display } from '@/lib/fonts';

export default function BentonLakeLogo() {
  return (
    <div className="flex items-center text-white">
      <p className={`${major_mono_display.className} text-2xl text-violet-800`}>
        {'<'}
      </p>
      <p className={`${major_mono_display.className} text-4xl`}>
        <span className="font-semibold">{'BeNToNLAKe'}</span>
        <span className="font-thin">{'.dev'}</span>
      </p>
      <p className={`${major_mono_display.className} text-2xl text-violet-800`}>
        {'/>'}
      </p>
    </div>
  );
}
