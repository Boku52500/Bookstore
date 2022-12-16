import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Home';
import Books from './components/pages/Books';
import Catigoties from './components/pages/Categories';

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
