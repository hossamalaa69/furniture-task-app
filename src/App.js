
import HomePreview from "./components/homePreviewComponent/HomePreview";
import Navbar from "./components/navbarComponent/Navbar";
import Products from "./components/productsComponent/Products";

function App() {
  return (
    <div className="App">
        <Navbar />
        <HomePreview />
        <Products />
    </div>
  );
}

export default App;
