import Link from 'next/link';

import PageSection from '@/ui/PageSection';
import Avatar from '@/ui/Avatar';
import Socials from '@/ui/Socials';
import NavColumn from '@/ui/NavColumn';
import NavItem from '@/ui/NavItem';

import me from '@/public/images/me.jpg';
import home from '@/public/icons/home.svg';
import work from '@/public/icons/work.svg';
import lab from '@/public/icons/lab.svg';
import profile from '@/public/icons/profile.svg';
import contact from '@/public/icons/contact.svg';

export default function NavCard() {
  return (
    <PageSection className="flex flex-col gap-4 p-8 w-48">
      <div>
        <Avatar
          src={me}
          alt="Headshot of Benton Lake"
          size={65}
          priority
          className="mb-1"
        />
        <h1 className="text-base font-bold text-gray-800">Benton Lake</h1>
        <h2 className="text-gray-400 text-xs font-semibold">Web Developer</h2>
      </div>
      <Socials />
      <NavColumn>
        <NavItem href="/" iconSrc={home} name="Home" />
        <NavItem href="/work" iconSrc={work} name="Work" />
        <NavItem href="/lab" iconSrc={lab} name="Lab" />
        <NavItem href="/about" iconSrc={profile} name="About" />
        <NavItem href="/contact" iconSrc={contact} name="Contact" />
      </NavColumn>
    </PageSection>
  );
}
