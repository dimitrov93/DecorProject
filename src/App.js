import { Advantages } from "./components/Advantages";
import { Asider } from "./components/Asider";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { Products } from "./components/Products";

function App() {
  return (
    <div>
      <div id="page">
        <Navigation />

        <Asider />

        <Advantages />

        <Products />


        <Footer />
      </div>
    </div>
  );
}

export default App;
