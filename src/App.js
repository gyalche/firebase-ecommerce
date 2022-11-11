import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Footer } from './components/index';
import { Home, Contact } from './pages/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
