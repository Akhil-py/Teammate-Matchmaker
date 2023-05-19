import './App.css';

import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./Navbar/AboutUs";
import Contact from './Navbar/Contact';
import MemberLogin from './Member_Login';
import Team from './Navbar/Team';
import Profile from './Navbar/Profile';
import Register from './Register';
import MemberLanding from './Member_Landing';

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
            <Route path="/register" element={<Register />} />
            <Route path="/memberlanding" element={<MemberLanding />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
