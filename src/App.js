import "./styles.css";
import Create from "./components/create";
import { BrowserRouter as Router, Route , Link } from "react-router-dom";
import Read from "./components/read";
import Update from "./components/update";


function App() {
  return (
    <Router>
      <div className="main">
        <div className="main-style">
        <h2 className="main-header">React CRUD Operations</h2>
       <ul className="links">
         <Link to ='/read'>
         <li>See Database Users</li> 
         </Link>
         <Link to ='/create'>
         <li>Create User</li>
         </Link>
       </ul>
       </div>
        <div>
        
          <Route exact path="/create" component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/read" component={Read} />
        </div>

        <Route path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
