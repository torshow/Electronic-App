import Header from './components/Header';
import Dispensercard from './components/DispenserCard';
import DispenserForm from './components/DispenserForm';
import DispenserList from './components/DispenserList';
import SearchBar from './components/SearchBar';
import {modernDispensers} from './data';
import { useState } from 'react';

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

          <main className="max-w-4xl mx-auto px-6">
              <div className="text-center py-10">
                 <p className="text-red-500 font-semibold">Best Service Ever</p>
                 <h2 className="text-3x1 font-bold my-2 text-gray-900">
                  Get your best modern Dispenser through us
                   </h2>
                 <p className="text-gray-600">
                    Connect with us Today for quality Dispensers
                 </p>
              </div>

          <DispenserForm addDispenser={addDispenser} />
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <DispenserList dispensers={filteredDispensers} />
          </main>

    </>

  )

}

export default App;