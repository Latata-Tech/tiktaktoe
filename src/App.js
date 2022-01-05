import Landing from "./page/Landing";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Play from "./page/Play";

function App() {
  return (
      <Router>
        <div>
            <Routes>
                <Route exact path="/" element={<Landing />}/>
                <Route exact path="/play" element={<Play />}/>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
