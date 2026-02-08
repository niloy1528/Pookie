import "./App.css";

import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);

  const quotes = [
    "Dhong kortesina ekkebarei🥺",
    "Choloo Naaaaaaaa! 🥺🥺🥺🥺",
    "Sorry Pakhiii, Vul hoye gese 😢",
    "Emn korbo na ar😢😢",
    "Maf kore daoo Na, Babyyyy 🥺",
    "Pleaseeeeeee 😭",
    "Onek sahos dekhay felsi tmk, Ar hobe na 🥺",
    "Thapray dat falay dile Tmr Ammmu ke potabo kivabe😢",
    "Fokla dat er cheler kache biye dibe? Tmr Ammu!😢 ",
    "😭😭😭😭😭",
    "I Meow You😽",
  ];

  const handleNoHover = () => {
    setQuoteIndex((i) => (i + 1) % quotes.length);
    setNoPos({
      x: Math.random() * 250 - 125,
      y: Math.random() * 200 - 100,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 text-gray-800 overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white/70 backdrop-blur shadow">
        <h1 className="font-bold text-xl text-rose-600">Hiii Abiha👋</h1>
        <div className="space-x-6">
          <button
            onClick={() => setPage("home")}
            className="hover:text-rose-500"
          >
            Home
          </button>
          <button
            onClick={() => setPage("dates")}
            className="hover:text-rose-500"
          >
            Dates
          </button>
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div className="flex flex-col items-center justify-center mt-24 text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Sorry Pakhiii. Vul hoye gese Amar.😥 Cholo na esob Unfriend-Block
            bad diye 2 jon Pahar e Palay jai. Eksathe sathe thaki ❤️ Jum chas
            kore khai!🥹 Abiha!! Jaba amar sathee? Tomakei amr lagbeeee❤️❤️❤️
          </motion.h2>

          {/* Quotes */}
          <div className="h-12 mb-10 text-xl text-rose-600 font-semibold transition-all duration-300">
            {quotes[quoteIndex]}
          </div>

          <div className="relative flex gap-12 items-center">
            {/* YES Button */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.3 }}
              className="px-10 py-4 bg-rose-500 text-white rounded-full shadow-xl"
              onClick={() => setShowPopup(true)}
            >
              Huuuuu Cholo Jaaaaaan 😘
            </motion.button>

            {/* NO Button */}
            <motion.button
              onMouseEnter={handleNoHover}
              style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
              className="px-10 py-4 bg-gray-300 rounded-full shadow cursor-not-allowed"
            >
              Thapraiya dat falay dibo, Oshovvo Chele😠
            </motion.button>
          </div>

          {/* Popup */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-md md:max-w-lg text-center">
                <h3 className="text-3xl font-bold text-rose-600 mb-4">
                  💖 Yeeeeeeee Tmr Bou Peye Gesi... Ammuuuuuuu 💖
                </h3>
                <img
                  src="/143.png"
                  alt="Happy"
                  className="w-48 h-48 object-cover rounded-xl mx-auto mb-6 shadow-lg"
                />
                <p className="text-lg mb-6">Ummmmmmmmah🥰</p>
                <button
                  className="px-8 py-3 bg-rose-500 text-white rounded-full font-semibold shadow hover:bg-rose-600 transition"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* DATES */}
      {page === "dates" && (
        <div className="max-w-3xl mx-auto mt-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-rose-600">
            Our Dates 💕
          </h2>

          <div className="relative border-l-4 border-rose-300 pl-8 space-y-14">
            <div className="flex gap-6 items-start">
              <img
                src="/inst.jpeg"
                alt="First talk"
                className="w-24 h-24 object-cover rounded-xl shadow"
              />
              <div>
                <span className="text-sm text-rose-500">✉️ First Talk</span>
                <p className="font-semibold">17 October,2025 </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <img
                src="/d1.jpeg"
                alt="1st"
                className="w-24 h-24 object-cover rounded-xl shadow"
              />
              <div>
                <span className="text-sm text-rose-500">🌹 First Meet</span>
                <p className="font-semibold">6 November ,2025</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <img
                src="/d2.jpeg"
                alt="2nd"
                className="w-24 h-24 object-cover rounded-xl shadow"
              />
              <div>
                <span className="text-sm text-rose-500">✨ 2nd Meet</span>
                <p className="font-semibold">21 November, 2025</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <img
                src="/d3.jpeg"
                alt="3rd"
                className="w-24 h-24 object-cover rounded-xl shadow"
              />
              <div>
                <span className="text-sm text-rose-500">🥰 3rd Meet</span>
                <p className="font-semibold">12 December ,2025</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <img
                src="/d4.jpeg"
                alt="4th"
                className="w-24 h-24 object-cover rounded-xl shadow"
              />
              <div>
                <span className="text-sm text-rose-500">🤍 4th Meet</span>
                <p className="font-semibold">27 January ,2026</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <img
                src="/143.png"
                alt="next"
                className="w-24 h-24 object-cover rounded-xl shadow"
              />
              <div>
                <span className="text-sm text-rose-500">Permanent Date???</span>
                <p className="font-semibold">Ahem Ahemmm!!!!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
