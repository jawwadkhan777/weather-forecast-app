import "./App.scss";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Review from "./containers/review/Review";
import About from "./containers/about/About";
import WheatherHub from "./containers/wheaterHub/WheatherHub";
import Footer from "./components/footer/Footer";

function App() {
  
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<WheatherHub/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/review" element={<Review/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
