import "./App.css";
import GalleryReact from "./GalleryReact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <GalleryReact />
      <Footer/>
    </div>
  );
}

export default App;
