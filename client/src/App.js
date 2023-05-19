import './App.css';

import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Contact from './Contact';
import MemberLogin from './Member Login';
import Team from './Team';


import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <div className="App">
        <Navbar />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<MemberLogin />} />
            <Route path="/team" element={<Team />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
