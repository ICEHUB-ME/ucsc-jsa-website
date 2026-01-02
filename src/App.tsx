import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Layout onNavigate={setCurrentPage}>
      {currentPage === "home" && (
        <HomePage onNavigate={setCurrentPage} />
      )}
      
      {currentPage === "events" && (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-slate-600">Calendar integration coming soon...</p>
          </div>
        </div>
      )}
      
      {currentPage === "about" && (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-slate-600">Officer profiles and history coming soon...</p>
          </div>
        </div>
      )}
    </Layout>
  );
}