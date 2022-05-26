import './App.css';
import Header from './components/Header/Header.js';
import Projects from './components/Projects/Projects.js';
import Project from './components/Project/Project.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { projectData } from "./components/Projects/projectData.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="test"></Header>
        <Routes>
          <Route path="/" element={<Projects />}></Route>
          <Route path={projectData[0].url} element={<Project project={projectData[0]} />}></Route>
          <Route path={projectData[1].url} element={<Project project={projectData[1]} />}></Route>
          <Route path={projectData[2].url} element={<Project project={projectData[2]} />}></Route>
          <Route path={projectData[3].url} element={<Project project={projectData[3]} />}></Route>
          <Route path={projectData[4].url} element={<Project project={projectData[4]} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
