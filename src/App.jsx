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

  const handleprev = () => {
    setCurrentpage((prev) => Math.max(prev - 1, 1));
  };
  const handlenext = () => {
    setCurrentpage((prev) => Math.min(prev + 1, totalpages));
  };
  const handlepagenumber = (pagenumber) => {
    setCurrentpage(pagenumber);
  };
  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>GENDER</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((ele, i) => (
              <tr key={i}>
                <td>{ele.firstName}</td>
                <td>{ele.email}</td>
                <td>{ele.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={handleprev} disabled={currentpage === 1}>
            Prev
          </button>
          {Array.from({ length: totalpages }, (_, index) => {
            return (
              <button
                key={index}
                onClick={() => handlepagenumber(index + 1)}
                className={currentpage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            );
          })}
          <button onClick={handlenext} disabled={currentpage === totalpages}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
