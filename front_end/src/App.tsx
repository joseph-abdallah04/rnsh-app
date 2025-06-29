// src/App.tsx
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavBar from "./components/nav_bar"
import CsvResultsPage from "./pages/csv_results_page"
import SettingsPage from "./pages/settings-page"
import CsvUpload from "./pages/csv_upload"
import VideoUpload from "./pages/video_upload"

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<CsvUpload />} />
            <Route path="/csv-upload" element={<CsvUpload />} />
            <Route path="/csv-results" element={<CsvResultsPage />} />
            <Route path="/video-upload" element={<VideoUpload />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

