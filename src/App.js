import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddNew from './pages/AddNew';
import Home from './pages/Home';
import './assets/Styles.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
 <Header />
 <Routes>
<Route path='/' element={<Home />} />
<Route path='/Add-new' element={<AddNew />} />

 </Routes>
 <Footer />
 </BrowserRouter>
  );
}

export default App;
