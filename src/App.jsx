import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import DigitalMarketing from './component/services/DigitalMarketing';
import WebDesigning from './component/services/WebDesigning';
import WebDevelopment from './component/services/WebDevelopment';
import AppDevelopment from './component/services/AppDevelopment';
import GraphicsDesigning from './component/services/GraphicsDesigning';
import VideoEditing from './component/services/VideoEditing';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/web-designing" element={<WebDesigning />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/app-development" element={<AppDevelopment />} />
      <Route path="/graphics-designing" element={<GraphicsDesigning />} />
      <Route path="/video-editing" element={<VideoEditing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<Aboutus />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
<Footer/>


    </>
  )
}

export default App
