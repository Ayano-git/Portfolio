import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<About />}/>
        <Route path='/mirium-mixtis' element={<About />}/>
        <Route path='/wicked-shop' element={<About />}/>
        <Route path='/grind-together' element={<About />}/>
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
