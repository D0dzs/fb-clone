import Head from "next/head";
import { BiMoon, BiSun, BiLink } from "react-icons/bi";
import { HiHome, HiUserGroup } from "react-icons/hi";
import { BsFillGrid3X3GapFill, BsCart3 } from "react-icons/bs";
import { SiFacebookgaming } from "react-icons/si";
import { FiMonitor } from "react-icons/fi";
import { MdPeopleAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";

const random = Math.floor(Math.random() * 50);
const beforeShit =
  "before:w-3 before:bg-[#3996ff] before:h-9 hover:before:-translate-x-4 before:-translate-x-6 before:rounded-[6px] before:content-[''] before:transition-transform mt-2 py-px";
const activeLol =
  "before:w-3 before:bg-[#3996ff] before:h-9 before:-translate-x-4 before:rounded-[6px] before:content-[''] before:transition-transform py-px";
const iHateThingsAmI =
  "before:w-3 before:bg-[#3996ff] before:h-9 hover:before:-translate-x-4 before:-translate-x-6 before:rounded-[6px] before:content-[''] before:transition-transform py-px";

export default function Fy() {
  const [theme, setTheme] = useState<boolean>();

  useEffect(() => {
    const darkModePreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(darkModePreferred);
  }, []);

  return (
    <>
      <Head>
        {random == 0 ? (
          <title>Facebook</title>
        ) : (
          <title>({random}) Facebook</title>
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page content */}
      <main
        className={`h-screen w-screen transition-colors overflow-x-hidden ${
          theme ? "bg-[#18191a]" : "bg-white"
        }`}
      >
        {/* Header */}
        <div
          id="fb-header"
          className={`sticky top-0 transition-colors px-6 py-1 flex border-b-2 justify-between items-center z-[10] ${
            theme
              ? "bg-[#242526] text-white border-b-[#3E4042]"
              : "bg-slate-200 text-black border-b-gray-300"
          }`}
        >
          {/* Facebook SVG */}
          <Link href="/" rel="noreferrer">
            <svg
              viewBox="0 0 120 24"
              width={120}
              xmlns="http://www.w3.org/2000/svg"
              fill={`${theme ? "white" : "black"}`}
              className="my-1"
            >
              <path d="m109.202 14.864 4.404-7.03h4.746l-4.622 7.278 4.808 7.463h-4.746l-4.59-7.215v7.215h-4.467V.433l4.467-.402v14.833ZM98.596 14.524c0-1.951-.807-3.5-2.885-3.5s-2.885 1.549-2.885 3.5v1.363c0 1.95.807 3.499 2.885 3.499s2.885-1.549 2.885-3.5v-1.362ZM88.36 15.577v-.743c0-4.243 2.42-7.309 7.351-7.309s7.351 3.066 7.351 7.309v.743c0 4.242-2.42 7.308-7.351 7.308-4.932 0-7.351-3.066-7.351-7.308ZM82.406 14.524c0-1.951-.807-3.5-2.884-3.5-2.079 0-2.885 1.549-2.885 3.5v1.363c0 1.95.806 3.499 2.885 3.499 2.077 0 2.884-1.549 2.884-3.5v-1.362Zm-10.235 1.053v-.743c0-4.243 2.419-7.309 7.35-7.309 4.932 0 7.352 3.066 7.352 7.309v.743c0 4.242-2.42 7.308-7.352 7.308-4.931 0-7.35-3.066-7.35-7.308ZM66.216 14.648c0-2.075-.806-3.623-2.946-3.623-1.83 0-2.823 1.3-2.823 3.406v1.548c0 2.106.993 3.407 2.823 3.407 2.14 0 2.946-1.549 2.946-3.623v-1.115Zm4.467 1.022c0 4.118-1.985 7.215-6.08 7.215-2.233 0-3.783-1.115-4.404-2.539v2.23h-4.218V.434L60.447.03v9.848c.651-1.3 2.078-2.354 4.157-2.354 4.094 0 6.079 3.097 6.079 7.216v.929ZM44.723 13.843h5.397v-.372c0-1.61-.651-2.88-2.606-2.88-2.016 0-2.791 1.27-2.791 3.252m-4.466 1.92v-1.301c0-4.18 2.388-6.937 7.257-6.937 4.59 0 6.607 2.787 6.607 6.875v2.353h-9.398c.093 2.014.992 2.912 3.474 2.912 1.675 0 3.443-.341 4.745-.898l.807 3.065c-1.179.62-3.598 1.084-5.738 1.084-5.645 0-7.754-2.818-7.754-7.153M35.388 7.525c1.737 0 3.38.372 4.28.991l-.992 3.159c-.683-.34-1.8-.682-2.978-.682-2.42 0-3.474 1.394-3.474 3.778v.868c0 2.384 1.055 3.778 3.474 3.778 1.179 0 2.295-.34 2.978-.682l.992 3.16c-.9.618-2.543.99-4.28.99-5.242 0-7.63-2.818-7.63-7.34v-.68c0-4.522 2.388-7.34 7.63-7.34M15.973 15.732c0 2.198.806 3.654 2.884 3.654 1.83 0 2.76-1.332 2.76-3.438v-1.486c0-2.106-.93-3.437-2.76-3.437-2.078 0-2.884 1.455-2.884 3.654v1.053Zm-4.467-.991c0-4.119 1.954-7.216 6.049-7.216 2.233 0 3.598 1.146 4.249 2.57v-2.26h4.28v14.74h-4.28v-2.23c-.62 1.425-2.016 2.54-4.25 2.54-4.094 0-6.048-3.097-6.048-7.215v-.93ZM9.274 3.592c-1.396 0-1.8.62-1.8 1.982v2.26h3.723l-.372 3.655h-3.35v11.086H3.009V11.49H0V7.835h3.009V5.636C3.009 1.951 4.497 0 8.654 0c.9 0 1.954.062 2.605.155v3.437H9.274Z"></path>
            </svg>
          </Link>
          {/* Dark/Light switcher */}
          <div>
            <button onClick={() => setTheme(!theme)} className="my-1">
              {theme ? <BiMoon size={36} /> : <BiSun size={36} />}
            </button>
          </div>
          {/* Profile */}
          <div className="flex items-center lg:translate-x-16 lg:hover:translate-x-0 transition-transform cursor-pointer lg:hover:before:content-['Üsd_meg!'] lg:hover:before:absolute lg:hover:before:top-14 lg:hover:before:right-5">
            <span>
              <b>Vendég</b>
            </span>
            <img
              src="guest_profile.png"
              alt="profile"
              width={36}
              className={`border rounded-full ml-7 ${
                theme ? "border-gray-600" : "border-black"
              }`}
            />
          </div>
        </div>
        {/* This is the brainded section lol */}
        <div
          id="sidebar-navbar"
          className={`py-3 ${
            theme ? "text-white" : "text-black"
          } w-[300px] h-screen text-white pl-2`}
        >
          <div id="con-1" className="py-2">
            <div
              className={`flex items-center justify-start sticky ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${activeLol}`}
            >
              <div>
                <p className="flex items-center self-center">
                  <HiHome size={24} fill="#3996ff" />
                  <span className="my-1 ml-2 font-thin">Kezdőlap</span>
                </p>
              </div>
            </div>
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${beforeShit}`}
            >
              <div>
                <p className="flex items-center self-center">
                  <img
                    src="guest_profile.png"
                    alt="profile"
                    width={26}
                    className={`border rounded-full ${
                      theme ? "border-gray-600" : "border-black"
                    }`}
                  />
                  <span className="my-1 ml-2 font-thin">Vendég</span>
                </p>
              </div>
            </div>
          </div>
          <div id="con-2" className="py-2">
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${iHateThingsAmI}`}
            >
              <div className="bg-[#303031] rounded-full w-[26px] h-[26px] p-1 flex justify-center items-center">
                <BsFillGrid3X3GapFill width={24} fill="white" />
              </div>
              <span className="my-1 ml-2 font-semibold text-lg">Menü</span>
            </div>
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${beforeShit}`}
            >
              <FiMonitor size={24} fill="#3996ff" />
              <span className="my-1 ml-2 font-thin">Watch</span>
            </div>
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${beforeShit}`}
            >
              <MdPeopleAlt size={24} fill="#3996ff" />
              <span className="my-1 ml-2 font-thin">Ismerős</span>
            </div>
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${beforeShit}`}
            >
              <BsCart3 size={24} fill="#3996ff" />
              <span className="my-1 ml-2 font-thin">Marketplace</span>
            </div>
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${beforeShit}`}
            >
              <SiFacebookgaming size={24} fill="#3996ff" />
              <span className="my-1 ml-2 font-thin">Gaming</span>
            </div>
          </div>
          <div id="con-3" className="py-2">
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${iHateThingsAmI}`}
            >
              <div className="bg-[#303031] rounded-full w-[26px] h-[26px] p-1 flex justify-center items-center">
                <HiUserGroup width={24} fill="white" />
              </div>
              <span className="my-1 ml-2 font-semibold text-lg">Csoportok</span>
            </div>
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${beforeShit}`}
              onClick={() => open("https://www.riotgames.com/en")}
            >
              <p className="flex items-center self-center">
                <img
                  src="riotgames.png"
                  alt="profile"
                  width={26}
                  className={`border rounded-full ${
                    theme ? "border-gray-600" : "border-black"
                  }`}
                />
                <span className="my-1 ml-2 font-thin">Riot Games</span>
              </p>
            </div>
          </div>
          <div id="con-4" className="py-2">
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${iHateThingsAmI}`}
            >
              <div className="bg-[#303031] rounded-full w-[26px] h-[26px] p-1 flex justify-center items-center">
                <BiLink width={24} fill="white" />
              </div>
              <span className="my-1 ml-2 font-semibold text-lg">
                Hivatkozások
              </span>
            </div>
            <div
              className={`flex items-center justify-start ${
                theme ? "hover:bg-[#3A3B3C]" : "hover:bg-[#c6cace]"
              } transition-colors w-full cursor-pointer rounded-[6px] ${beforeShit}`}
              onClick={() => open("https://www.youtube.com/")}
            >
              <p className="flex items-center self-center">
                <img
                  src="youtube.png"
                  alt="profile"
                  width={26}
                  className={`border rounded-full ${
                    theme ? "border-gray-600" : "border-black"
                  }`}
                />
                <span className="my-1 ml-2 font-thin">youtube.com</span>
              </p>
            </div>
          </div>
        </div>
        <div id="fy-main"></div>
      </main>
    </>
  );
}
