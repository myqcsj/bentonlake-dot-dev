import Avatar from '@/ui/Avatar';
import NavBar from '@/ui/NavBar';
import NavItem from '@/ui/NavItem';
import BackgroundImage from '@/ui/BackgroundImage';
import SidePanel from '@/ui/SidePanel';

import { open_sans } from '@/lib/fonts';
import LocationDescriptionProvider from '@/ui/AnimationDescriptionProvider';

import me from '@/public/images/me.jpg';
import layered_waves_1 from '@/public/backgrounds/layered_waves_1.svg';

export const metadata = {
  description:
    'Benton Lake is an aspiring developer based in Northern Virginia. This is his personal, very cool, website.',
};

export default function SidePanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`w-screen h-screen relative ${open_sans.className}`}>
      <BackgroundImage src={layered_waves_1} alt="Pink and blue waves" />
      <div className="p-2 flex justify-center text-white">
        <LocationDescriptionProvider>
          <section className="flex flex-col gap-4 items-center">
            <Avatar src={me} alt="Benton Lake" size={288} priority />
            <h1 className="text-4xl text-center font-thin">Benton Lake</h1>
            <NavBar>
              <NavItem href="/about" innerText="About me" />
              <NavItem href="/goals" innerText="My goals" />
              <NavItem href="/experience" innerText="Work experience" />
              <NavItem href="/projects" innerText="Personal projects" />
              <NavItem href="/contributions" innerText="Contributions" />
            </NavBar>
          </section>
          {children}
        </LocationDescriptionProvider>
      </div>
    </div>
  );
}
