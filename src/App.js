import logo from "./logo.svg";
import "./App.css";
import Text from "./Text";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getContact } from "./store/action";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);
  console.log(data);
  useEffect(() => {
    dispatch(getContact());
  }, []);
  return (
    <div className="App">
      Redux
      <div>
        {data.data &&
          data.data.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.firstName}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
