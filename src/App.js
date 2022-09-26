import {Route, Routes} from "react-router-dom";

import './App.css'

import Home from "./components/Home/Home";
import About from "./components/About/About";
import AboutDoctor from "./components/AboutDoctor/AboutDoctor";
import News from "./components/News/News";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Doctors from "./components/Doctors/Doctors";
import Service from "./components/Service/Service";
import Services from "./components/Services/Services";
import Navbar from "./components/UsableComponents/Navbar/Navbar";
import Footer from "./components/UsableComponents/Footer/Footer";
import TopNavbar from "./components/UsableComponents/TopNavbar/TopNavbar";
import Operation from "./components/Operation/Operation";

function App() {
    return (<>
              <TopNavbar/>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/aboutdoctor' element={<AboutDoctor/>}/>
                  <Route path='/operation' element={<Operation/>}/>
                  <Route path='/news' element={<News/>}/>
                  <Route path='/blog' element={<Blog/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/doctors' element={<Doctors/>}/>
                  <Route path='/service' element={<Service/>}/>
                  <Route path='/services' element={<Services/>}/>
              </Routes>
              {/*<Footer/>*/}
          </>
    );
}

export default App;
