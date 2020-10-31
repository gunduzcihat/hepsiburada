import { Switch, Route } from "react-router-dom";
import "./assets/styles/App.css";
import AddLink from "./AddLink";
import Home from "./Home";
import { useState } from "react";

function App() {
  const persistData = JSON.parse(localStorage.getItem("store")) || [];
  const data = persistData ? persistData : [];
  const [state, setstate] = useState(0);

  const saveData = (props) => {
    data.push(props);
    localStorage.setItem("store", JSON.stringify(data));

  };

  const updateData = (index, math) => {
    if (persistData) {
      math === "+"
        ? (persistData[index].itemCount += 1)
        : (persistData[index].itemCount -= 1);
      localStorage.setItem("store", JSON.stringify(persistData));
      setstate(state + 1);
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home data={data} updateData={updateData} />}
        />
        <Route
          exact
          path="/AddLink"
          render={(props) => <AddLink {...props} saveData={saveData} />}
        />
      </Switch>
    </div>
  );
}

export default App;
