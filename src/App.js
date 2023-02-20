import Accordion from './components/Accordion';

const App = () => {
  const items = [
    {
      id: 1,
      label: 'What frontend frameworks are popular?',
      content: 'React and Redux are popular frontend frameworks.',
    },
    {
      id: 2,
      label: 'What backend frameworks are popular?',
      content: 'Express and Sequelize are popular backend frameworks.',
    },
    {
      id: 3,
      label: 'What frameworks should I learn next?',
      content: 'TypeScript and Next.js both sound like good ideas.',
    },
  ];
  return <Accordion items={items} />;
};

export default App;
