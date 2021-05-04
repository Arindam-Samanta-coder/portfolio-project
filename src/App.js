
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar.js"
import Header from "./components/Header.js"
import Particles from "react-particles-js"
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <>
    <Particles
      params={{
        particles:{
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "star",
            stroke: {
              width: 8,
              color: "#ef4035"
            }
          }
        }
      }}
    />
    <Navbar />
    <Header />
    <AboutMe />
   
    </>
  );
}

export default App;
