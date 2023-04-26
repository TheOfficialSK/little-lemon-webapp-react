import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './components/colorSheet.css';
function App() {
  return (
    <>
        <head>
            <title>Little Lemon restaurant</title>
            <meta name="description" content="A family owned, traditional Italian Restaurant."/>
            <meta name="og:title" content="Little Lemon Restaurant"/>
            <meta name="og:description" content="Little Lemon is an Italian resturaunt that serves famous italian dishes with an original twist."/>
            <meta name="og:image" content="./assets/Logo.svg"/>
        </head>
      <Header className={"header"}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
