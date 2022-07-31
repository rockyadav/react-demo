import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Faq from './components/pages/Faq';
import Help from './components/pages/Help';
import PageNotFound from './components/pages/PageNotFound';
import App from './App';
import './App.css';
import Product from './components/pages/Product';
const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index path="/" element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='faq' element={<Faq />} />
                <Route path='help' element={<Help />} />
                <Route path='products' element={<Product />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);