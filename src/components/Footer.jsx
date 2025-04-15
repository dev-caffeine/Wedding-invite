import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 px-4 sm:px-6 bg-yellow-50 dark:bg-yellow-900 text-center text-yellow-900 dark:text-yellow-100">
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-sm sm:text-base italic">
          “Three things cannot be long hidden: the sun, the moon, and the truth.” – Buddha
        </p>

        <hr className="border-yellow-300 dark:border-yellow-700" />

        <p className="text-xs sm:text-sm font-light">
          साभार: डॉ. बाबासाहेब आंबेडकर यांना वंदन. ✊
        </p>

        <p className="text-xs sm:text-sm font-medium">
          Developed with 💛 by{" "}
          <span className="font-semibold">Kashyap (Groom's Brother)</span>
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm mt-2">
          <a
            href="https://wa.me/918390370012"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-green-600"
          >
            Contact on WhatsApp
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://www.instagram.com/dev.caffeine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-pink-500"
          >
            Instagram!
          </a>
        </div>
      </div>
    </footer>
  );
}
