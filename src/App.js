import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Directory from "./pages/Directory";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Table from "./components/Table"

function App() {
    return (
        <Router>
        <div>
            <Navbar />
            <Route  exact path="/" component= {Main} />
            <Route  exact path="/main" component= {Main} />
            <Route  exact path="/directory" component= {Directory} />
            <Route  exact path="/search" component= {Search} />
            <Table />
            <Footer />
        </div>
        </Router>
    )
}

export default App;
