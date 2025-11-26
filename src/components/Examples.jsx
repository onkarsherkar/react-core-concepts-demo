
import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Section from './Section';

export default function Examples() {

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
        <Section title="Examples" id="examples">
            <menu>
                <TabButton onClick={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
                <TabButton onClick={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onClick={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
            </menu>
         {tabContent}
        </Section>
    );
}