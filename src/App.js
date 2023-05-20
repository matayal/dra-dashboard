import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SharedLayout from "./Components/SharedLayout";
import GraphComponent from "./Components/GraphComponent";
import ConstructGraph from "./Components/ConstructGraph";
import Error from "./Components/Error";
import Community from "./Components/Community";
import ViewGraph from "./Components/ViewGraph";
import DbConnection from "./Components/DbConnection";
import LoadSts from "./Components/LoadSts";
import QuerySts from "./Components/QuerySts";
import FileUpload from "./Components/FileUpload";
import DatabaseSTS from "./Components/DatabaseSTS";
import RefineCommunity from "./Components/RefineCommunity";

function App() {
  return (
    <div className="home-space">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="db-connection" element={<DbConnection />} />
            <Route path="load-sts" element={<LoadSts />} />
            <Route path="load-sts-query" element={<QuerySts />} />
            <Route path="load-sts-file" element={<FileUpload />} />
            <Route path="load-sts-database" element={<DatabaseSTS />} />

            <Route path="construct-graph" element={<ConstructGraph />} />
            <Route path="graphs" element={<GraphComponent />} />
            <Route path="viewGraph" element={<ViewGraph />} />
            <Route path="community" element={<Community />} />
            <Route path="refine-community" element={<RefineCommunity />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
