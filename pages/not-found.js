import { Button } from "components/button";
import { Header } from "components/header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="mt-60 flex flex-col items-center justify-center text-base text-gray-400">
        <h2 className="text-7xl text-black">404</h2>
        <p className="text-lg">Page not found</p>
        <Button className="ghost">
          <Link href="/">
            <a className="text-base inline-flex items-center justify-center">
              <ArrowLeft height={18} width={18} />
              <span class="ml-2">Home</span>
            </a>
          </Link>
        </Button>
      </div>
    </>
  );
}
