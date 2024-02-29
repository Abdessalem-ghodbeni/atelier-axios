import { Suspense, lazy, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { NavigationBar } from "./pages/NavigationBar";
// import Sidebar from './pages/Sidebar';
// import Dashboard from "./pages/Dashboard";
const Dashboard = lazy(() => import("./pages/Dashboard"));
import Events from "./components/Events";
import AddEvent from "./components/AddEvent";

function App() {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/events">
            <Route index element={<Events />} />
            <Route path=":username" element={<Profile />} />
            <Route path="add" element={<AddEvent />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
