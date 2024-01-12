import React from "react";
import AppRouter from "./components/routing/routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <AppRouter />
            </Router>
        </>
    );
}

export default App;
