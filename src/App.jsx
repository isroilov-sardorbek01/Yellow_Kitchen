import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <Routes>
                <Route
                    index
                    element={
                        <MainLayout>
                            <Home></Home>
                        </MainLayout>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
