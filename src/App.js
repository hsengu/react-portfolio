import React, { useState } from "react";
import Navbar from './components/Navbar';
import Scripts from './components/Scripts';
import Contact from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <>
      <Navbar contactSelected={contactSelected} setContactSelected={setContactSelected} />
      <main className="App">
        { contactSelected && <Contact /> }
      </main>
      <Scripts />
    </>
  );
}

export default App;
