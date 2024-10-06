import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Footer } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="max-w-8xl mx-auto pt-20 px-6">
      <Hero/>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
