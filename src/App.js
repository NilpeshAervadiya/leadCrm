import "./App.css";
import DailyChallenges from "./components/DailyChallenges/DailyChallenges";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowItWork from "./components/HowItWork/HowItWork";
import Rating from "./components/Rating/Rating";
import SalesSolution from "./components/SalesSolution/SalesSolution";
import Slider from "./components/Slider/Slider";
import Support from "./components/Support/Support";
import UseCrm from "./components/UseCrm/UseCrm";

// const backgroundLinesImageStyle = {
//   backgroundImage: "url(/images/lines.png)",
// };

function App() {
  return (
    <>
      {/* <div style={backgroundLinesImageStyle} className="herolinebackground"> */}
      <Header />
      <Hero />
      <Slider />
      <DailyChallenges />
      <HowItWork />
      <Rating />
      <SalesSolution />
      <Support />
      <UseCrm />
      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
