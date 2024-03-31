import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./Components/heading";
import DisplayCounter from "./Components/DisplayCounter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./Components/PrivacyMessage";

function App() {
  const [count, setCount] = useState(0);

  const privacy = useSelector(store=>store.privacy);

  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Heading></Heading>
          <div className="col-lg-6 mx-auto">
            {privacy?<PrivacyMessage/>:<DisplayCounter/>}
            <Controls></Controls>
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
