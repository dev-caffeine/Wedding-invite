import React from "react";
import { MapPin, CalendarCheck } from "lucide-react";

export default function EventDetails() {
  return (
    <section className="px-6 py-10 bg-yellow-50 dark:bg-yellow-900 dark:text-yellow-100 rounded-3xl shadow-xl mx-auto my-8 border border-yellow-200 dark:border-yellow-700 max-w-5xl text-center">
      <h2 className="text-4xl font-extrabold text-yellow-700 dark:text-yellow-300 mb-8 tracking-tight">
        Wedding Events ✨
      </h2>

      <div className="grid md:grid-cols-2 gap-8 justify-center items-center max-w-4xl mx-auto">
        {/* Haldi Ceremony */}
        <div className="bg-white/70 dark:bg-yellow-950 p-6 rounded-2xl shadow-md border border-yellow-200 dark:border-yellow-700 text-center">
          <h3 className="text-2xl font-semibold mb-2">💛 Haldi Ceremony</h3>
          <p className="text-lg">📍 Groom’s Residence</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Saturday 10th May, 2025, evening 6:00 PM
          </p>
        </div>

        {/* Wedding Ceremony */}
        <div className="bg-white/70 dark:bg-yellow-950 p-6 rounded-2xl shadow-md border border-yellow-200 dark:border-yellow-700 text-center">
          <h3 className="text-2xl font-semibold mb-2">💍 Wedding Ceremony</h3>
          <p className="text-lg">📍 Bride’s Residence</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Sunday 11th May, 2025
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
        <a
          href="https://maps.app.goo.gl/Wa2kP9aepxgYNxX68"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full shadow transition"
        >
          <MapPin size={20} />
          Open in Google Maps
        </a>

        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href =
              "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mahanama%20%26%20Ankita%20Wedding&dates=20250511T120000Z/20250511T193000Z&details=Join%20us%20for%20a%20beautiful%20Buddhist%20wedding!&location=Bride's%20Home&sf=true&output=xml";
              
            link.target = "_blank";
            link.click();
          }}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-full shadow transition"
        >
          <CalendarCheck size={20} />
          Add to Calendar
        </button>
      </div>
    </section>
  );
}
