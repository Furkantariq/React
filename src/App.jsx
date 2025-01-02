
import CoreConcept from '../components/CoreConcepts';
import Header from '../components/Header/Header'
import CoreConcepts from '../components/CoreConcepts';
import { CORE_CONCEPTS } from './data';
import TabButton from '../components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';





function App() {
  const [selectedTopic, setSelectedTopic ]=useState()
  let tabContent = <p>Please Select a topic</p>
  if(selectedTopic){
     tabContent = <div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>

  </div>
  }
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton)
}
  return (
    <div>
      <Header/>
     
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>
               <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          
          </ul>

        </section> 
        <section id='examples'>
          <h2>
            Examples
          </h2>
         <menu>
         <TabButton isSelected ={selectedTopic ==='components'} onSelect={()=>handleClick('components')}>Components</TabButton>
          <TabButton  isSelected ={selectedTopic ==='jsx'} onSelect={()=>handleClick('jsx')}>Jsx</TabButton>
          <TabButton isSelected ={selectedTopic ==='props'} onSelect={()=>handleClick('props')}>Props</TabButton>
          <TabButton isSelected ={selectedTopic ==='state'} onSelect={()=>handleClick('state')}>State</TabButton>

         </menu>
         

        </section>
        {selectedTopic}
        {tabContent}
       
      </main>
    </div>
  );
}

export default App;
