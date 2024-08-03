import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Header from './component/header/Header';
import Faq from './pages/Faq';
import WhitePaper from './pages/WhitePaper';
import LandingPage from './pages/landingPage';
import Tokenomics from './pages/Tokenomics';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes> 
      <Route path='/' element={<LandingPage/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/Whitepaper" element={<WhitePaper/>}/>
      <Route path="/tokenomics" element={<Tokenomics/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
