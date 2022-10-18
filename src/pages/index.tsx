import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  // * Get Darkmode using matchMedia (windows prefers-color-scheme)
  const [theme, setTheme] = useState<boolean>();

  // * Handle if prefer darkmode or lightmode
  useEffect(() => {
    // * Get prefers-color-scheme
    const darkModePreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    //  * Set true if darkmode preferred else lightmode
    setTheme(darkModePreferred);
  }, []);

  return (
    <>
      <Head>
        <title>Facebook - Lépj be, vagy regisztrálj!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page content */}
      <main
        className={`overflow-hidden transition-colors ${
          theme && "bg-[#292b2d] text-white"
        }`}
      >
        <div id="container">
          {/* Dark/Light switcher */}
          <div className="absolute top-0 right-0 p-6">
            <button onClick={() => setTheme(!theme)}>
              {theme ? <BiMoon size={36} /> : <BiSun size={36} />}
            </button>
          </div>
          {/* Hero section */}
          <div
            id="hero-wrapper"
            className={`${
              theme ? "bg-[#18191a]" : "bg-[#f0f2f5]"
            } grid grid-flow-row items-center justify-center gap-8 lg:grid-flow-col h-[70vh] lg:h-[75vh]`}
          >
            {/* Hero container */}
            <div className="lg:w-[600px] h-full p-0 lg:py-32 lg:px-8 px-4">
              {/* Hero left-side */}
              <div className="flex items-center justify-center lg:block">
                {/* Facebook SVG from https://facebook.com/ */}
                <Image
                  src={"/facebook_logo.svg"}
                  width={300}
                  height={100}
                  className="lg:-translate-x-9 translate-y-4"
                />
              </div>
              {/* Hero left-side subtitle */}
              <p className="lg:text-3xl text-xl text-center lg:text-left">
                A Facebook segít a kapcsolattartásban és élményeid
                megosztásában.
              </p>
            </div>
            {/* Hero right-side */}
            <div className="lg:w-[500px] h-full p-0 lg:py-32 lg:px-8 px-6">
              {/* Guest login form lol */}
              <form
                action=""
                className={`${
                  theme ? "bg-[#292b2d]" : "bg-white"
                } lg:p-8 p-4 rounded-[6px] shadow-xl`}
              >
                {/* Form container */}
                <div className="grid gap-4">
                  {/* <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail cím vagy telefonszám"
                    className={`border border-gray-300 rounded-md p-2 outline-none focus:shadow-lg text-base lg:text-lg transition-colors ${
                      theme
                        ? "bg-[#292b2d] text-white focus:border-white"
                        : "focus:border-[#1b74e4]"
                    }`}
                  />
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Jelszó"
                    className={`border border-gray-300 rounded-md p-2 outline-none focus:shadow-lg text-base lg:text-lg transition-colors ${
                      theme
                        ? "bg-[#292b2d] text-white focus:border-white"
                        : "focus:border-[#1b74e4]"
                    }`}
                  /> */}
                  {/* Link to /fy (home) */}
                  <Link href={"/fy"} shallow={true}>
                    <button className="bg-[#1877f2] text-white p-2 rounded-[6px] hover:bg-[#166fe5] transition-colors font-semibold">
                      Bejelentkezés mint Vendég
                    </button>
                  </Link>
                  {/* this button does not do anything */}
                  <Link href="/" rel="noreferrer">
                    <span className="hover:underline text-[#1877f2] text-sm cursor-pointer w-fit mx-auto">
                      Elfelejtetted a jelszavadat?
                    </span>
                  </Link>
                  {/* just an hr lol */}
                  <hr />
                  {/* this button does not do anything */}
                  <button
                    disabled={true}
                    className="bg-[#42b72a] w-fit mx-auto text-white p-2 px-4 rounded-[6px] hover:bg-[#3aa221] transition-colors cursor-pointer font-semibold"
                  >
                    Új fiók létrehozása
                  </button>
                </div>
              </form>
              <br />
              {/* Hero right-side subtitle */}
              <p className="text-xs lg:text-base text-center mb-6 lg:mb-0">
                <strong className="hover:underline cursor-pointer">
                  Oldal létrehozása
                </strong>{" "}
                híresség, márka vagy vállalkozás számára.
              </p>
            </div>
          </div>
          {/* Footer */}
          <div
            className={`shadow-xl p-6 h-[30vh] lg:h-[25vh] ${
              theme ? "shadow-white" : "shadow-black"
            }`}
          >
            {/* Footer element */}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
