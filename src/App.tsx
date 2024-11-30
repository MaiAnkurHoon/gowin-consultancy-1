
import "./App.css";
import AboutUs from "./components/about-us";
import Landings from "./components/landing";
import MainNavbar from "./components/root-navbar";
import RatePlans from "./components/rate-plans";
import RequestForm from "./components/request-form";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <div>
        <div className="bg-teal-950">
          <div className="relative h-[90vh] md:ml-20 md:mr-20 ml-3 mr-3 text-white ">
            <div>Email:info@example&#x2e;com</div>
            <MainNavbar />
            <Landings/>
          </div>
        </div>
        <div className="md:ml-20 md:mr-20 ml-3 mr-3">
          <AboutUs/>
        </div>
        <div className="w-full bg-teal-950">
          <RequestForm/>
        </div>
        <div className="w-full bg-teal-50">
          <RatePlans/>
        </div>
        

        
        <Footer/>

      </div>
    </>
  );
}

export default App;
