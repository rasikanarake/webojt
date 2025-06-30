import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage";
import AdmissionsPage from "./components/pages/AdmissionsPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import CoursesPage from "./components/pages/CoursesPage";
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    
    <Router>
      <div className="main-layout">
        <Header/>
        <div className="content">
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/AboutPage' element={<AboutPage/>}></Route> 
            <Route path='/AdmissionsPage' element={<AdmissionsPage/>}></Route>
            <Route path='/ContactPage' element={<ContactPage/>}></Route>
            <Route path='/CoursesPage' element={<CoursesPage/>}></Route> 
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;