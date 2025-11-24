import { useState } from 'react';
import { CORE_CONCEPTS } from './data';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

function App() {

  const [selectedTopic, setSelectedTopic] = useState('');

  let tabContent = <p>Please select a topic to see an example.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="menu-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log('selectedTopic:', selectedTopic);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title}{...conceptItem} />))}
          </ul>
        </section>
        <section id="examples">
         <menu>
            <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>
        </section>
        <section>
         {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
