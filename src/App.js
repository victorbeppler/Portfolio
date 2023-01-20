import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import portifolio from "./Pages/portifolio";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route path="/" exact component={portifolio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
