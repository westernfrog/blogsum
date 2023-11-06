import Link from "next/link";
import Github from "./Github";

export default function Header() {
  return (
    <>
      <header className="sticky inset-x-0 top-0">
        <nav className="flex items-center justify-between text-slate-700">
          <Link href={"/"}>
            <h1 className="font-semibold tracking-tighter text-3xl lg:text-4xl">
              Blogsum
            </h1>
          </Link>
          <Link target="_blanck" href="https://github.com/westernfrog/blogsum">
            <Github />
          </Link>
        </nav>
      </header>
    </>
  );
}
