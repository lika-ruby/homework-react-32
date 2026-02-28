import "./App.css";
import { Hero } from "./components/Hero/Hero.jsx";
import { ContactList } from "./components/ContactList/ContactList.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { GlobalStyle } from "./GlobalStyles.js";
import { Main } from "./App.js";

export const App = () => {
  return (
    <Main className="App">
      <GlobalStyle />
      <Hero />
      <ContactList />
      <Footer />
    </Main>
  );
};

export default App;
