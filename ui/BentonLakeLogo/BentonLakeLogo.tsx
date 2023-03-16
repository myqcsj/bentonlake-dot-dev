import { major_mono_display, source_code_pro } from '@/lib/fonts';

export default function BentonLakeLogo() {
  return (
    <div className="flex items-center text-white gap-1.5">
      <p className={`${source_code_pro} text-2xl text-violet-800 font-bold`}>
        {'<'}
      </p>
      <p className={`${major_mono_display.className} text-4xl`}>
        <span className="font-semibold">{'BeNToNLAKe'}</span>
        <span className="font-thin">{'.dev'}</span>
      </p>
      <p className={`${source_code_pro} text-2xl text-violet-800 font-bold`}>
        {'/>'}
      </p>
    </div>
  );
}
