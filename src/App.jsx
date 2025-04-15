// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import CountdownTimer from "./components/CountdownTimer";
import EventDetails from "./components/EventDetails";
import AboutCouple from "./components/AboutCouple";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf6e3] to-[#e0e8f9] dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-sans">
      <main className="max-w-3xl mx-auto p-4 space-y-12">
        <Hero />
        <CountdownTimer date="2025-05-11T16:45:00" />
        <EventDetails />
        <AboutCouple />
        <RSVPForm />
        <Footer />
      </main>
    </div>
  );
}

export default App;
