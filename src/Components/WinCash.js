import React from "react";

import logo from "./Assets/vplay-logo.png";
import ludo1 from "./Assets/17187106486.jpg";
import ludo2 from "./Assets/17187111885.jpg";
import { Link } from "react-router-dom";

const WinCash = () => {
  return (
    <div>
      <div className="p-4 mt-[60px]">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex items-center mb-2 relative">
            <span className="text-red-500 text-[1rem] font-semibold absolute top-[-20px]">
              SHORT NOTICE
            </span>
          </div>
          <p className="text-blue-500 text-center">
            5% commission: 3% referral:
          </p>
        </div>

        <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4">
          <marquee>हम आपकी सेवा २५ उपल्ब्ध है। 15 तारीख से</marquee>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Our Games</h2>
          <div className="grid grid-cols-2 gap-1">
            <Link to="/lite-mood">
            <div className="bg-white p-1 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-500  text-[0.75rem]">
                  🔴 ONLY CLASSIC LIVE
                </span>
              </div>
              <img src={ludo1} alt="Ludo Classic" className="w-full mb-2" />
              <p className="text-center font-semibold">Ludo Classic</p>
            </div>
            </Link>
            <Link to="/rich-mood">
            <div className="bg-white p-1 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-500 text-[0.75rem]">
                  🔴 ONLY CLASSIC LIVE
                </span>
              </div>
              <img src={ludo2} alt="Ludo Classic 2" className="w-full mb-2" />
              <p className="text-center font-semibold">Ludo Classic 2</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-lg max-w-lg mx-auto transform transition-transform">
        <div className="flex items-center p-4 py-7 justify-left mb-4 bg-[#f8f8f8]">
          <img
            src={logo}
            alt="Company Logo"
            className="w-16 h-16 mr-[40px]"
          />
          <button className="text-[0.8rem]">
            Terms, Privacy, Support
          </button>
        </div>
        <div className="space-y-6 mt-4">
          <div>
            <h2 className="text-[0.8rem] font-semibold text-foreground ">
              About Us
            </h2>
            <p className="text-[0.7rem]">
              finludo is a real-money gaming product owned and operated by
              Onovatechnologies (“finludo” or “We” or “Us” or “Our”).
            </p>
          </div>
          <div>
            <h2 className="text-[0.8rem] font-semibold text-foreground ">
              Our Business & Products
            </h2>
            <p className="text-[0.7rem]">
              We are an HTML5 game-publishing company and our mission is to make
              accessing games fast and easy by removing the friction of
              app-installs.
            </p>
            <p className="text-[0.7rem]">
              finludo is a skill-based real-money gaming platform accessible
              only for our users in India. It is accessible on{" "}
              <a
                href="https://www.finludo.com"
                className="text-primary hover:underline"
              >
                https://www.finludo.com
              </a>
              . On finludo, users can compete for real cash in Tournaments and
              Battles. They can encash their winnings via popular options such
              as Paytm Wallet, Amazon Pay, Bank Transfer, Mobile Recharges etc.
            </p>
          </div>
          <div>
            <h2 className="text-[0.8rem] font-semibold text-foreground ">
              Our Games
            </h2>
            <p className="text-[0.7rem]">
              finludo has a wide-variety of high-quality, premium HTML5 games.
              Our games are especially compressed and optimised to work on
              low-end devices and slow networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinCash;
