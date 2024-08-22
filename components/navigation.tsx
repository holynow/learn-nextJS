"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home {path === "/" ? "🤭" : null}</Link>
        </li>
        <li>
          <Link href="/about-us">
            About us {path === "/about-us" ? "🤭" : null}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
