import CodeLine from '@/ui/CodeLine';

export const metadata = {
  title: '<BentonLake /> | Developer-in-Training',
};

export default function Home() {
  return (
    <>
      <CodeLine>{'<nav>'}</CodeLine>
      <CodeLine important component>
        Story
      </CodeLine>
      <CodeLine important component>
        Wisdom
      </CodeLine>
      <CodeLine important component>
        Creations
      </CodeLine>
      <CodeLine important component>
        Message
      </CodeLine>
      <CodeLine>{'</nav>'}</CodeLine>
    </>
  );
}
