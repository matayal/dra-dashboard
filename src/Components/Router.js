// import * as React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Home from "./Home";
// import UploadSTS from "./UploadSTS";
// import Graph from "./Graph";
// import CreateGraphs from "./CreateGraphs";
// import NavMenu from "./NavMenu";

// function Router() {
//   return (
//     <div className="container">
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/load-sts" component={UploadSTS} />
//           <Route path="/construct-graph" component={CreateGraphs} />
//           <Route path="/graphs" component={Graph} />
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default Router;
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import Home from "./Home";
import UploadSTS from "./UploadSTS";
import Graph from "./Graph";
import CreateGraphs from "./CreateGraphs";

const App = () => {
  return (
    <Router>
      <div className="app">
        <LeftPanel />
        <div className="main">
          <Route path="/" component={Home} />
          <Route path="/about" component={UploadSTS} />
          <Route path="/contact" component={Graph} />
        </div>
      </div>
    </Router>
  );
};

export default App;
