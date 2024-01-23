import Header from "./components/Header";
import Article from "./components/Article";
import Question_list from "./components/Question_list";
import Features from "./components/Features";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOPen] = useState(false);

  const handleLogoMenuClick = () => {
    setMenuOPen(!menuOpen);
  };

  return (
    <main className="contenedor_principal min-h-screen relative ">
      <div className="mx-auto p-5 xl:px-36 xl:py-14 lg:px-10">
        <Header menuOpen={menuOpen} handleLogoMenuClick={handleLogoMenuClick} />
        <section className="cont_section flex flex-col lg:flex-row  space-y-7 lg:space-x-7 lg:space-y-0">
          <Article />
          <Question_list />
        </section>
        <Features />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gray-500 opacity-55  ${menuOpen ? "flex" : "hidden"} `}
      ></div>
    </main>
  );
}

export default App;
