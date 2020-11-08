import React, { useState, useEffect } from "react";
import Header from "./components/organisms/Header";
import Homepage from "./components/templates/Homepage";
import Aboutpage from "./components/templates/Aboutpage";
import Parcelpage from "./components/templates/Parcelpage";
import Parcelspage from "./components/templates/Parcelspage";
import Searchparcel from "./components/templates/Searchparcel";
import Parceltable from "./components/templates/Parceltable";
import Contactpage from "./components/templates/Contactpage";
import Footer from "./components/organisms/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/style.css";

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
  }, []);

  console.log(status);
  return (
    <Router>
      <div className="App">
        <Header />

        {status === 0 ? <p>Loading...</p> : null}
        {status === 2 ? <p>Sorry we cannot find data</p> : null}
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Homepage information={information} />}
          />
          <Route path="/about" component={Aboutpage} />
          <Route
            path="/parcels"
            render={() => <Parcelspage information={information} />}
          />
          <Route path="/contact" component={Contactpage} />
          <Route
            path="/search-page/:query"
            render={({ match }) => (
              <Searchparcel match={match} information={information} />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
