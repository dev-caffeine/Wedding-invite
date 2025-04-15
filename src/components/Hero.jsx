import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const scrollToRSVP = () => {
    const formElement = document.getElementById("rsvp-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section text-center space-y-4 px-4 sm:px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-bold text-yellow-700 dark:text-yellow-400"
      >
        💛 Mahanama & Ankita 💙
      </motion.h1>

      <p className="text-base sm:text-lg font-medium">
        With blessings from our beloved families,
        <br />
        <span className="font-semibold">सौ शीतल/रोहन पंढरीनाथ वाघमारे</span> & Family
      </p>

      <img
        src="./src/assets/bodhi-bg.png"
        alt="Couple"
        className="w-52 sm:w-64 h-52 sm:h-64 mx-auto object-cover rounded-full shadow-lg border-4 border-yellow-400"
      />

      <p className="text-lg font-semibold mt-2">
        Wedding Date:{" "}
        <span className="text-pink-600 dark:text-pink-400">11th May 2025</span>
      </p>

      <audio controls autoPlay loop className="mx-auto w-full max-w-sm">
        <source src="./src/assets/instrumental.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="hero">
        <button
          onClick={scrollToRSVP}
          className="rsvp-button diya-hover mt-4 text-white"
        >
          RSVP Now
        </button>
      </div>
    </section>
  );
}
