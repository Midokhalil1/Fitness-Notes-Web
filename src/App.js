import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes';
import Home from './pages/Home'
import './assets/Styles.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
 <Header />

 
 <Routes>
<Route path='/' element={<Home />} />
<Route path='/Notes' element={<Notes />} />

 </Routes>
 <Footer />
 </BrowserRouter>
  );
}

export default App;
