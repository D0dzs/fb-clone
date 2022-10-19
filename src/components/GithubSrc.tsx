import { AiOutlineGithub } from "react-icons/ai";

export default function GithubSrc() {
  return (
    <div
      className="absolute bottom-8 right-8 text-white bg-black p-2 rounded-full cursor-pointer
    before:content-['SRC'] text-sm before:absolute before:bottom-14 before:right-3 before:translate-y-1 before:opacity-0 hover:before:translate-y-0 hover:before:opacity-100 before:transition-all before:duration-300"
    >
      <a href="https://github.com/D0dzs/fb-clone" target={"_blank"}>
        <AiOutlineGithub size={32} fill="white" className="mx-auto" />
      </a>
    </div>
  );
}
