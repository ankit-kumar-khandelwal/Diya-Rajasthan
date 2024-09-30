import { Section1 } from "./components/component/body-section1";
import { Section2 } from "./components/component/body-section2";
import { DiyaCollective } from "./components/component/diya-collective";
import { Experience } from "./components/component/experience";
import Footer from "./components/component/footer";
import { Navbar } from "./components/component/navbar";
import { Statistics } from "./components/component/statistics";
// import'./bg.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <Section1 />
        <Section2 />
        <Statistics/> 
        <Experience/>
        <DiyaCollective/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
