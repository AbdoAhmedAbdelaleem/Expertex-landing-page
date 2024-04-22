import "./App.css";
import FirstScreenSh from "./component/FirstScreenSh";
import Footer from "./component/Footer";
import SecondScreenSh from "./component/SecondScreenSh";
import LandingPage from "./component/landingPage"

function App() {
  return (
    <div className="App">
      <LandingPage />
      <FirstScreenSh />
      <SecondScreenSh />
      <Footer/>
    </div>
  );
}

export default App;
