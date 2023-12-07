import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" z-50 bg-white border rounded fixed p-2  " style={{width:"77%"}}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Black</span>
          <span className="text-slate-700">Coffer</span>
        </h1>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Dashboard
          </li>

          <li className=" text-slate-700 hover:underline cursor-pointer">
            {" "}
            Sign in
          </li>
        </ul>
      </div>
    </header>
  );
}
