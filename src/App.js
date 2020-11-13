import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    const google = window.google;
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
