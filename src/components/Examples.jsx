
import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';

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
        <section id="examples">
            <menu>
                <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
            </menu>
         {tabContent}
        </section>
    );
}