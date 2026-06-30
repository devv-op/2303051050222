import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NotificationsPage from "./pages/NotificationsPage";
import PriorityPage from "./pages/PriorityPage";
import { authenticate } from "./api/auth";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    authenticate().then(() => setReady(true));
  }, []);

  if (!ready) {
    return <p>Loading app...</p>;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<NotificationsPage />} />
        <Route path="/priority" element={<PriorityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;