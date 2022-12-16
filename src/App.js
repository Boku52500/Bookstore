import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Catigoties from './components/Catigories';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Catigoties />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
