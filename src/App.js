import "./App.css";
import { Header, Footer, Intro, Service, Options, Gadget } from "./components";

function App() {
  return (
    <>
      <div className="lg:max-w-[1300px] mx-auto">
        <Header />
      </div>
      <main>
        <div className="lg:max-w-[1300px] mx-auto">
          <Intro />
          <Service />
        </div>
        <Options />
        <div className="lg:max-w-[1300px] mx-auto">
          <Gadget />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
