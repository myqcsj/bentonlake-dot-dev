import CodeLine from '@/ui/CodeLine';

export const metadata = {
  title: '<BentonLake /> | Developer-in-Training',
};

export default function Home() {
  return (
    <>
      {/**
       * <BentonLake />
       * <BreadCrumbs />
       * <nav>
       * <Work>...</Work>
       * <Lab>...</Lab>
       * <About>...</About>
       * <Contact>...</Contact>
       * </nav>
       */}
      <CodeLine type="nav" importance={0}>
        {'<nav>'}
      </CodeLine>
      <CodeLine type="component" importance={2}>
        {'<Work />'}
      </CodeLine>
      <CodeLine type="component" importance={2}>
        {'<Lab />'}
      </CodeLine>
      <CodeLine type="component" importance={2}>
        {'<About />'}
      </CodeLine>
      <CodeLine type="component" importance={2}>
        {'<Contact />'}
      </CodeLine>
      <CodeLine type="nav" importance={0}>
        {'</nav>'}
      </CodeLine>
    </>
  );
}
