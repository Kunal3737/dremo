import Header from "./components/Header";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Affiliations from "./pages/Affiliations";
import Enquiry from "./pages/Enquiry";
import Suppliers from "./pages/Suppliers";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/affiliations" component={Affiliations} />
      <Route exact path="/enquiry" component={Enquiry} />
      <Route exact path="/suppliers" component={Suppliers} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/contactus" component={ContactUs} />
    </>
  );
}

export default App;
