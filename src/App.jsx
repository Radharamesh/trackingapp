import React, {useState, useEffect} from "react";
import Header from "./components/organisms/Header";
import Homepage from "./components/templates/Homepage";
import Aboutpage from "./components/templates/Aboutpage";
import Parcelspage from "./components/templates/Parcelspage";
import "./css/style.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 



export default function App() {

  const [status, setStatus] = useState(0);

  const [information, setInformation] = useState([]);
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Contructor 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        const data = await response.json();
        setInformation(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    };
    getData();
  },[]); 
 
  return (
    <Router>
    <div className="App">
    <Header/>
    <h1>React fetch {status}</h1>
    {status === 0 ? <p>Loading...</p> : null}
    {status === 2 ? <p>Sorry we cannot find data</p> : null}
      <Switch>
        <Route path = "/" 
        exact 
        component = {Homepage} />
        <Route 
        path="/about" 
        component={Aboutpage}/>
        <Route 
        path = "/parcels"
        render={() => (
              <Parcelspage information={information}/>
        )} 
         />
      </Switch>
      
    </div>
    </Router>
   
  );
}

 
