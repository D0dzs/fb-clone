import global from "../../global.js";

export default function Footer() {
  return (
    <div className="lg:w-[800px] mx-auto">
      <div>
        <ul className="lg:w-[800px] flex flex-wrap justify-between text-[.665rem] lg:text-[0.9rem] lg:justify-start">
          {global.langs.map((lang, index) => {
            if (index === 0) {
              return (
                <li
                  key={index}
                  className="hover:underline mx-1 cursor-pointer opacity-70"
                >
                  <p>{lang}</p>
                </li>
              );
            }

            return (
              <li
                key={index}
                className="hover:underline mx-1 cursor-pointer opacity-50"
              >
                <p>{lang}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <hr className="my-2" />
      <div className="lg:w-[800px] flex flex-wrap justify-between lg:justify-start mb-4">
        {global.others.map((placeholder, index) => {
          if (index === 0) {
            return (
              <span
                key={index}
                className="hover:underline cursor-pointer text-[.665rem] lg:text-[0.9rem] mx-1 opacity-50"
              >
                {placeholder}
              </span>
            );
          }

          return (
            <span
              key={index}
              className="hover:underline cursor-pointer text-[.665rem] lg:text-[0.9rem] mx-1 opacity-50"
            >
              {placeholder}
            </span>
          );
        })}
      </div>
      <span className="text-[.6rem] ml-1 lg:text-sm opacity-50">
        Meta © 2022
      </span>
    </div>
  );
}
