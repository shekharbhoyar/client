import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tabledata, setTabledata] = useState("");
  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      console.log(response);
    });
  });

  return <></>;
}

export default App;
