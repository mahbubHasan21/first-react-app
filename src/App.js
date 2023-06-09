import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
};

export default App;
