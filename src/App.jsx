import Header from './components/Header';
import Dispensercard from './components/DispenserCard';
import DispenserForm from './components/DispenserForm';
import DispenserList from './components/DispenserList';
import SearchBar from './components/SearchBar';
import {modernDispensers} from './data';
import { useState } from 'react';
import './index.css'
import './App.css'


function App () {
  const [dispensers, setDispensers] = useState(modernDispensers);
  const [searchTerm, setSearchTerm] = useState('');

  //add dispenser fuctionality
  function addDispenser(newDispenser) {
    setDispensers((currentDispensers) => [
      {...newDispenser, id:Date.now()},
      ...currentDispensers
    ])
  }

  //add search fuctionality
  const filteredDispensers = dispensers.filter((dispenser) => {
    const searchableText = `${dispenser.name} ${dispenser.type}`.toLowerCase();
    return searchableText.includes(searchTerm.toLowerCase());
  });

  return (
    <>
    <Header/>
    <main className='page-container'>
      <div>
        <p>Best Service Ever</p>
        <h2>Get your best modern Dispenser through us </h2>
        <p>
          Connect with us Today for quality Dispensers
        </p>
      </div>
    </main>

    <DispenserForm addDispenser={addDispenser}/>
    <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm}/>
    <DispenserList dispensers={filteredDispensers}/>
    </>
  )
}

export default App;