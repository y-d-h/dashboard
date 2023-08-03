import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import CSV from "pages/CSV";
import Tables from "pages/Tables";
import Settings from "pages/Settings";
import Test from "pages/Test";
import Login from "pages/Login";
import Detail from "pages/Detail";
import Footer from "components/Footer";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  const location = useLocation().pathname;

  return (
    <>
      {location === "/login" ? <></> : <Sidebar />}

      <div className="md:ml-64">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/CSV" component={CSV} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/detail/:phone" component={Detail} />
          <Redirect from="*" to="/login" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
