import { Button } from "./button";
import Link from "next/link";

export function Header() {
  return (
    <nav>
      <div className="container flex items-center justify-start py-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <h1 className="text-black px-2 leading-sm font-semibold text-xl">
          <Link href="/">
            <a>Git Releases</a>
          </Link>
        </h1>
        <Button className="ghost ml-auto">
          <a
            href="https://github.com/barelyhuman/gitreleases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 border-b-2 border-black dark:text-gray-200 mx-1.5 sm:mx-6"
          >
            Github
          </a>
        </Button>
      </div>
    </nav>
  );
}
