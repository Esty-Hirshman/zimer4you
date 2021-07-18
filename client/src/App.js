import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./componants/Home/Home.js";
import Header from "./componants/Header/Header.js";
import ZimerList from "./componants/ZimerList/ZimerList";
import ShowZimer from "./componants/ShowZimer/ShowZimer";
import Footer from "./componants/Footer/Footer";
import About from "./componants/About/About";
import AddZimer from "./componants/AddZimer/AddZimer";
import Questions from "./componants/Questions/Questions";
import ShowOrders from "./componants/Header/ShowOrders/ShowOrders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DemoChat from "./componants/DemoChat/DemoChat";
import Error404 from "./componants/Error404/Error404";
function App() {
  const [isLoveChange, setisLoveChange] = useState(0);
  const [isAddZimer, setisAddZimer] = useState(0);
  const [userUpdate, setUserUpdate] = useState(false);
  const [userNow, setUserNow] = useState(null);
  const [updateZimers, setUpdateZimers] = useState(false);

  useEffect(() => {
    if (!("user" in window.localStorage)) localStorage.user = "null";
    if (!("statuse" in window.localStorage)) localStorage.statuse = "null";
    if (!("owner" in window.localStorage)) localStorage.owner = "null";
  }, []);
  
  useEffect(() => {
    if (localStorage.user === "null") setUserNow(null);
    else setUserNow(JSON.parse(localStorage.user));
  }, [userUpdate]);

  const changeUser = (newUser) => {
    setUserNow(newUser);
    if(newUser === "null") return
    localStorage.setItem("user", JSON.stringify(newUser));
  };
  const changeOwner = (newOwner) => {
    localStorage.setItem("owner", JSON.stringify(newOwner));
  };
  return (
    <div className="App">
      <Header
        onUpdateZimers={() => setUpdateZimers(!updateZimers)}
        onChange={setisLoveChange}
        num={isLoveChange}
        onUpdate={() => setUserUpdate(!userUpdate)}
        onUpdate={changeUser}
        changeOwner={changeOwner}
        user={userNow}
      />
      <div>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/ZimerList">
            <ZimerList
              updateZimers={updateZimers}
              isLoveChange={isLoveChange}
              onChange={setisLoveChange}
              isAddZimer={isAddZimer}
              onUpdate={changeUser}
              user={userNow}
            />
          </Route>
          <Route path="/ShowZimer/:id">
            <ShowZimer onUpdate={changeUser} userNow={userNow}></ShowZimer>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Questions">
            <Questions />
          </Route>
          <Route path="/AddZimer">
            <AddZimer isAddZimer={isAddZimer} onChange={setisAddZimer} />
          </Route>
          <Route path="/ShowOrders">
            <ShowOrders />
          </Route>
          <Route >
            <Error404 />
          </Route>
        </Switch>
      </div>
      <div>
        <DemoChat />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
