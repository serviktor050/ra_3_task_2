//import logo from "./logo.svg";
import "./App.css";
import etsy from "./data/etsy.json";
import Listing from "./components/Listing.jsx";

function App() {
  const data = etsy;

  return (
    <Listing data={data} />
  )
}

export default App;
