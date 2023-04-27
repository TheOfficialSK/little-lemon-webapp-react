import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './components/styles/colorSheet.css';
function App() {
  return (
    <>
      <Header className={"header"}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
