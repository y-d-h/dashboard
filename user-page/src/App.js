import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Tables from "pages/Tables";

import Footer from "components/Footer";
import Detail from "pages/Detail";
import Result from "pages/Result";

// Tailwind CSS Style Sheet
import "../src/assets/styles/tailwind.css";

function App() {
  const location = useLocation().pathname;

  return (
    <>
      {location === "/tables" ? <></> : <Sidebar />}
      <Route exact path="/tables" component={Tables} />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/detail/:phone" component={Detail} />
          <Route exact path="/result/:phone" component={Result} />
          <Redirect from="*" to="/tables" />
        </Switch>
        {location === "/tables" ? <></> : <Footer />}
      </div>
    </>
  );
}

export default App;
