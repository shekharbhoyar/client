import { useEffect, useState } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tabledata, setTabledata] = useState("");
  const [currentpage, setCurrentpage] = useState(1);
  const [rowsPerPage, setrowsPerPage] = useState(10);
  const indexoflastitem = currentpage * rowsPerPage;
  const indexoffirstitem = indexoflastitem - rowsPerPage;
  const currentItems = tabledata?.users?.slice(
    indexoffirstitem,
    indexoflastitem
  );
  const totalpages = Math.ceil(tabledata?.total / rowsPerPage);
  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=0").then((res) => {
      console.log(res);
      setTabledata(res?.data);
    });
  }, []);

  return (
    <>
      <div>Pagination </div>
    </>
  );
}

export default App;
