import { Suspense } from "react";
import Link from "next/link";
import AuthButton from "./auth-button";

export default function Header() {
  return (
    <div className="h-14">
      <nav className="py-3 px-2 flex justify-between">
        <Link href="/">
          <p className="font-semibold text-lg">Co Task</p>
        </Link>
        <Suspense>
          <AuthButton />
        </Suspense>
      </nav>
    </div>
  );
}
