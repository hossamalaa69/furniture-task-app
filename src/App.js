
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home.jsx";
import ProductDetails from "./pages/ProductDetail/ProductDetail.jsx";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch> 
        <Route eaxct path="/details" component={ProductDetails} />
        <Route path="/" component={Home} />  
      </Switch>
    </Router>
  );
}

export default App;
