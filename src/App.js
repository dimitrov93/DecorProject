import { Link } from "react-router-dom";
import { Advantages } from "./Advantages";
import { Asider } from "./Asider";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { Products } from "./Products";

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
