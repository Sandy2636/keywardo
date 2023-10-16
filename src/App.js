import "./App.css";
import HomeLayout from "./Layout/HomeLayout";
import Dashboard from "./Screens/Dashboard";
import CreateAd from "./Screens/CreateAd";
import CreateForm from "./Screens/CreateForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeLayout child={<Dashboard />} />} />
        <Route
          path="/create-ad"
          element={<HomeLayout child={<CreateAd />} />}
        />
        <Route
          path="/create-form"
          element={<HomeLayout child={<CreateForm />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
