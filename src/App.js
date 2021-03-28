import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";


function App() {
    return (
        <Router>
        <div>
            <Navbar />
            <Route  exact path="/" component= {Main} />
            <Route  exact path="/main" component= {Main} />
            
            <Route  exact path="/search" component= {Search} />
          
        </div>
        </Router>
    )
}

export default App;
