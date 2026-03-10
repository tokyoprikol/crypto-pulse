"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="px-10 py-5 flex items-center justify-between border-b">
        <Link href={"/"}>
          <Image src="logo.svg" alt="Logo" width={132} height={40}></Image>
        </Link>

        <nav className="flex items-center justify-between gap-4">
          <Link
            href={"/"}
            className={clsx({
              "border-b border-neutral-300": pathname === "/",
            })}
          >
            Home
          </Link>
          <p>Search Modal</p>
          <Link
            href={"/coins"}
            className={clsx({
              "border-b border-neutral-300": pathname === "/coins",
            })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  );
}
