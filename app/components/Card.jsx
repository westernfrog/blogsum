import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Card(props) {
  return (
    <>
      <Link
        href={"/" + props.url}
        className="group col-span-6 ring-1 ring-gray-400 rounded shadow-inner"
      >
        <div className="h-full grid relative p-6 space-y-2">
          <h1 className="font-semibold tracking-tight text-2xl text-slate-700">
            {props.title}
          </h1>
          <p className="text-slate-600 pb-8">{props.desc}...</p>
          <div className="flex items-center gap-3 font-semibold text-slate-800 tracking-tight">
            Read More
            <ArrowLongRightIcon className="w-6 h-6 group-hover:translate-x-3 transition duration-300 ease-in-out" />
          </div>
        </div>
      </Link>
    </>
  );
}
